# p5.learn.js

p5.learn.js is a library for [p5.js](https://github.com/processing/p5.js) developed by [Strive](https://www.strivemath.com/) to aid in teaching coding. It extends p5.js with a bottom left coordinate mode mimicking the standard mathematical setup where coordinate (0,0) is in the bottom left and the y-axis moves upwards. It also adds functions for drawing tick axes, graphs, arrows and more.

# Usage

Load [p5.learn.js](https://github.com/StriveMath/p5.learn.js/blob/main/src/p5.learn.js) in a script tag below p5.js inside index.html ([example](https://github.com/StriveMath/p5.learn.js/tree/main/examples/tickAxes))

```html
<head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/StriveMath/p5.learn.js/src/p5.learn.js"></script>
</head>
```

# Documentation

## coordinateMode()

```js
coordinateMode(mode);
```

Sets the coordinate mode to TOP_LEFT or BOTTOM_LEFT. Coordinate mode is set to TOP_LEFT by default. BOTTOM_LEFT mode mimics the standard mathematical setup where coordinate (0,0) is in the bottom left and the y-axis moves upwards ([example](https://github.com/StriveMath/p5.learn.js/blob/main/examples/tickAxes/sketch.js)).

| Argument | Description               | Value                   | Default |
| -------- | ------------------------- | ----------------------- | ------- |
| mode     | coordinate mode to be set | TOP_LEFT \| BOTTOM_LEFT | -       |

## drawTickAxes()

```js
drawTickAxes(
  [scaleFactor],
  [spacing],
  [axisColor],
  [gridColor],
  [labelColor],
  [labelSize],
  [axisThickness],
  [tickThickness],
  [gridThickness]
);
```

Draws x and y-axes with tick marks, labels, and gridlines ([example](https://github.com/StriveMath/p5.learn.js/blob/main/examples/tickAxes/sketch.js)).

| Argument      | Description                                                                 | Value              | Default                 |
| ------------- | --------------------------------------------------------------------------- | ------------------ | ----------------------- |
| scaleFactor   | the scale factor applied to the coordinate system prior to drawing the axes | number             | 1                       |
| spacing       | the spacing between tick marks / gridlines                                  | number             | 50                      |
| axisColor     | the color to draw the axes                                                  | string \| p5.Color | "rgb(20,45,217)"        |
| gridColor     | the color to draw the gridlines                                             | string \| p5.Color | "rgba(255,255,255,0.6)" |
| labelColor    | the color to draw the labels                                                | string \| p5.Color | "white"                 |
| labelSize     | the size of the labels                                                      | number             | 12                      |
| axisThickness | the thickness to draw the axes                                              | number             | 5                       |
| tickThickness | the thickness to draw the tick marks                                        | number             | 3                       |
| gridThickness | the thickness to draw the gridlines                                         | number             | 0.25                    |

## bounce()

```js
bounce(maxNum, minNum, speed);
```

Returns a number that moves up and down between maxNum and minNum with a given speed ([example](https://github.com/StriveMath/p5.learn.js/blob/main/examples/signals/sketch.js)).

| Argument | Description                     | Value  | Default |
| -------- | ------------------------------- | ------ | ------- |
| maxNum   | maximum value                   | number | -       |
| minNum   | minimum value                   | number | -       |
| speed    | speed at which the bounce moves | number | -       |

## wave()

```js
wave(minNum, maxNum, speed);
```

Returns a number that waves up and down between maxNum and minNum with a given speed ([example](https://github.com/StriveMath/p5.learn.js/blob/main/examples/signals/sketch.js)).

| Argument | Description                   | Value  | Default |
| -------- | ----------------------------- | ------ | ------- |
| minNum   | minimum value                 | number | -       |
| maxNum   | maximum value                 | number | -       |
| speed    | speed at which the wave moves | number | -       |

## responsiveText()

```js
responsiveText(str, x, y);
```

Draws text positioned upwards and rightwards independent of rotation and scale.

| Argument | Description        | Value  | Default |
| -------- | ------------------ | ------ | ------- |
| str      | string to be drawn | string | -       |
| x        | x-coordinate       | number | -       |
| y        | y-coordinate       | number | -       |

## drawVector()

```js
drawVector(O_x, O_y, V, [dash]);
```

Draws a vector V with origin (O_x, O_y) and optional dash rendering

| Argument | Description                                | Value               | Default |
| -------- | ------------------------------------------ | ------------------- | ------- |
| O_x      | the x coordinate of the tail of the vector | number              | -       |
| O_y      | the y coordinate of the tail of the vector | number              | -       |
| V        | the head of the vector                     | p5.Vector           | -       |
| dash     | the y-coordinate of the arrow's head       | boolean \| number[] | false   |

## createMovableCircle()

```js
let circle

function setup() {
   let circle = createMovableCircle(x, y, d, [clr])
   circle.lock("x", true)
}

draw() {
   circle.draw()
}
```

Creates a circle that users can drag about the canvas with their mouse ([example](https://github.com/StriveMath/p5.learn.js/blob/main/examples/movablecircle/sketch.js)).

| Argument | Description                          | Value              | Default |
| -------- | ------------------------------------ | ------------------ | ------- |
| x        | the circle's x-coordinate            | number             | -       |
| y        | the circle's y-coordinate            | number             | -       |
| d        | the circle's diameter                | number             | -       |
| clr      | the circle's color when hovered over | string \| p5.Color | "red"   |

### lock()

Locks the circle movement along the x or y axis.

| Property   | Description                    | Value      | Default |
| ---------- | ------------------------------ | ---------- | ------- |
| coordinate | coordinate to lock             | "x" \| "y" | -       |
| value      | lock or unlock circle movement | boolean    | -       |

### draw()

Draws the circle.

## die()

```js
die(roll, x, y, [primary], [secondary]);
```

Draws a single die that displays a number 1-6.

| Argument  | Description                                     | Value              | Default |
| --------- | ----------------------------------------------- | ------------------ | ------- |
| roll      | the number to display                           | number             | -       |
| x         | the die's x-coordinate                          | number             | -       |
| y         | the die's y-coordinate                          | number             | -       |
| primary   | the die's primary (background) color (Optional) | string \| p5.Color | "white" |
| secondary | the die's secondary (circle) color (Optional)   | string \| p5.Color | "black" |

## drawBarGraph()

```js
drawBarGraph(data, [labels], [width], [height], [barScale]);
```

Draws a simple bar graph given an Array of data ([example](https://github.com/StriveMath/p5.learn.js/blob/main/examples/bargraph/sketch.js)).

| Argument | Description                                     | Value    | Default     |
| -------- | ----------------------------------------------- | -------- | ----------- |
| data     | the data to graph                               | number[] | -           |
| labels   | the labels for the data                         | string[] | []          |
| width    | the width of the graph                          | number   | width - 16  |
| height   | the height of the graph                         | number   | height - 16 |
| barScale | the scale factor from data values to bar height | number   | 5           |

## draw3DAxes

```js
draw3DAxes(size, [clr]);
```

Draws a set of x, y, and z-axes along with translucent planes ([example](https://github.com/StriveMath/p5.learn.js/blob/main/examples/3daxes/sketch.js)).

| Argument | Description                                             | Value  | Default  |
| -------- | ------------------------------------------------------- | ------ | -------- |
| size     | the extent of the axes                                  | number | -        |
| clr      | the color to render the planes oriented along each axis | number | "violet" |

# Contributors

- [Nick McIntyre](https://github.com/nickmcintyre)
- [Sama Naraghi](https://github.com/Sama552)
- [Ibrahim Almetwale](https://github.com/ibrahim775)
- [Tamir Shklaz](https://github.com/TamirShklaz)
- [Maxim Schoemaker](https://github.com/MaximSchoemaker)
