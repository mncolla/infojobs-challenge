import React from "react";
/* import { SettingsIcon } from "../assets/settings"; */

const TextCV = () => {
  return (
    <main className="w-full h-full flex justify-center">
      <section className="bg-white w-[960px] mt-2 h-fit p-8">
        <div className="box w-[645px] px-8 py-6 mx-auto">
          <form action="" className="w-[446px] mx-auto">
            <h1 className="text-center  text-3xl font-bold text-[#2d3133] mb-9">
              Editar CV en texto
            </h1>
            <label htmlFor="textCvData" className="mb-2">
              CV en texto
            </label>
            <textarea
              className="resize-y w-full appearance-none mx-auto overflow-hidden border rounded border-[#c7c7c7] px-2 py-1"
              name="textCvData"
              id="textCvData"
              placeholder="Completa tu perfil con información adicional relevante para las empresas o datos que no hayas podido introducir en otros campos."
            ></textarea>
            <div className="h-[80px] flex items-center text-sm transition-all">
              <button className="bg-[#167db7] border-[#167db7] border border-solid rounded text-white shadow-lg px-4 py-2 font-semibold transition-all">
                GUARDAR
              </button>
              <button className="hover:bg-[#167db7] border-[#167db7] border border-solid rounded hover:text-white text-[#167db7] shadow-lg px-4 py-2 font-semibold ml-2 transition-all">
                CANCELAR
              </button>
              <div className="w-full flex justify-end">
                <button className="bg-[#2D3133] border-[#2D3133] border border-solid rounded text-white shadow-lg px-4 py-2 font-semibold transition-all ">
                  GENERAR CON IA
                </button>
                {/* <button className="bg-[#2D3133] border-[#2D3133] border border-solid rounded text-white shadow-lg px-2 py-2 font-semibold transition-all ">
                  <SettingsIcon color="white" />
                </button >*/}
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default TextCV;
