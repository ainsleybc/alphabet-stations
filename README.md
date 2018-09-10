# London Underground Stations Brainteaser

An attempt at the below brainteaser:

## Problem

>This is a link to a list of the London Underground station names: https://wiki.openstreetmap.org/wiki/List_of_London_Underground_stations#Tube_Stations_List
>
>All letters of the alphabet appear in this set of station names at least once. Find the MINIMUM subset of stations such that all letters of the alphabet are ​present. We're only interested in the letters a-z, and upper- or lower-case does not matter.
>
>For example:
>Bank has 4 distinct letters in 1 station.
Bank + Archway have 9 distinct letters in 2 stations.
>
>The correct answer has 26 distinct letters in n stations, where n is lowest number possible.
>
>P.S. just copy the names into a CSV file or array to work with, you don't need to scrape the actual page link.

## Approach

- first, we copy the stations into a simple array to work with
- then we transform the array into a 2d array to preserve the original station names for the output
- then we reduce each station name to an array of it's unique characters (we'll refer to these arrays of characters as stations from now on)
- we then remove any stations where all the characters appear in another station (i.e. a subset of characters of another station)
- using recursion (because who doesn't love a bit of recursion?!), we then:
  - create an array of all pairs of stations (removing any duplicate characters)
  - this then becomes the new array
  - we then iterate through the new array adding another station to each value (if not a subset) until we have at least one array containing all 26 letters of the alphabet
- finally, we format the output so it looks pretty and create a simple index file for the browser

## Run

```
node index.js
```

or open `index.html` in your browser (it will print to the screen and console)

## Feedback

Any feedback is welcome!
:heart:
