export function formatTripDates(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const formatMonth = new Intl.DateTimeFormat("en-US", { month: "long" });

  const getDaySuffix = (day) => {
    if (day > 3 && day < 21) return `${day}th`;
    const endings = ["st", "nd", "rd"];
    const rem = day % 10;
    return `${day}${endings[rem - 1] || "th"}`;
  };

  const startMonth = formatMonth.format(startDate);
  const endMonth = formatMonth.format(endDate);
  const startDay = getDaySuffix(startDate.getDate());
  const endDay = getDaySuffix(endDate.getDate());

  return `${startMonth} ${startDay} - ${
    startMonth === endMonth ? "" : endMonth + " "
  }${endDay}`;
}

export function getTripDays(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const days = [];

  if (isNaN(start) || isNaN(end)) {
    console.error("Invalid start or end date");
    return [];
  }

  if (start > end) {
    console.warn("Start date is after end date");
    return [];
  }

  let current = new Date(start);
  while (current <= end) {
    days.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }

  return days;
}
