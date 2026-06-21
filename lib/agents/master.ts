import { GoogleGenAI } from "@google/genai";
import { plannerAgent } from "./planner";
import { tutorAgent } from "./tutor";
import { quizAgent } from "./quiz";
import { evaluatorAgent } from "./evaluator";

type AgentChoice = "planner" | "tutor" | "quiz" | "evaluator";

export async function masterAgent(userInput: string) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is missing");
  }

  const ai = new GoogleGenAI({ apiKey });

  const routingPrompt = `
You are Master Agent inside StudyMate Agent.

Choose the best agent for the student request.

Available agents:
planner = for study plans, schedules, roadmaps, exam preparation plans
tutor = for explanations, concepts, examples, definitions
quiz = for MCQs, questions, practice tests
evaluator = for checking answers, scoring, feedback, weak areas

Return only one word:
planner
tutor
quiz
evaluator

Student request:
${userInput}
`;

  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: routingPrompt,
  });

  // response.text can be undefined depending on SDK shape — safely extract text with fallbacks
  const rawText = (response as any)?.text
    ?? (response as any)?.candidates?.[0]?.content?.[0]?.text
    ?? "";
  const choice = rawText.trim().toLowerCase() as AgentChoice;

  if (choice.includes("planner")) {
    const result = await plannerAgent(userInput);
    return { selectedAgent: "Planner Agent", result };
  }

  if (choice.includes("tutor")) {
    const result = await tutorAgent(userInput);
    return { selectedAgent: "Tutor Agent", result };
  }

  if (choice.includes("quiz")) {
    const result = await quizAgent(userInput);
    return { selectedAgent: "Quiz Agent", result };
  }

  if (choice.includes("evaluator")) {
    const result = await evaluatorAgent(userInput);
    return { selectedAgent: "Evaluator Agent", result };
  }

  const result = await tutorAgent(userInput);
  return { selectedAgent: "Tutor Agent", result };
}