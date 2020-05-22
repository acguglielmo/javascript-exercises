function getFormattedDate(dateAsString) {
  const dateTimeFormat = new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const [
    { value: day },
    ,
    { value: month },
    ,
    { value: year },
  ] = dateTimeFormat.formatToParts(new Date(dateAsString));

  return `${day}/${month}/${year}`;
}

module.exports = getFormattedDate;
