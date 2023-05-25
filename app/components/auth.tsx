"use client";

import { useEffect } from "react";

const necesaryScope = process.env.NECESARY_SCOPE;
const clientId = process.env.CLIENT_ID;
const redirectUri = process.env.REDIRECT_URI;

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

  return <button onClick={handleLogin}>Autenticarme con InfoJobs</button>;
};

export default AuthButton;
