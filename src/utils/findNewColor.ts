const varianceColors = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

const findNewColor = (color: string) => {
  return color
    .split("")
    .map((c, index) => {
      if (index % 2 !== 0) {
        const index = varianceColors.findIndex((v) => c.toLowerCase() === v);
        return index - 1 >= 0 ? varianceColors[index - 1] : c;
      } else {
        return c;
      }
    })
    .join("");
};

export default findNewColor;
