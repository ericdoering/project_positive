import { callsToAction } from "../api/calls_to_action";
import { questions } from "../api/questions";
import { getApi } from "../api/quotes";

function getRandomSentence(sentences: string[][]): string {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  return sentences[randomIndex][0];
}

export async function randomMessageGenerator(
  useCallsToAction: boolean,
  useQuestions: boolean,
  useQuotes: boolean
): Promise<string> {
  const randomCallToAction = useCallsToAction ? getRandomSentence(callsToAction) : '';
  const randomQuestion = useQuestions ? getRandomSentence(questions) : '';
  const randomQuote = useQuotes ? await getRandomQuote() : '';

  const selector = Math.floor(Math.random() * 3);

  if (selector === 0) {
    return randomCallToAction;
  } else if (selector === 1) {
    return randomQuote || randomCallToAction;
  } else {
    return randomQuestion || randomCallToAction;
  }
}

async function getRandomQuote(): Promise<string> {
  const quotes = await getApi("https://type.fit/api/quotes");
  return getRandomSentence(quotes);
}


