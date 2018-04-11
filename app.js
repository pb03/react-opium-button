import React from 'react';

class OpiumButton extends React.Component {
  constructor(props) {
    super(props);

    const backgrounds = props.background.split('|');

    this.state = {
      background: backgrounds[0],
      backgroundHover: backgrounds[1]
    }
  }

  componentDidMount() {
    this.setProperties();
  }

  setProperties() {
    const { color, dimensions, padding, border, radius, full, rounded } = this.props;
    const colors = color.split('|');
    const width = full ? '100%' : `${dimensions.split(',')[0]}px`;
    const height = dimensions.split(',')[1];
    const buttonStyle = this.button.style;

    if (/\d/.test(width)) {
      buttonStyle.setProperty('--width', width);
    }
    if (height) {
      buttonStyle.setProperty('--height', `${height}px`);
    }
    buttonStyle.setProperty('--padding', `${padding}`);
    buttonStyle.setProperty('--background', this.state.background);
    buttonStyle.setProperty('--backgroundHover', this._darkenBackground(5));
    buttonStyle.setProperty('--border', border);
    buttonStyle.setProperty('--radius', `${rounded ? '100' : radius}px`);
    buttonStyle.setProperty('--color', colors[0]);
    buttonStyle.setProperty('--colorHover', colors[1] || colors[0]);
  }

  handleClick() {
    this.props.onClick();
  }

  _darkenBackground(percent) {
    const { background, backgroundHover } = this.state;

    if (backgroundHover) {
      return backgroundHover;
    }

    const isGradient = /gradient/.test(background);

    if (isGradient) {
      let darker = background;
      const hexCodes = background.match(/#\w+/g);
      for (let hex of hexCodes) {
        darker = darker.replace(hex, `#${this._getDarkerHex(hex, percent)}`);
      }
      return darker;
    } else {
      return `#${this._getDarkerHex(background, percent)}`;
    }
  }

  _getDarkerHex(color, percent) {
    const num = parseInt(color.replace('#',''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) - amt;
    const B = (num >> 8 & 0x00FF) - amt;
    const G = (num & 0x0000FF) - amt;

    return (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
  }

  getLoader() {
    const { loaderType } = this.props;

    switch (loaderType) {
      case 'dots':
      return <g className="opm-dots">
        <circle className="opm-fill opm-dot" cx="7" cy="50" r="7"/>
        <circle className="opm-fill opm-dot" cx="50" cy="50" r="7"/>
        <circle className="opm-fill opm-dot" cx="93" cy="50" r="7"/>
      </g>;
      break;

      case 'disk':
      return <g transform="translate(50,50)">
        <g transform="scale(0.7)">
          <circle className="opm-fill" opacity="0.2" cx="0" cy="0" r="50"/>
          <circle className="opm-fill" opacity="0.9" transform="rotate(354.382)" cx="0" cy="-28" r="15">
            <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 0 0;360 0 0" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
          </circle>
        </g>
      </g>;
      break;

      case 'gooey':
      return <g>
        <defs>
          <filter id="gooey" x="-100%" y="-100%" width="300%" height="300%" colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10"/>
            <feColorMatrix mode="matrix" result="cm" values="1 0 0 0 0   0 1 0 0 0   0 0 1 0 0   0 0 0 60 -40"/>
          </filter>
        </defs>
        <g filter="url(#gooey)" transform="scale(1.2)" transform-origin="center" opacity="0.92">
          <circle className="opm-fill" cx="26.989" cy="50" r="24.989">
            <animate attributeName="r" calcMode="spline" dur="1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" keyTimes="0;0.5;1" repeatCount="indefinite" values="18;25;18"/>
            <animate attributeName="cx" calcMode="spline" dur="1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" keyTimes="0;0.5;1" repeatCount="indefinite" values="20;27;20"/>
          </circle>
          <circle className="opm-fill" cx="72.989" cy="50" r="18.011">
            <animate attributeName="r" calcMode="spline" dur="1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" keyTimes="0;0.5;1" repeatCount="indefinite" values="25;18;25"/>
            <animate attributeName="cx" calcMode="spline" dur="1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" keyTimes="0;0.5;1" repeatCount="indefinite" values="66;73;66"/>
          </circle>
        </g>
      </g>;
      break;

      case 'ripple':
      return <g>
        <circle className="opm-stroke" fill="none" strokeWidth="6" cx="50" cy="50" r="39.784">
          <animate attributeName="r" calcMode="spline" values="0;50" keyTimes="0;1" dur="1.2" keySplines="0 0.2 0.8 1" begin="-0.5s" repeatCount="indefinite"/>
          <animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur="1.2" keySplines="0.2 0 0.8 1" begin="-0.5s" repeatCount="indefinite"/>
        </circle>
        <circle className="opm-stroke" fill="none" strokeWidth="6" cx="50" cy="50" r="24.7337">
          <animate attributeName="r" calcMode="spline" values="0;50" keyTimes="0;1" dur="1.2" keySplines="0 0.2 0.8 1" begin="0s" repeatCount="indefinite"/>
          <animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur="1.2" keySplines="0.2 0 0.8 1" begin="0s" repeatCount="indefinite"/>
        </circle>
      </g>;

      default:
      return <circle className="opm-stroke" strokeWidth="9" strokeLinecap="round" strokeDasharray="164.933 56.977" cx="50" cy="50" fill="none" r="35" opacity="0.9" transform="rotate(258.182 50 50)">
        <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" repeatCount="indefinite"/>
      </circle>;
    }
  }

  render() {
    const { state = 'normal', disabled, text, loadingText } = this.props;

    return (
      <button
        className={`opm-btn is-${state}`}
        disabled={!!disabled}
        ref={el => this.button = el}
        onClick={this.handleClick.bind(this)}>
        <span className="opm-text">{text}</span>
        {loadingText
          ? <span className="opm-loading-text">
              <span className="opm-loading-text__blinker">{loadingText}</span>
            </span>
          : <span className="opm-loader">
              <svg height="100%" width="100%" overflow="visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                {this.getLoader()}
              </svg>
            </span>}
        <svg className="opm-success" opacity="0.95" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">
          <path className="opm-checkmark opm-stroke" d="M30,102L70,142L162,50" />
        </svg>
      </button>
    );
  }
}

OpiumButton.defaultProps = {
  text: 'Click me!',
  background: '#e8eaeb',
  color: '#2e2e2e',
  dimensions: 'auto auto',
  padding: '5px',
  border: 'none',
  radius: 0,
  full: false,
  rounded: false,
  onClick: () => {}
};

export default OpiumButton;
