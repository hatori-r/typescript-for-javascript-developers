export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi :number = weight / (height * height);

  if (printable) {
    console.log(bmi);
  } else if(printable === false) {
    console.log('not called.')
  }
  return bmi;
};

bmi(1.78, 86, true); // console.logでbmiが出力される
bmi(1.78, 86, false); // console.logで「not called.」が出力される
bmi(1.78, 86); // console.logでなにも出力されない