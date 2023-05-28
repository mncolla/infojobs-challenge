/* eslint-disable react/no-unescaped-entities */
import { FaceIcon } from "../assets/face";
import { PaperIcon } from "../assets/paper";
import { UserIcon } from "../assets/user";
import AuthButton from "./components/auth-button";

export default async function Login({ searchParams: { code } }: any) {
  return (
    <>
      <main className="flex w-full container mx-auto justify-center md:flex-row mt-14 flex-col">
        <section className="flex flex-col bg-[#FFFFFF] py-[30px] w-[95%] max-w-[470px] mx-auto md:w-[50%] pl-6 pr-3 md:mr-5 md:mx-0">
          <h2 className="mb-[35px] text-3xl font-bold">
            Accede como candidato
          </h2>

          <label className="mb-[5px]">Email</label>
          <input
            type="text"
            disabled
            placeholder="Ingresa tu email"
            className="bg-[#FFFFFF] pl-2 sm:w-[330px] border-solid rounded border h-[40px] mb-[16px]"
          />
          <label className="mb-[5px]">Contraseña</label>
          <input
            type="text"
            disabled
            placeholder="Ingresa tu contraseña"
            className="bg-[#FFFFFF] pl-2 sm:w-[330px] border-solid rounded border h-[40px]"
          />

          <AuthButton code={code} />
        </section>
        <section className="flex flex-col bg-[#FFFFFF] py-[30px] w-[95%] max-w-[470px] mx-auto mt-3 md:mt-0 md:w-[50%] px-6  md:mx-0">
          <h2 className="mb-[35px] text-2xl font-bold">Challenge InfoJobs</h2>

          <div className="flex">
            <UserIcon width="35px" height="35px" color="#999" />
            <div className="ml-2 flex flex-col">
              <span className="font-bold text-lg">Inicia sesión</span>
              <span className="text-[#2d3133]">
                Ingresa a través de tu cuenta de InfoJobs
              </span>
            </div>
          </div>

          <div className="flex mt-2">
            <PaperIcon width="35px" height="35px" color="#999" />
            <div className="ml-2 flex flex-col">
              <span className="font-bold text-lg">
                Elije tu CV y presiona 'Generar con IA'
              </span>
              <span className="text-[#2d3133]">
                Olvídate de escribir tus CVs en texto a mano, <br />
                deja que la inteligencia artificial lo haga por ti
              </span>
            </div>
          </div>

          <div className="flex mt-2">
            <FaceIcon width="35px" height="35px" color="#999" />
            <div className="ml-2 flex flex-col">
              <span className="font-bold text-lg">Observa los resultados</span>
              <span className="text-[#2d3133]">
                La IA revisará el CV seleccionado y generará
                <br /> un CV en texto que se ajuste a ti
              </span>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full flex-col items-center mt-7">
        <hr className="w-full" />
        <span>
          Hecho con 💙 por{" "}
          <a href="https://www.linkedin.com/in/maximilianocolla/">Maxi</a>
        </span>
        <span>Gracias Midu e InfoJobs</span>
      </footer>
    </>
  );
}
