import { Logo } from "./assets/logo";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full h-full mt-14">
      <Logo />
      <span>Generador de resume CV en texto</span>
      <button>Autenticarte con InfoJobs</button>
    </main>
  );
}
