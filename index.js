'use strict';

const stations = [
  'Acton Town',
  'Acton Central',
  'Acton Central',
  'Aldgate',
  'Aldgate East',
  'Alperton',
  'Amersham',
  'Angel',
  'Archway',
  'Arnos Grove',
  'Arsenal',
  'Baker Street',
  'Baker Street',
  'Balham',
  'Bank',
  'Barbican',
  'Barking',
  'Barkingside',
  'Barons Court',
  'Bayswater',
  'Becontree',
  'Belsize Park',
  'Bermondsey',
  'Bethnal Green',
  'Blackfriars',
  'Blackhorse Road',
  'Bond Street',
  'Borough',
  'Boston Manor',
  'Bounds Green',
  'Bow Road',
  'Brent Cross',
  'Brixton',
  'Bromley-by-Bow',
  'Brondesbury',
  'Brondesbury Park',
  'Buckhurst Hill',
  'Burnt Oak',
  'Caledonian Road',
  'Caledonian Road & Barnesbury',
  'Camden Road',
  'Camden Town',
  'Canada Water',
  'Canary Wharf',
  'Cannon Street',
  'Canonbury',
  'Canons Park',
  'Chalfont & Latimer',
  'Chalk Farm',
  'Chancery Lane',
  'Charing Cross',
  'Chesham',
  'Chigwell',
  'Chiswick Park',
  'Chorleywood',
  'City Thameslink',
  'Clapham Common',
  'Clapham North',
  'Clapham South',
  'Cockfosters',
  'Colindale',
  'Colliers Wood',
  'Covent Garden',
  'Croxley',
  'Dagenham East',
  'Dagenham Heathway',
  'Dalston Kingsland',
  'Debden',
  'Dollis Hill',
  'Ealing Broadway',
  'Ealing Common',
  `Earl's Court`,
  'East Acton',
  'East Finchley',
  'East Ham',
  'East Putney',
  'Eastcote',
  'Edgware',
  'Edgware Road (Bakerloo Line)',
  'Edgware Road (Circle Line)',
  'Elephant & Castle',
  'Elm Park',
  'Embankment',
  'Epping',
  'Euston',
  'Euston Square',
  'Fairlop',
  'Farringdon',
  'Farringdon',
  'Finchley Central',
  'Finchley Road',
  'Finchley Road and Frognal',
  'Finsbury Park',
  'Fulham Broadway',
  'Gants Hill',
  'Gloucester Road',
  'Golders Green',
  'Goldhawk Road',
  'Goodge Street',
  'Gospel Oak',
  'Grange Hill',
  'Great Portland Street',
  'Greenford',
  'Gunnersbury',
  'Green Park',
  'Hackney Central',
  'Hackney Wick',
  'Hainault',
  'Hammersmith (Dist&Picc Line)',
  'Hammersmith (H&C Line)',
  'Hampstead',
  'Hampstead Heath',
  'Hanger Lane',
  'Harlesden',
  'Harrow & Wealdstone',
  'Harrow-on-the-Hill',
  'Hatton Cross',
  'Heathrow Terminals 1-2-3',
  'Heathrow Terminal 4',
  'Hendon Central',
  'High Barnet',
  'High Street Kensington',
  'Highbury & Islington',
  'Highgate',
  'Hillingdon',
  'Holborn',
  'Holland Park',
  'Holloway Road',
  'Homerton',
  'Hornchurch',
  'Hounslow Central',
  'Hounslow East',
  'Hounslow West',
  'Hyde Park Corner',
  'Ickenham',
  'Kennington',
  'Kensal Green',
  'Kensal Rise',
  'Kensington (Olympia)',
  'Kentish Town',
  'Kentish Town West',
  'Kenton',
  'Kew Gardens',
  'Kilburn',
  'Kilburn Park',
  `King's Cross St.Pancras`,
  `King's Cross Thameslink`,
  'Kingsbury',
  'Knightsbridge',
  'Ladbroke Grove',
  'Lambeth North',
  'Lancaster Gate',
  'Latimer Road',
  'Leicester Square',
  'Leyton',
  'Leytonstone',
  'Liverpool Street',
  'London Bridge',
  'Loughton',
  'Maida Vale',
  'Manor House',
  'Mansion House',
  'Marble Arch',
  'Marylebone',
  'Mile End',
  'Mill Hill East',
  'Monument',
  'Moor Park',
  'Moorgate',
  'Morden',
  'Mornington Crescent',
  'Neasden',
  'New Cross',
  'New Cross Gate',
  'Newbury Park',
  'North Acton',
  'North Ealing',
  'North Greenwich',
  'North Harrow',
  'North Wembley',
  'Northfields',
  'Northolt',
  'Northolt',
  'Northwick Park',
  'Northwood',
  'Northwood Hills',
  'Notting Hill Gate',
  'Oakwood',
  'Old Street',
  'Osterley',
  'Oval',
  'Oxford Circus',
  'Paddington',
  'Paddington (H&C Line)',
  'Park Royal',
  'Parsons Green',
  'Perivale',
  'Piccadilly Circus',
  'Pimlico',
  'Pinner',
  'Plaistow',
  'Preston Road',
  'Putney Bridge',
  `Queen's Park`,
  'Queensbury',
  'Queensway',
  'Ravenscourt Park',
  'Rayners Lane',
  'Redbridge',
  `Regent's Park`,
  'Richmond',
  'Richmond',
  'Rickmansworth',
  'Roding Valley',
  'Rotherhithe',
  'Royal Oak',
  'Ruislip',
  'Ruislip Gardens',
  'Ruislip Manor',
  'Russell Square',
  `St.James's Park`,
  'Seven Sisters',
  'Shadwell',
  `Shepherd's Bush`,
  `Shepherd's Bush Market`,
  'Sloane Square',
  'Snaresbrook',
  'South Acton',
  'South Ealing',
  'South Harrow',
  'South Kensington',
  'South Kenton',
  'South Ruislip',
  'South Wimbledon',
  'South Woodford',
  'Southfields',
  'Southgate',
  'Southwark',
  `St.John's Wood`,
  `St.Paul's`,
  'Stamford Brook',
  'Stanmore',
  'Stepney Green',
  'Stockwell',
  'Stonebridge Park',
  'Stratford',
  'Stratford',
  'Sudbury Hill',
  'Sudbury Town',
  'Surrey Quays',
  'Swiss Cottage',
  'Temple',
  'Theydon Bois',
  'Tooting Bec',
  'Tooting Broadway',
  'Tottenham Court Road',
  'Tottenham Court Road',
  'Tottenham Hale',
  'Totteridge & Whetstone',
  'Tower Hill',
  'Tufnell Park',
  'Turnham Green',
  'Turnpike Lane',
  'Upminster',
  'Upminster Bridge',
  'Upney',
  'Upton Park',
  'Uxbridge',
  'Vauxhall',
  'Victoria',
  'Walthamstow Central',
  'Wanstead',
  'Wapping',
  'Warren Street',
  'Warwick Avenue',
  'Waterloo',
  'Watford',
  'Wembley Central',
  'Wembley Park',
  'West Acton',
  'West Brompton',
  'West Finchley',
  'West Ham',
  'West Hampstead',
  'West Hampstead',
  'West Hampstead',
  'West Hampstead',
  'West Harrow',
  'West Kensington',
  'West Ruislip',
  'Westbourne Park',
  'Westminster',
  'White City',
  'Whitechapel',
  'Willesden Green',
  'Willesden Junction',
  'Willesden Junction',
  'Wimbledon',
  'Wimbledon Park',
  'Wood Green',
  'Woodford',
  'Woodside Park'
]

