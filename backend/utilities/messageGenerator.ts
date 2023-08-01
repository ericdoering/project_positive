
import { callsToAction } from "../api/calls_to_action";
import { questions } from "../api/questions";

function getRandomSentence(sentences: string[][]): string {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex][0];
}

export function randomMessageGenerator(callsToAction: string[][], questions: string[][]): string {
    const randomCallToAction = getRandomSentence(callsToAction);
    const randomQuestion = getRandomSentence(questions);

    const selector = Math.floor(Math.random() * 2)

    return selector === 0 ? `${randomCallToAction}` : `${randomQuestion}`
}


export const randomMessage = randomMessageGenerator(callsToAction, questions);






