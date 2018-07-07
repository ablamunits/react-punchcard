# react-punchcard :punch: :black_joker:

A dead-simple React component for visualizing data using a punch card chart, without charting library dependencies.

Currently a work in progress.

[DEMO](https://ablamunits.github.io/react-punchcard/demo/)

## Installation & Usage

Install using npm:

```
npm install react-punchcard
```

### Usage

A Punch Card chart is composed of punch card rows. Each row represents a set of data.
The `PunchCard` component takes a `value` prop which is an array of rows:

```jsx
import {PunchCard} from 'react-punchcard';

... 

render () {
    const rows = [
      {id: 'row-1', label: 'Row 1', points: [{x: 1, y: 10}, {x: 2, y: 50}, {x: 3, y: 100}]},
      {id: 'row-2', label: 'Row 2', points: [{x: 1, y: 200}, {x: 2, y: 10}, {x: 3, y: 700}]}
    ];

    return (
        <PunchCard value={rows}/>
    );
}
```

The object representing a single row should be in the following format:

```js
const row = {
  id: 'unique-row-id', // The id of the row
  points: [], // Array of points where a point is: {x: number, y: number}
  label: 'Hey There!' // An optional string which is the label of the row
}
```

**Note:** Every row should have the same number of points, with the same, consistent domain. Meaning, the `x` values across rows should be consistent while 'y' values may vary.

### Options

The component takes a few optional props:

`className: string` - A string of additional class names that will be added to the component

`renderAxisTick: (p: Point) => string` - A function that returns a string, rendering a x-axis tick label at the bottom of the punch card.

`minDotScale: number` - The minimal scale value for a dot in the punch card. Default: 6

`maxDotScale: number` - The maximal scale value for a dot in the punch card. Default: 0.5


### Styling

As the use cases and applications of most charting / graphing components may be very different, this project provides minimal styling as a starting point to fit into your own project.
Use the built `css` as a baseline for your own styling needs, or create your own from scratch and ignore it altogether.
