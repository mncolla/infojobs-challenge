"use client";

const necesaryScope =
  "CV,CANDIDATE_READ_CURRICULUM_EDUCATION,CANDIDATE_READ_CURRICULUM_EXPERIENCE,CANDIDATE_READ_CURRICULUM_FUTURE_JOB,CANDIDATE_EDIT_CURRICULUM_CVTEXT,CANDIDATE_READ_CURRICULUM_CVTEXT";
const clientId = "0017c43570e04426b27e6bc8c75a846a";
const redirectUri = "https://infojobs-challenge.vercel.app";

const AuthButton = () => {
  const handleLogin = () => {
    window.location.href = `https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?scope=${necesaryScope}&client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
  };

  return (
    <button
      className="bg-[#ff6340] w-fit px-4 py-3 mt-6 rounded text-white shadow-lg font-semibold"
      onClick={handleLogin}
    >
      Autenticarme con InfoJobs
    </button>
  );
};

export default AuthButton;
