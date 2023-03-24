export default function setTime(callback) {
  const now = new Date();
  const rounded = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours(),
    Math.floor(now.getMinutes() / 10) * 10,
    0,
    0
  );
  const diff = (now - rounded) / 1000;
  const diffMapped = Math.floor((diff / 600) * 360);
  callback(diffMapped);
}
