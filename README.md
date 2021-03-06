# react-opium-button

A light-weight react button with inline state indicator.

<img src="https://github.com/pb03/react-opium-button/raw/master/demo.gif" width="680" alt="Demo">

[Codepen demo](https://codepen.io/prasanjit/pen/dmraqZ)

## Features
* Automatically generates a darker color from a given solid or gradient color for the hover/focus effect
* Hover color can also be provided manually
* Loading indicators with SVG animations
* Optional different text while loading
* Success indicator

## Installation
`npm i react-opium-button`

## Usage

### Basic example
```jsx
import React, { Component } from 'react';
import Button from 'react-opium-button';
import 'react-opium-button/style.css';

class App extends Component {
  contructor(props) {
    super(props);
    this.state = { buttonState: 'normal' };
  }

  handleClick() {
    console.log('button clicked');
  }

  render() {
    return (
      <div style={{ margin: '200px auto', maxWidth: '400px' }}>
        <Button
          text="Save"
          padding="10px 50px"
          background="#ee0979"
          color="#ffffff"
          state={this.state.buttonState}
          onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
```

### Advanced usage
Extend the plugin to make your own settings as default.
```jsx
// ./myModifiedButton.js
import Button from 'react-opium-button';

class myModifiedButton extends Button {
  static defaultProps = {
    background: '#ff0000',
    color: '#2e2e2e',
    dimensions: '100px 40px',
    border: '2px solid #ff0000',
    rounded: true
  }
}

export default myModifiedButton;
```

## Customizations

| Prop | Type | Default | Description |
|---|---|---|---|
| `text` | String | Click me! | Button text |
| `background` | String | `#e8eaeb` | Background color of the button. It can be solid or gradient color with hex values. It automatically calculates a darker color for hover effect, however, you can also specify a hover color with a '&#124;' separator, e.g. '#ff0000&#124;#000000' |
| `color` | String | `#2e2e2e` | Text color, should be a hex value, optionally specify hover color as '#ff0000&#124;#000000' |
| `dimensions` | String | `auto auto` | If the button needs to be of specific width or height, e.g. `150px 30px` |
| `padding` | String | `5px` | CSS padding e.g. `10px 50px` |
| `border` | String | `none` | CSS border e.g. `2px solid #e2e3e5` |
| `radius` | Number | `0` | Border radius |
| `full` | Boolean | `false` | Occupies full width if set `true` |
| `rounded` | Boolean | `false` | Makes the button corners rounded |
| `state` | String | `normal` | Button state: `normal`, `loading` or `success` |
| `loaderType` | String | circle | Loading animation type, it can be set as `circle`, `dots`, `ripple`, `disk` or `gooey` |
| `loadingText` | String | `null` | If set, it will show this text in place of loading animation |
| `onClick` | Function | - | onClick handler |
