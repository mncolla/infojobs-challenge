"use client";

import { useEffect } from "react";

const NECESSARY_SCOPE = [
  "CV",
  "CANDIDATE_READ_CURRICULUM_EDUCATION",
  "CANDIDATE_READ_CURRICULUM_EXPERIENCE",
  "CANDIDATE_READ_CURRICULUM_FUTURE_JOB",
];
const CLIENT_ID = "0017c43570e04426b27e6bc8c75a846a";
const REDIRECT_URI = "https://infojobs-challenge.vercel.app";

const AuthButton = () => {
  const handleLogin = () => {
    window.location.href = `https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?scope=${NECESSARY_SCOPE.join(
      ","
    )}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      fetch(`/api/authorize`, {
        headers: {
          "Content-Type": "application/json",
          "InfoJobs-Code": code,
        },
      })
        .then((data) => data.json())
        .then(({ access_token, expires_in }: any) => {
          const expirationDate = new Date(
            Date.now() + expires_in * 1000
          ).toUTCString();
          z;
          document.cookie = `access_token=${access_token}; expires=${expirationDate}; path=/`;
        });
    }
  }, []);

  return <button onClick={handleLogin}>Autenticarme con InfoJobs</button>;
};

export default AuthButton;
