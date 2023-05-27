import GenerateIAForm from "./components/form";
import { redirect } from "next/navigation";

const TextCV = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");

  if (code) {
    const data = await fetch(`/api/authorize`, {
      headers: {
        "Content-Type": "application/json",
        "InfoJobs-Code": code,
      },
    });
    const { access_token, expires_in }: any = data.json();

    const expirationDate = new Date(
      Date.now() + expires_in * 1000
    ).toUTCString();
    document.cookie = `access_token=${access_token}; expires=${expirationDate}; path=/`;
    window.history.pushState({}, document.title, window.location.pathname);
  }

  return (
    <main className="w-full h-full flex justify-center">
      <section className="bg-white w-full lg:w-[960px] mt-2 h-fit sm:p-8">
        <div className="lg:w-[645px] px-4 sm:px-8 py-6 mx-auto">
          <GenerateIAForm />
        </div>
      </section>
    </main>
  );
};

export default TextCV;
