import GenerateIAForm from "./components/form";

const getAccessToken = async (code: string) => {
  const data = await fetch(`/api/authorize`, {
    headers: {
      "Content-Type": "application/json",
      "InfoJobs-Code": code,
    },
  });
  const { access_token, expires_in }: any = data.json();
  const expirationDate = new Date(Date.now() + expires_in * 1000).toUTCString();

  return { accessToken: access_token, expirationDate };
};

/* const getTextCvData = async () => {
  const data = await fetch(`/api/textcv`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { textCv }: any = data.json();

  return textCv;
}; */

const TextCV = async ({ searchParams: { code } }: any) => {
  if (code) {
    const { accessToken, expirationDate }: any = await getAccessToken(code);
    document.cookie = `access_token=${accessToken}; expires=${expirationDate}; path=/`;
    window.history.pushState({}, document.title, window.location.pathname);
  }

  const textCv = ""; /* await getTextCvData(); */

  return (
    <main className="w-full h-full flex justify-center">
      <section className="bg-white w-full lg:w-[960px] mt-2 h-fit sm:p-8">
        <div className="lg:w-[645px] px-4 sm:px-8 py-6 mx-auto">
          <GenerateIAForm data={textCv} />
        </div>
      </section>
    </main>
  );
};

export default TextCV;
