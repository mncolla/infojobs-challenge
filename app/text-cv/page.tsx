import GenerateIAForm from "../components/generateForm";

const TextCV = () => {
  return (
    <main className="w-full h-full flex justify-center">
      <section className="bg-white w-[960px] mt-2 h-fit p-8">
        <div className="box w-[645px] px-8 py-6 mx-auto">
          <GenerateIAForm />
        </div>
      </section>
    </main>
  );
};

export default TextCV;
