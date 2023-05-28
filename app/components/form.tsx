"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  generateTextCvWithIA,
  getTextCvData,
  saveTextCvData,
} from "../services/textcv";
import { TextCVResponse } from "../types";

import toast from "react-hot-toast";

const GenerateIAForm = () => {
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [textcvs, setTextcvs] = useState<TextCVResponse[]>([]);
  const textCvRef = useRef<HTMLTextAreaElement>(null);
  const selectCvRef = useRef<HTMLSelectElement>(null);

  const handleGenerateIA = async () => {
    setIsFetching(true);
    const cvSelected = selectCvRef.current!.value;
    /* const text = await toast.promise(generateTextCvWithIA(cvSelected), {
      loading: "Generando...",
      success: "¡Listo!",
      error: "Error, no se pudo generar",
    }); */
    const text = await generateTextCvWithIA(cvSelected);

    textCvRef.current!.value = text;
    setIsFetching(false);
  };

  const handleSave = async () => {
    setIsFetching(true);
    const cvSelected = selectCvRef.current!.value;
    const textValue = textCvRef.current!.value;
    toast.promise(saveTextCvData(cvSelected, textValue), {
      loading: "Guardando...",
      success: "¡Guardado!",
      error: "Error, no se pudo guardar",
    });
    const cvtexts = await getTextCvData();
    setTextcvs(cvtexts);
    setIsFetching(false);
  };

  const handleChangeCv = (e: ChangeEvent<HTMLSelectElement>) => {
    const next = textcvs.find((cv) => cv.id === e.target.value);
    textCvRef.current!.value = next!.text;
  };

  const handleCancel = () => {
    const found = textcvs.find((cv) => cv.id === selectCvRef.current!.value);
    textCvRef.current!.value = found!.text;
    toast("¡Cambios descartados!", { style: { background: "#F1C40F" } });
  };

  useEffect(() => {
    getTextCvData().then((res: TextCVResponse[]) => {
      setTextcvs(res);
      const principal = res.find((cv) => cv.isPrincipal);
      textCvRef.current!.value = principal!.text;
      setIsFetching(false);
    });
  }, []);

  return (
    <div className="w-full md:w-[446px] mx-auto">
      <h1 className="text-center  text-3xl font-bold text-[#2d3133] mb-9">
        Editar CV en texto
      </h1>
      <div className="flex justify-between pb-2">
        <label htmlFor="textCvData" className="mb-2">
          CV en texto
        </label>
        <select
          name="cvSelect"
          id=""
          ref={selectCvRef}
          onChange={handleChangeCv}
        >
          {textcvs.map((cv, i) => (
            <option key={cv.id} value={cv.id} defaultChecked={cv.isPrincipal}>
              {cv.name} {cv.isPrincipal && <>(Principal)</>}
            </option>
          ))}
        </select>
      </div>
      <textarea
        className="resize-y w-full appearance-none min-h-[150px] mx-auto border rounded border-[#c7c7c7] px-2 py-1 focus:outline-none focus:border-[#167db7] focus:border focus:border-solid"
        name="textCvData"
        id="textCvData"
        ref={textCvRef}
        disabled={isFetching}
        placeholder="Completa tu perfil con indivación adicional relevante para las empresas o datos que no hayas podido introducir en otros campos."
      ></textarea>
      <div className="h-[80px] flex  items-center text-xs sm:text-sm transition-all">
        <button
          disabled={isFetching}
          onClick={handleSave}
          className="bg-[#167db7] hover:bg-[#126492] border-[#167db7] border border-solid rounded text-white shadow-lg px-4 py-2 font-semibold transition-all"
        >
          GUARDAR
        </button>
        <button
          disabled={isFetching}
          onClick={handleCancel}
          className="hover:bg-[#126492] border-[#167db7] border border-solid rounded hover:text-white text-[#167db7] shadow-lg px-4 py-2 font-semibold mx-2 transition-all"
        >
          CANCELAR
        </button>
        <div className="w-full flex justify-end">
          <button
            onClick={handleGenerateIA}
            className="bg-[#2D3133] hover:bg-[#101111] sm:flex border-[#2D3133] border border-solid rounded text-white shadow-lg px-4 py-2 font-semibold transition-all "
          >
            <span className="hidden sm:block">GENERAR CON &nbsp;</span>
            <span>IA</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateIAForm;