function formatArray(array) {
  return array.reduce((acc, val) => {
    acc.push([normalize(val), val]);
    return acc;
  }, [])
}

function normalize(string) {
  return string
    .replace(/[^a-z]/gi, '')
    .toUpperCase();
}

function removeDuplicates(array) {
  return array.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}

function reduceFirstValueToUniqueArray(twoDimensionalArray) {
  const splitItem = twoDimensionalArray[0].split('').sort();
  return [removeDuplicates(splitItem) ,twoDimensionalArray[1]];
}

function sortByFirstElement(a, b) {
  return a[0].length - b[0].length;
}

function arrayIsSubset(arr1, arr2) {
  return arr1.every(char => arr2.includes(char));
}

function getExistingStations(array) {
  if (array.length > 2) {
    array.splice(0, 1);
    return array;
  }
  return [array];
}

function getAllPairs(arr1, arr2) {
  const newArray = [];

  for (let i = 0; i < arr1.length - 1; i++) {
    for (let j = i + 1; j < arr2.length - 1; j++) {
      const currentArray = arr1[i];
      const currentStation = arr2[j];
      if (!currentArray.includes(currentStation)) {
        const isSubset = arrayIsSubset(currentStation[0], currentArray[0]);
        if (!isSubset) {
          const concatenated = currentArray[0].concat(currentStation[0]);
          const currentUniqueValues = removeDuplicates(concatenated).sort();
          const existingStations = getExistingStations(currentArray);
          newArray.push([currentUniqueValues, ...existingStations, currentStation]);
        } else {
          newArray.push(currentArray);
        }
      }
    }
  }

  return newArray
    .sort(sortByFirstElement)
    .reverse();
}

function getMinElements(array, originalList) {
  const newArray = getAllPairs(array, originalList);

  if (newArray[0][0].length < 26) {
    return getMinElements(newArray, originalList);
  }

  return newArray
    .filter(element => element[0].length === 26)
    .map(element => element.splice(1, newArray.length));
}

function printNames(array) {
  return array
    .map(val => val[1])
    .join(",\n");
}

function printStations(array) {
  return array
    .map(val => `\n\nStations: \n${printNames(val)}`)
    .join("\n");
}

function printResult(array) {
  return `The minimum number of stations containing 26 distinct ` +
    `letters is ${array[0].length}. ` +
    `\n\nPossible results: \n${printStations(array)}`
}

function main(stations) {
  const uniqueList = formatArray(stations)
    .map(reduceFirstValueToUniqueArray)
    .sort(sortByFirstElement)
    .reverse();

  const minStations = getMinElements(uniqueList, uniqueList);

  return printResult(minStations);
}

console.log(main(stations));
