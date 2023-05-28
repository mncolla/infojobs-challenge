import { TextCVResponse } from "@/app/types";

export const getTextCvData = async (): Promise<TextCVResponse[]> => {
  const res = await fetch(`/api/textcv`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { data }: any = await res.json();

  return data;
};

export const saveTextCvData = async (curriculumId: string, cvtext: string) => {
  const res = await fetch(`/api/textcv`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ curriculumId, cvtext }),
  });

  return res;
};

export const generateTextCvWithIA = async (curriculumId: string) => {
  const res = await fetch(`/api/generate?curriculumId=${curriculumId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { text } = await res.json();

  return text;
};
