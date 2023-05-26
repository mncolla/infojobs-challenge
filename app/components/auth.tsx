"use client";

import { useEffect } from "react";

const necesaryScope =
  "CV,CANDIDATE_READ_CURRICULUM_EDUCATION,CANDIDATE_READ_CURRICULUM_EXPERIENCE,CANDIDATE_READ_CURRICULUM_FUTURE_JOB";
const clientId = "0017c43570e04426b27e6bc8c75a846a";
const redirectUri = "https://infojobs-challenge.vercel.app";

const AuthButton = () => {
  const handleLogin = () => {
    window.location.href = `https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?scope=${necesaryScope}&client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      fetch(`/api/authorize`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((data) => data.json())
        .then(({ data: { access_token, expires_in } }) => {
          const expirationDate = new Date(
            Date.now() + expires_in * 1000
          ).toUTCString();
          document.cookie = `access_token=${access_token}; expires=${expirationDate}; path=/`;
          document.cookie = `basic_token=${code}; expires=${expirationDate}; path=/`;
          window.history.pushState(
            {},
            document.title,
            window.location.pathname
          );
        });
    }
  }, []);

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
