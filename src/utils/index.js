export const filterworks = (works, filter) => {

  if (filter === 'COMPL') {
    return works.filter(t => t.compl === true)
  }
  return works
}