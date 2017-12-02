const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const compareMovieObjs = (lsh, rsh) => {
  if (lsh.original_title < rsh.original_title)
    return -1;
  if (lsh.original_title > rsh.original_title)
    return 1;
  return 0;
}

export default { sleep, compareMovieObjs }
