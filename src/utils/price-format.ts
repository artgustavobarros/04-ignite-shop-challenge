export function priceFormater(n: number) {
  const parsedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(n / 100)

  return parsedValue
}
