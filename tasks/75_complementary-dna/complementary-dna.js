export function DNAStrand(str) {
  return str
      .split('')
      .map(function(el) {
        switch (el) {
          case 'A': return 'T';
          case 'T': return 'A';
          case 'G': return 'C';
          case 'C': return 'G';
        }
      })
      .join('');
}
