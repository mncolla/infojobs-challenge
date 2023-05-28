import GenerateIAForm from "./components/form";

const TextCV = async ({ searchParams: { code } }: any) => {
  return (
    <main className="w-full flex justify-center">
      <section className="bg-white w-full lg:w-[960px] mt-2 h-fit sm:p-8">
        <div className="lg:w-[645px] px-4 sm:px-8 py-6 mx-auto">
          <GenerateIAForm />
        </div>
      </section>
    </main>
  );
};

export default TextCV;
