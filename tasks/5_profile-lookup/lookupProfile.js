export const contacts = [
  {
    'firstName': 'Akira',
    'lastName': 'Laine',
    'number': '0543236543',
    'likes': ['Pizza', 'Coding', 'Brownie Points'],
  }, {
    'firstName': 'Harry',
    'lastName': 'Potter',
    'number': '0994372684',
    'likes': ['Hogwarts', 'Magic', 'Hagrid'],
  }, {
    'firstName': 'Sherlock',
    'lastName': 'Holmes',
    'number': '0487345643',
    'likes': ['Intriguing Cases', 'Violin'],
  }, {
    'firstName': 'Kristian',
    'lastName': 'Vos',
    'number': 'unknown',
    'likes': ['Javascript', 'Gaming', 'Foxes'],
  }];

export function lookupProfile(prop, val) {
  let flag = false;
  for (let i = 0; i < contacts.length; i++) {
    let curr = contacts[i];
    for (let el in curr) {
      if (curr[el] === prop) {
        if (curr[val]) {
          return curr[val];
        } else {
          return 'No such property';
        }
      }
    }
  }
  if (flag !== true) {
    return 'No such contact';
  }
}
