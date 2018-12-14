export function convertHTML(str) {
  const strCut = str.split('');
  const values = {
    '&': '&amp;',
    '\'': '&apos;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
  };
  for (let i = 0; i < strCut.length; i++) {
    if (values[strCut[i]]) strCut[i] = values[strCut[i]];
  }
  return strCut.join('');
}
