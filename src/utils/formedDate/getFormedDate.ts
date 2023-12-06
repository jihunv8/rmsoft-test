const calcDate = (date: Date): string => {
  const today = new Date();
  const todayMonth = today.getMonth();
  const todayDay = today.getDate();

  const month = date.getMonth();
  const day = date.getDate();

  if (todayMonth === month && todayDay === day) return 'Today';

  const MONTH_TABLE = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] as const;

  const m = MONTH_TABLE[month];
  return `${m} ${day}`;
};

const calcHours = (hours: number): ['AM' | 'PM', number] => {
  if (hours < 12) {
    const h = hours === 0 ? 12 : hours;
    return ['AM', h];
  }

  const h = hours === 12 ? 12 : hours - 12;
  return ['PM', h];
};

export const getFormedDate = (milliseconds: number) => {
  const date = new Date(milliseconds);

  const [midday, hours] = calcHours(date.getHours());
  const minutes = date.getMinutes();

  return `${calcDate(date)}, ${hours}:${minutes} ${midday}`;
};
