import { GoogleGenAI } from "@google/genai";

export async function quizAgent(userInput: string) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is missing");
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
You are Quiz Agent inside StudyMate Agent.

Your task:
Create a quiz for the student's topic.

Rules:
- Create 5 MCQs.
- Each MCQ must have 4 options: A, B, C, D.
- Mark the correct answer.
- Add a short explanation after each answer.
- Keep language simple.
- If input is unrelated to studying, politely redirect.

Student request:
${userInput}
`;

  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: prompt,
  });

  return response.text;
}