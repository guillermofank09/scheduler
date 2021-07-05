export const getDoseOrdinal = (doseNumber: number) => {
  const ord = ["st", "nd", "rd"];
  const exceptions = [11, 12, 13];
  let nth =
    ord[(doseNumber % 10) - 1] === undefined ||
    exceptions.includes(doseNumber % 100)
      ? "th"
      : ord[(doseNumber % 10) - 1];
  return `${doseNumber}${nth} dose`;
};
