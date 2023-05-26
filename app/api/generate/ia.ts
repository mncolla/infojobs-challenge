import { Configuration, OpenAIApi } from "openai";

const apiKey = process.env.OPENAI_KEY;

const configuration = new Configuration({ apiKey });
const openai = new OpenAIApi(configuration);

const basePrompt = `
    Eres una IA que debe generar un resumen (curriculum vitae) en texto plano.
    Vas a recibir información sobre 3 posibles tópicos: Educación (formación académica), Experiencia laboral y aspiraciones para un futuro empleo.
    Tu objetivo será generar un resumen altamente atractivo para cualquier personal de reclutamiento.
    Trata de entender cualquier tipo de error de formato o falta de ortografía.
    La cantidad máxima de palabras está limitada a 500. 
    La información de entrada es la siguiente: 
`;

const generateSummary = async (text: string) => {
  try {
    const compilation = await openai.createCompletion({
      prompt: `${basePrompt} ${text}`,
      model: "text-davinci-003",
      max_tokens: 2200,
      temperature: 0.7,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });

    console.log("DEBUG IA", compilation.data.choices);

    const summary = compilation.data.choices[0].text;

    const summaryWithoutHeader = summary?.replace(/^Resumen: /i, "");

    return summaryWithoutHeader;
  } catch (error) {
    throw error;
  }
};

export default generateSummary;
