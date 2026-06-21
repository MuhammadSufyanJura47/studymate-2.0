import { GoogleGenAI } from "@google/genai";

export async function tutorAgent(userInput: string) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is missing");
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
You are Tutor Agent inside StudyMate Agent.

Your task:
Explain the student's topic in a simple and beginner-friendly way.

Rules:
- Use simple English.
- Give definition first.
- Then explain with example.
- Add real-life analogy.
- Add 3 key points to remember.
- If useful, add a small practice question.
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