import GenerateIAForm from "./components/form";

/* const getUserCVText = async () => {
  const res = await fetch('/')
} */

const TextCV = async () => {
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
