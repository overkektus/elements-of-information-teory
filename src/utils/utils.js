
const maxRandValue = 100; 

const setup = p => ((1 - p) * maxRandValue);

const getValue = (boundary) => {
  let randNum = Math.round(Math.random() * 100);
  if(randNum > boundary) return true;
  else return false;
};

const getPersent = (results) => {
  let trueCount = 0;
  results.forEach(element => {
    if(element) trueCount++
  });
  let persent = (trueCount * 100)/results.length;
  return persent;
};

const log = (x, base) => (Math.log(x) / Math.log(base));

const calcEntropy = (percentTrue, percentFalse) => (-1 * (percentTrue * log(percentTrue, 2) + percentFalse * log(percentFalse, 2)));

module.exports = {
  setup,
  getValue,
  getPersent,
  calcEntropy
}