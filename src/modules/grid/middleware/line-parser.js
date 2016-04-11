'use strict';
const DroidGrid = require('exercise-droidgrid-core');
const lineSeparator = '\n';
const itemSeparator = ' ';

const facings = {
  'N': 'north',
  'W': 'west',
  'E': 'east',
  'S': 'south'
};

const actions = {
  'L': 'left',
  'R': 'right',
  'M': 'move'
};

// I kinda went with the idea that we're dealing with a legacy system that does
// things a certain way

module.exports = {
  parseToGrid: function (text) {
    // First we split the text into lines
    let lines = text.split(lineSeparator), line;
    let i, grid, items, droidX, droidY, droidFacing, actionChars;

    for (i = 0; i < lines.length; i++) {
      items = lines[i].split(itemSeparator);
      if (i === 0) {
        // First line is width and height
        if (items.length !== 2) {
          throw new Error('First line of text must be width and height');
        }
        const width = parseInt(items[0], 10) + 1;
        const height = parseInt(items[1], 10) + 1;
        grid = new DroidGrid({ width: width, height: height });
      } else {
        if (items.length === 3) {
          // Droid placement line
          droidX = parseInt(items[0], 10);
          droidY = parseInt(items[1], 10);
          droidFacing = facings[items[2]];
          if (droidX && droidY && droidFacing) {
            grid.placeDroid(droidX, droidY, droidFacing);
          } else {
            throw new Error('Invalid line: ' + lines[i]);
          }
        } else if (items.length === 1) {
          // Droid movement line
          actionChars = lines[i].split('').map(function (char) {
            if (!actions[char]) {
              throw new Error('Invalid action character: ' + char);
            }
            return actions[char];
          });
          grid.moveDroid(actionChars);
        } else {
          throw new Error('Invalid line (unrecognized): ' + lines[i]);
        }
      }
    }

    // Return a grid snapshot
    return grid.snapshot();
  }
}
