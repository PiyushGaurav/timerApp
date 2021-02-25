export const formatMilliSeconds = (ms) => {
  const s = Math.floor((ms / 1000) % 60);
  const m = Math.floor((ms / 1000 / 60) % 60);
  const h = Math.floor(ms / 1000 / 60 / 60);
  return `${formatZeros(h.toString())} : ${formatZeros(
    m.toString(),
  )} : ${formatZeros(s.toString())}`;
};

const formatZeros = (num) => {
  let newNum = num;
  if (newNum.length < 2) {
    newNum = `0${newNum}`;
  }
  return newNum;
};
