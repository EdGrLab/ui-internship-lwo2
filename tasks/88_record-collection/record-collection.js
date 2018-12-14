const collection = {
  '2548': {
    'album': 'Slippery When Wet',
    'artist': 'Bon Jovi',
    'tracks': [
      'Let It Rock',
      'You Give Love a Bad Name',
    ],
  },
  '2468': {
    'album': '1999',
    'artist': 'Prince',
    'tracks': [
      '1999',
      'Little Red Corvette',
    ],
  },
  '1245': {
    'artist': 'Robert Palmer',
    'tracks': [],
  },
  '5439': {
    'album': 'ABBA Gold',
  },
};

export function updateRecords(id, prop, value) {
  const collectionCopy = JSON.parse(JSON.stringify(collection));

  if (!value) {
    delete collectionCopy[id][prop];
  } else if (prop !== 'tracks') {
    collectionCopy[id][prop] = value;
  } else {
    if (!collectionCopy[id].hasOwnProperty('tracks')) {
      collectionCopy[id].tracks = [];
      collectionCopy[id].tracks.push(value);
    } else {
      collectionCopy[id].tracks.push(value);
    }
  }

  return collectionCopy;
}
