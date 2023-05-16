const dateParser = (date: number) => {
  const strdate = JSON.stringify(date);
  const parseDate = `${strdate.substring(0, 4)}년 ${strdate.substring(4, 6)}월 ${strdate.substring(6, 8)}일`;

  return parseDate;
};

export default dateParser;
