export const getLeftPercentValue = (index: number, value: number) => {
  if (index * 10 < value || value === 100 || index * 10 === value) return 100
  if (index * 10 > value + 10) return 0
  const p = value % 10
  return (p / 10) * 100
}
