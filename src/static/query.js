function findCategoryByTitle(data, title) {
  const dat = data.find(category => category.title.toLowerCase() === title.toLowerCase()) || null;
  return dat
}

export { findCategoryByTitle };