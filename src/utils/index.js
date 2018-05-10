export const filterworks = (works, filter) => {
  console.log('filter-----', filter);

  if (filter === 'COMPL') {
    return works.filter(t => t.compl === true)
  }
  return works
}