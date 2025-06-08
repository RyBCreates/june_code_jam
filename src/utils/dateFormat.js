export function formatTripDates(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const formatMonth = new Intl.DateTimeFormat("en-US", { month: "long" });

  const getDaySuffix = (day) => {
    if (day > 3 && day < 21) return `${day}th`;
    if (day % 10 === 1) {
      return `${day}st`;
    } else if (day % 10 === 2) {
      return `${day}nd`;
    } else if (day % 10 === 3) {
      return `${day}rd`;
    } else {
      return `${day}th`;
    }
  };

  const month = formatMonth.format(startDate);
  const startDay = getDaySuffix(startDate.getDate());
  const endDay = getDaySuffix(endDate.getDate());

  return `${month} ${startDay} - ${month} ${endDay}`;
}
