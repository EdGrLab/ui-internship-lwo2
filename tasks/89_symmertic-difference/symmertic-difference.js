export function sym(...args) {
  return args.reduce((arr, cur) => {
    /* eslint-disable-next-line */
    const set = [...new Set(cur)];
    for (let i = 0; i < set.length; i++) {
      const unique = arr.indexOf(set[i]);
      if (unique === -1) arr.push(set[i]);
      else arr.splice(unique, 1);
    }
    return arr;
  }, []).sort((a, b) => a - b);
}
