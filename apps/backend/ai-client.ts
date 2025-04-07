import {
  BedrockRuntimeClient,
  InvokeModelCommand,
  InvokeModelCommandInput,
} from "@aws-sdk/client-bedrock-runtime";
import { fromIni } from "@aws-sdk/credential-provider-ini";

const client = new BedrockRuntimeClient({
  region: "us-west-2",
  credentials: fromIni({ profile: "dil-team-hackfest" }),
});

export const callBedrock = async (prompt: string): Promise<ModelResponse> => {
  const params: InvokeModelCommandInput = {
    modelId:
      "arn:aws:bedrock:us-west-2:609400232087:inference-profile/us.anthropic.claude-3-sonnet-20240229-v1:0",
    contentType: "application/json",
    accept: "application/json",
    body: JSON.stringify({
      anthropic_version: "bedrock-2023-05-31",
      max_tokens: 2000,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: prompt,
            },
          ],
        },
      ],
    }),
  };

  const command = new InvokeModelCommand(params);

  const result = await client.send(command);

  const decoder = new TextDecoder("utf-8");
  const responseBody = decoder.decode(result.body);
  return JSON.parse(responseBody);
};
