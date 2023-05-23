"use client";

const AuthButton = () => {
  const URL =
    "https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?scope=MY_APPLICATIONS,CANDIDATE_PROFILE_WITH_EMAIL,CANDIDATE_READ_CURRICULUM_SKILLS,CV&client_id=0017c43570e04426b27e6bc8c75a846a&redirect_uri=https://infojobs-challenge.vercel.app&response_type=code";

  const handleClick = () => {
    window.location.href = URL;
  };

  return <button onClick={handleClick}>AuthButton</button>;
};

export default AuthButton;
