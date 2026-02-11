/* ----------------------------------- 1. ----------------------------------- */
/*
function [FUNCTION_NAME] ([PARAMS_1], [PARAMS_2], ..., [PARAMS_N]) {
  [FUNCTION_CODE]
}

function [FUNCTION_NAME] ([PARAMS_1]: [DATA_TYPE], [PARAMS_2: DATA_TYPE], ..., [PARAMS_N]: [DATA_TYPE]): [DATA_TYPE] {
  [FUNCTION_CODE]
}
*/
function sayHello(name: string): string {
  return `Hello ${name}`;
}

function getDouble(num: number): void {
  console.log(2 * 2);
}

const getDoubleResult = getDouble(100);
console.log(getDoubleResult);

/* ----------------------------------- 2. ----------------------------------- */
console.log(Number("12z"));
console.log(String("12z"));

/* ----------------------------------- 3. ----------------------------------- */
let sentence = "Learn Software Engineering at Purwadhika";
sentence.replace("a", "o");
sentence.split(" ");
// sentence.reverse();

console.log(sentence);

/* ----------------------------------- 4. ----------------------------------- */
function printMessage(
  message: string,
  callback: (message: string) => void,
): void {
  callback(message);
}

printMessage("Hello", "World");
// printMessage("Hello", (message: string) => {
//   console.log(message);
// });
