const dateParser = (date: string) => {
  const strdate = JSON.stringify(date);
  const parseDate = `${strdate.substring(1, 5)}년 ${strdate.substring(6, 8)}월 ${strdate.substring(9, 11)}일`;

  return parseDate;
};

export default dateParser;
