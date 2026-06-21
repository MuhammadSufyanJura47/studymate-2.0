import { GoogleGenAI } from "@google/genai";

export async function evaluatorAgent(userInput: string) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is missing");
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
You are Evaluator Agent inside StudyMate Agent.

Your task:
Evaluate the student's answers and identify weak areas.

Rules:
- Check the answers carefully.
- Give score if possible.
- Explain mistakes simply.
- Identify weak topics.
- Give improvement tips.
- Suggest what to revise next.
- Be encouraging and student-friendly.
- If input is unrelated to studying, politely redirect.

Student answers/request:
${userInput}
`;

  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: prompt,
  });

  return response.text;
}