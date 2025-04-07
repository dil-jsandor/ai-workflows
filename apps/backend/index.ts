import fastify from "fastify";
import {generateRiskStep} from "./steps/generate-risk-step";

const server = fastify();

server.get("/ping", async (request, reply) => {
  const fileContent = 'The World Economic Forum’s September 2024 Chief Economists Outlook found that most of the chief economists surveyed (54%) expect the condition of the global economy to remain unchanged over the next year, but four times as many expect conditions to weaken (37%) rather than to strengthen (9%). This outlook aligns closely with the latest IMF forecast, which has economic growth stable at 3.2% annually in 2024 and 2025. Even without accounting for the potential impacts of downside risks, this growth rate is tepid compared to the long-term average growth rate of 3.8% from 2000-2019.\n' +
      'The IMF notes rising risks to the economy posed by conflict escalation, tariffs and trade policy uncertainty, lower migration, and the tightening of global financial conditions. The latter could pose a challenge to financial stability given that valuations are elevated in several asset classes and the amount of leverage used by financial institutions is significant. The rapid growth in the private credit market is one area to monitor. More generally, both government and private-sector debt levels continue to rise globally. There have been early signs that fiscal concerns could re-emerge over the next two years as markets will face a high volume of sovereign debt supply.\n' +
      'Globally, Economic downturn tops the EOS global risk ranking in the next two years. This risk ranks first in five regions: Latin America and the Caribbean, Northern America, Oceania, South-Eastern Asia and Southern Asia. It also ranks first in three out of the four country income groups, with the only exception being lower-middle income countries. Respondents in 25 countries see Economic downturn as the leading risk, including developed economies such as the United States and United Kingdom, and emerging markets such as Brazil, Kenya and Malaysia (Figure 1.19).';
  const risk = await generateRiskStep(fileContent);
  console.log(risk);
  return risk;
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
