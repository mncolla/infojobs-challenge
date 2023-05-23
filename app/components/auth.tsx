"use client";

import { useEffect } from "react";

const NECESSARY_SCOPE = [
  "CV",
  "CANDIDATE_READ_CURRICULUM_EDUCATION",
  "CANDIDATE_READ_CURRICULUM_EXPERIENCE",
  "CANDIDATE_READ_CURRICULUM_FUTURE_JOB",
];
const CLIENT_ID = "0017c43570e04426b27e6bc8c75a846a";
const CLIENT_SECRET = "DNytAl3oFLlKvQR5EjrmtwXnwOb7q1MknBHI5vL7T8Fo2Mljyu";
const REDIRECT_URI = "https://infojobs-challenge.vercel.app";

const AuthButton = () => {
  const handleLogin = () => {
    window.location.href = `https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?scope=${NECESSARY_SCOPE.join(
      ","
    )}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get("access_token");

    if (accessToken) {
      document.cookie = `access_token=${accessToken}; path=/`;
      window.location.href = "/";
    }
  }, []);

  return <button onClick={handleLogin}>Autenticarme con InfoJobs</button>;
};

export default AuthButton;
