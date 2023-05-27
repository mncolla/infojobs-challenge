"use client";

import {
  FormEvent,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";

interface GenerateIAFormProps extends PropsWithChildren {
  data?: any;
}

const getTextCvData = async () => {
  const res = await fetch(`/api/textcv`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { data }: any = await res.json();

  return data;
};

const putTextCvData = async (text: any) => {
  const res = await fetch(`/api/textcv`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(text),
  });

  return res;
};

const GenerateIAForm = ({ data }: GenerateIAFormProps) => {
  const [isFetching, setIsFetching] = useState<boolean>(true);

  const textCvRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();
    const textValue = e.target.textCvData.value;
    const res = await putTextCvData(textValue);
    console.log("resp", res);
  };

  const handleGenerateIA = () => {
    setIsFetching(true);
    fetch(`/api/generate`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(({ text }: any) => {
        textCvRef.current!.value = text;
        setIsFetching(false);
      });
  };

  useEffect(() => {
    getTextCvData().then((res) => {
      textCvRef.current!.value = res;
      setIsFetching(false);
    });
  }, []);

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="w-full md:w-[446px] mx-auto"
    >
      <h1 className="text-center  text-3xl font-bold text-[#2d3133] mb-9">
        Editar CV en texto
      </h1>
      <label htmlFor="textCvData" className="mb-2">
        CV en texto
      </label>
      <textarea
        className="resize-y w-full appearance-none min-h-[150px] mx-auto overflow-hidden border rounded border-[#c7c7c7] px-2 py-1 focus:outline-none focus:border-[#167db7] focus:border focus:border-solid"
        name="textCvData"
        value={data}
        id="textCvData"
        ref={textCvRef}
        disabled={isFetching}
        placeholder="Completa tu perfil con información adicional relevante para las empresas o datos que no hayas podido introducir en otros campos."
      ></textarea>
      <div className="h-[80px] flex  items-center text-xs sm:text-sm transition-all">
        <button
          disabled={isFetching}
          type="submit"
          className="bg-[#167db7] border-[#167db7] border border-solid rounded text-white shadow-lg px-4 py-2 font-semibold transition-all"
        >
          GUARDAR
        </button>
        <button
          disabled={isFetching}
          className="hover:bg-[#167db7] border-[#167db7] border border-solid rounded hover:text-white text-[#167db7] shadow-lg px-4 py-2 font-semibold mx-2 transition-all"
        >
          CANCELAR
        </button>
        <div className="w-full flex justify-end">
          <button
            onClick={handleGenerateIA}
            className="bg-[#2D3133] sm:flex border-[#2D3133] border border-solid rounded text-white shadow-lg px-4 py-2 font-semibold transition-all "
          >
            <span className="hidden sm:block">GENERAR CON &nbsp;</span>
            <span>IA</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default GenerateIAForm;
