const formatTitleDate = (date: Date) => {
  let day = String(date.getDate());
  let month = String(date.getMonth());
  let year = date.getFullYear();

  day = day.length === 1 ? "0" + day : day;
  month = month.length === 1 ? "0" + month : month;

  return `${day}/${month}/${year}`;
};

export default formatTitleDate;
