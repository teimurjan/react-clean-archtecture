export const formatDate = (dateStr: string) => {
  const today = new Date(dateStr)
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  const yyyy = today.getFullYear()
  return dd + '.' + mm + '.' + yyyy
}
