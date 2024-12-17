export function formatTimestamp(timestamp: number) {
  const dateTime = new Date(timestamp);

  const padZero = (num: number) => String(num).padStart(2, '0');

  const day = padZero(dateTime.getDate());
  const month = padZero(dateTime.getMonth() + 1); // Months are zero-indexed
  const year = dateTime.getFullYear();

  let hours = dateTime.getHours();
  const minutes = padZero(dateTime.getMinutes());
  const seconds = padZero(dateTime.getSeconds());

  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // Convert 0 to 12 for AM

  const date = `${day}/${month}/${year}`;
  const time = `${padZero(hours)}:${minutes}:${seconds} ${ampm}`;

  return { date, time };
}