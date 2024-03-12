export function formatNumber(value: number) {
  return new Intl.NumberFormat('pt-br').format(value)
}
