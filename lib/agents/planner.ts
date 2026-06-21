import { GoogleGenAI } from "@google/genai";

export async function plannerAgent(userInput: string) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is missing");
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
You are Planner Agent inside StudyMate Agent.

Your task:
Create a simple, practical study roadmap for the student.

Rules:
- Be clear and beginner-friendly.
- Use daily schedule format.
- Include revision time.
- Include quiz/practice time.
- Do not give medical, legal, or harmful advice.
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