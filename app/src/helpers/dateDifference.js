export const calculateDaysDifference = (date) => {
  const oneDay = 24 * 60 * 60 * 1000;
  const today = new Date();
  const updatedDate = new Date(date);

  return Math.round(Math.abs((today - updatedDate) / oneDay));
}