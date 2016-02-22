const getDateText = (start, end) => {
  if (start === end) { return start; }
  return `${start} – ${end}`;
};

export function getPositionText({ title, start, end }) {
  return `${title} (${getDateText(start, end)})`;
}
