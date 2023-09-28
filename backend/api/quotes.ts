import axios from 'axios';

const api_url = "https://type.fit/api/quotes";

interface QuoteObject {
  "text": string;
  "author": string;
}

export async function getApi(url: string): Promise<string[][]> {
  try {
    const response = await axios.get(url);
    const apiResponse: QuoteObject[] = response.data; 

    const formattedArray: string[][] = apiResponse.map(item => [`${item["text"]} - ${item["author"].substring(0, item["author"].indexOf(","))}`]);
    return formattedArray;
  } catch (error) {
    console.error("Error fetching API:", error);
    return []; 
  }
};


async function main() {
    const quoteList: string[][] = await getApi(api_url);
  }
  
  main();











