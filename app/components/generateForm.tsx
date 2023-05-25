"use client";

const GenerateIAForm = () => {
  const handleSubmit = () => {
    console.log("algoo");
  };
  return (
    <form action="" onSubmit={handleSubmit} className="w-[446px] mx-auto">
      <h1 className="text-center  text-3xl font-bold text-[#2d3133] mb-9">
        Editar CV en texto
      </h1>
      <label htmlFor="textCvData" className="mb-2">
        CV en texto
      </label>
      <textarea
        className="resize-y w-full appearance-none min-h-[150px] mx-auto overflow-hidden border rounded border-[#c7c7c7] px-2 py-1 focus:outline-none focus:border-[#167db7] focus:border focus:border-solid"
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
  );
};

export default GenerateIAForm;
