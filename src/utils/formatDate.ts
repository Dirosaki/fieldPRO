export function formatDate(seconds: number) {
  const milliseconds = seconds * 1000

  return new Intl.DateTimeFormat('pt-br', {
    timeZone: 'UTC',
    day: '2-digit',
    month: '2-digit',
  }).format(milliseconds)
}
