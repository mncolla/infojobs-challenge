import { Logo } from "./assets/logo";
import AuthButton from "./components/auth";

export default async function Home() {
  return (
    <main className="flex w-full justify-center mt-14 ">
      {/* <section className="flex flex-col bg-[#FFFFFF] w-[45%]">
        <h2>Accede y mejora tu CV en texto</h2>

        <label>Email</label>
        <input
          type="text"
          disabled
          className="bg-[#FFFFFF] border-solid rounded border h-[40px]"
        />
        <label>Email</label>
        <input
          type="text"
          disabled
          className="bg-[#FFFFFF] border-solid rounded border h-[40px]"
        />
      </section>
      <section className="flex flex-col bg-[#FFFFFF] w-[45%]">
        <h2>Accede y mejora tu CV en texto</h2>

        <label>Email</label>
        <input
          type="text"
          disabled
          className="bg-[#FFFFFF] border-solid rounded border h-[40px]"
        />
        <label>Email</label>
        <input
          type="text"
          disabled
          className="bg-[#FFFFFF] border-solid rounded border h-[40px]"
        />
      </section> */}
      <AuthButton />
    </main>
  );
}
