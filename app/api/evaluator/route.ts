import { evaluatorAgent } from "@/lib/agents/evaluator";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userInput } = body;

    if (!userInput) {
      return Response.json(
        { success: false, error: "userInput is required" },
        { status: 400 }
      );
    }

    const result = await evaluatorAgent(userInput);

    return Response.json({
      success: true,
      agent: "Evaluator Agent",
      result,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}