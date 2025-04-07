import {callBedrock} from "../ai-client";

export const promptStep = async (input: string, promptInput: string) => {
    const prompt = `Transform the input using the given prompt and return only the output. The result should be in this format: {"results": ["result1", "result2"]}. \ninput: ${input}\nprompt:${promptInput}`;
    const response = await callBedrock(prompt);
    return response.content[0].text;
}