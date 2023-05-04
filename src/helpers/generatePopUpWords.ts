/**
 * Function that prepared an inputted set of text for the
 * pop up animation
 *
 * @param text The text to be displayed in the pop up animation
 * @returns The correctly formatted words
 */
const generatePopUpWords = (text: string) => {
  const splitWords = text.split(" ");
  const words: any[] = [];

  for (const [, word] of splitWords.entries()) {
    words.push(word.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word: string[]) => {
    return word.push("\u00A0");
  });

  return words;
};

export default generatePopUpWords;
