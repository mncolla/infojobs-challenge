import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";

const apiKey = process.env.OPENAI_KEY;

const configuration = new Configuration({ apiKey });
const openai = new OpenAIApi(configuration);

const SYSTEM_MESSAGE: ChatCompletionRequestMessage = {
  role: "system",
  content: `
    Eres una IA que debe generar un resumen profesional en párrafos dirigido a personal de reclutamiento.
    Vas a recibir información sobre 3 posibles tópicos: Educación, Experiencia laboral y aspiraciones futuras.
    La cantidad máxima de palabras está limitada a 400. 
    El texto generado debe ser sin titulos ni enunciados, solo los párrafos.
    La información de entrada es la siguiente: 
`,
};

const generateSummary = async (text: string) => {
  try {
    const compilation = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        SYSTEM_MESSAGE,
        {
          role: "user",
          content: text,
        },
      ],
    });

    const summary = compilation.data.choices[0].message?.content;

    const summaryWithoutHeader = summary?.replace(/^Resumen: /i, "");

    return summaryWithoutHeader;
  } catch (error) {
    console.log("Error OPENAI:", error);
    throw error;
  }
};

export default generateSummary;
