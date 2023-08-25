import { callsToAction } from "../api/calls_to_action";
import { questions } from "../api/questions";
import { getApi } from "../api/quotes";

function getRandomSentence(sentences: string[][]): string {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  return sentences[randomIndex][0];
}

export async function randomMessageGenerator(
  callsToAction: string[][],
  questions: string[][],
  quoteList: string[][]
): Promise<string>;
export async function randomMessageGenerator(
  callsToAction: string[][],
  quoteList: string[][]
): Promise<string>;
export async function randomMessageGenerator(
  callsToAction: string[][],
  questions: string[][]
): Promise<string>;
export async function randomMessageGenerator(
  callsToAction: string[][]
): Promise<string>;
export async function randomMessageGenerator(
  callsToAction: string[][],
  questions?: string[][],
  quoteList?: string[][]
): Promise<string> {
  const randomCallToAction = getRandomSentence(callsToAction);
  const randomQuestion = questions ? getRandomSentence(questions) : '';
  const randomQuote = quoteList ? getRandomSentence(quoteList) : '';

  const selector = Math.floor(Math.random() * 3);

  if (selector === 0) {
    return randomCallToAction;
  } else if (selector === 1) {
    return randomQuote || randomCallToAction;
  } else {
    return randomQuestion || randomCallToAction;
  }
}

export async function generateRandomMessage() {
  const quotes = await getApi("https://type.fit/api/quotes");
  const randomMsg = await randomMessageGenerator(callsToAction, questions, quotes);
  return console.log(randomMsg);
}





