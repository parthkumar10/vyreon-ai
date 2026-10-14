import { google } from "@ai-sdk/google";
import { frontendTools } from "@assistant-ui/ai-sdk";
import { convertToModelMessages, streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, system, tools } = await req.json();
  const aiSDKTools = frontendTools(tools);
  const result = streamText({
    abortSignal: req.signal,
    model: google("gemini-3.5-flash-lite"),
    system,
    messages: await convertToModelMessages(messages, { tools: aiSDKTools }),
    tools: aiSDKTools,
  });
  return result.toUIMessageStreamResponse();
}