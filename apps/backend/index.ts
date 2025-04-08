import fastify from "fastify";
import { generateRiskStep } from "./steps/generate-risk-step";
import { splitInputStep } from "./steps/split-input-step";
import { generateReportStep } from "./steps/generate-report-step";
import {createTables} from "../database/init";
import {getWorkflowById} from "./routes/get-workflow-by-id";

const server = fastify();

server.get("/ping", async (request, reply) => {
  const fileContent = `
  What a Merry-Go-Round is the eighteenth collection by British fashion designer Alexander McQueen, made for the Autumn/Winter 2001 season of his fashion house Alexander McQueen. The collection drew on imagery of clowns and carnivals, inspired by McQueen's feelings about childhood and his experiences in the fashion industry. The designs were influenced by military chic, cinema such as Nosferatu (1922) and Cabaret (1972), 1920s flapper fashion, and the French Revolution. The palette comprised dark colours complemented with neutrals and muted greens. The show marked the first appearance of the skull motif that became a signature of the brand.
The collection's runway show was staged on 21 February 2001 at the Gatliff Road Warehouse in London, as part of London Fashion Week. It was McQueen's final show in London; all his future collections were presented in Paris. Sixty-two looks were presented in the main runway show, with at least six more in the finale.[a] The show was staged in a dark room with a carousel at the centre. During the finale, the lights came up to reveal piles of discarded childhood bric-à-brac at the rear of the stage, while models dressed as evil clowns cavorted around the stage, posing in their eveningwear.
Critical response to the collection was generally positive, and it has attracted some academic analysis for the theme and messaging. Like McQueen's previous show Voss (Spring/Summer 2001), Merry-Go-Round served as a critique of the fashion industry, which he sometimes described as toxic and suffocating. It contained elements that several authors have taken as references to French luxury goods conglomerate LVMH and its management, with whom McQueen had a turbulent relationship. Ensembles from Merry-Go-Round have appeared in exhibitions such as the McQueen retrospective Alexander McQueen: Savage Beauty.
`;
  const arrayOfParagraphs = await splitInputStep(fileContent);
  console.log(arrayOfParagraphs);
  const generatedData = await generateRiskStep(arrayOfParagraphs);
  console.log(generatedData);
  const generatedReport = await generateReportStep(generatedData);

  return generatedReport;
});

async function startServer() {
  try {
    await createTables();
    server.register(getWorkflowById);

    await server.listen({ port: 8080 });
    console.log(`Server listening at http://localhost:8080`);
  } catch (err) {
    console.error("Error starting the server:", err);
    process.exit(1);
  }
}

startServer();