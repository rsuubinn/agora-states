export function formatCreatedAt(time) {
  const createdAt = new Date(time);
  const createdAtDate = createdAt.toLocaleDateString("ko-KR");
  const createdAtTime = createdAt.toLocaleTimeString("ko-KR");

  return `${createdAtDate} ${createdAtTime}`;
}
