import React from 'react';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OpiumButton = function (_React$Component) {
  _inherits(OpiumButton, _React$Component);

  function OpiumButton(props) {
    _classCallCheck(this, OpiumButton);

    var _this = _possibleConstructorReturn(this, (OpiumButton.__proto__ || Object.getPrototypeOf(OpiumButton)).call(this, props));

    var backgrounds = props.background.split('|');

    _this.state = {
      background: backgrounds[0],
      backgroundHover: backgrounds[1]
    };
    return _this;
  }

  _createClass(OpiumButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setProperties();
    }
  }, {
    key: 'setProperties',
    value: function setProperties() {
      var _props = this.props,
          color = _props.color,
          dimensions = _props.dimensions,
          padding = _props.padding,
          border = _props.border,
          radius = _props.radius,
          full = _props.full,
          rounded = _props.rounded;

      var colors = color.split('|');
      var width = full ? '100%' : dimensions.split(',')[0] + 'px';
      var height = dimensions.split(',')[1];
      var buttonStyle = this.button.style;

      if (/\d/.test(width)) {
        buttonStyle.setProperty('--width', width);
      }
      if (height) {
        buttonStyle.setProperty('--height', height + 'px');
      }
      buttonStyle.setProperty('--padding', '' + padding);
      buttonStyle.setProperty('--background', this.state.background);
      buttonStyle.setProperty('--backgroundHover', this._darkenBackground(5));
      buttonStyle.setProperty('--border', border);
      buttonStyle.setProperty('--radius', (rounded ? '100' : radius) + 'px');
      buttonStyle.setProperty('--color', colors[0]);
      buttonStyle.setProperty('--colorHover', colors[1] || colors[0]);
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.props.onClick();
    }
  }, {
    key: '_darkenBackground',
    value: function _darkenBackground(percent) {
      var _state = this.state,
          background = _state.background,
          backgroundHover = _state.backgroundHover;


      if (backgroundHover) {
        return backgroundHover;
      }

      var isGradient = /gradient/.test(background);

      if (isGradient) {
        var darker = background;
        var hexCodes = background.match(/#\w+/g);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = hexCodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var hex = _step.value;

            darker = darker.replace(hex, '#' + this._getDarkerHex(hex, percent));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return darker;
      } else {
        return '#' + this._getDarkerHex(background, percent);
      }
    }
  }, {
    key: '_getDarkerHex',
    value: function _getDarkerHex(color, percent) {
      var num = parseInt(color.replace('#', ''), 16);
      var amt = Math.round(2.55 * percent);
      var R = (num >> 16) - amt;
      var B = (num >> 8 & 0x00FF) - amt;
      var G = (num & 0x0000FF) - amt;

      return (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
    }
  }, {
    key: 'getLoader',
    value: function getLoader() {
      var loaderType = this.props.loaderType;


      switch (loaderType) {
        case 'dots':
          return React.createElement(
            'g',
            { transform: 'scale(1.5)', 'transform-origin': 'center' },
            React.createElement('circle', { className: 'opm-fill opm-dot', cx: '7', cy: '50', r: '7' }),
            React.createElement('circle', { className: 'opm-fill opm-dot', cx: '50', cy: '50', r: '7' }),
            React.createElement('circle', { className: 'opm-fill opm-dot', cx: '93', cy: '50', r: '7' })
          );
          break;

        case 'disk':
          return React.createElement(
            'g',
            { transform: 'translate(50,50)' },
            React.createElement(
              'g',
              { transform: 'scale(0.7)' },
              React.createElement('circle', { className: 'opm-fill', opacity: '0.2', cx: '0', cy: '0', r: '50' }),
              React.createElement(
                'circle',
                { className: 'opm-fill', opacity: '0.9', transform: 'rotate(354.382)', cx: '0', cy: '-28', r: '15' },
                React.createElement('animateTransform', { attributeName: 'transform', type: 'rotate', calcMode: 'linear', values: '0 0 0;360 0 0', keyTimes: '0;1', dur: '1s', repeatCount: 'indefinite' })
              )
            )
          );
          break;

        case 'gooey':
          return React.createElement(
            'g',
            null,
            React.createElement(
              'defs',
              null,
              React.createElement(
                'filter',
                { id: 'gooey', x: '-100%', y: '-100%', width: '300%', height: '300%', colorInterpolationFilters: 'sRGB' },
                React.createElement('feGaussianBlur', { 'in': 'SourceGraphic', stdDeviation: '10' }),
                React.createElement('feColorMatrix', { mode: 'matrix', result: 'cm', values: '1 0 0 0 0   0 1 0 0 0   0 0 1 0 0   0 0 0 60 -40' })
              )
            ),
            React.createElement(
              'g',
              { filter: 'url(#gooey)', transform: 'scale(1.2)', 'transform-origin': 'center', opacity: '0.92' },
              React.createElement(
                'circle',
                { className: 'opm-fill', cx: '26.989', cy: '50', r: '24.989' },
                React.createElement('animate', { attributeName: 'r', calcMode: 'spline', dur: '1', keySplines: '0.5 0 0.5 1;0.5 0 0.5 1', keyTimes: '0;0.5;1', repeatCount: 'indefinite', values: '18;25;18' }),
                React.createElement('animate', { attributeName: 'cx', calcMode: 'spline', dur: '1', keySplines: '0.5 0 0.5 1;0.5 0 0.5 1', keyTimes: '0;0.5;1', repeatCount: 'indefinite', values: '20;27;20' })
              ),
              React.createElement(
                'circle',
                { className: 'opm-fill', cx: '72.989', cy: '50', r: '18.011' },
                React.createElement('animate', { attributeName: 'r', calcMode: 'spline', dur: '1', keySplines: '0.5 0 0.5 1;0.5 0 0.5 1', keyTimes: '0;0.5;1', repeatCount: 'indefinite', values: '25;18;25' }),
                React.createElement('animate', { attributeName: 'cx', calcMode: 'spline', dur: '1', keySplines: '0.5 0 0.5 1;0.5 0 0.5 1', keyTimes: '0;0.5;1', repeatCount: 'indefinite', values: '66;73;66' })
              )
            )
          );
          break;

        case 'ripple':
          return React.createElement(
            'g',
            null,
            React.createElement(
              'circle',
              { className: 'opm-stroke', fill: 'none', strokeWidth: '6', cx: '50', cy: '50', r: '39.784' },
              React.createElement('animate', { attributeName: 'r', calcMode: 'spline', values: '0;50', keyTimes: '0;1', dur: '1.2', keySplines: '0 0.2 0.8 1', begin: '-0.5s', repeatCount: 'indefinite' }),
              React.createElement('animate', { attributeName: 'opacity', calcMode: 'spline', values: '1;0', keyTimes: '0;1', dur: '1.2', keySplines: '0.2 0 0.8 1', begin: '-0.5s', repeatCount: 'indefinite' })
            ),
            React.createElement(
              'circle',
              { className: 'opm-stroke', fill: 'none', strokeWidth: '6', cx: '50', cy: '50', r: '24.7337' },
              React.createElement('animate', { attributeName: 'r', calcMode: 'spline', values: '0;50', keyTimes: '0;1', dur: '1.2', keySplines: '0 0.2 0.8 1', begin: '0s', repeatCount: 'indefinite' }),
              React.createElement('animate', { attributeName: 'opacity', calcMode: 'spline', values: '1;0', keyTimes: '0;1', dur: '1.2', keySplines: '0.2 0 0.8 1', begin: '0s', repeatCount: 'indefinite' })
            )
          );

        default:
          return React.createElement(
            'circle',
            { className: 'opm-stroke', strokeWidth: '9', strokeLinecap: 'round', strokeDasharray: '164.933 56.977', cx: '50', cy: '50', fill: 'none', r: '35', opacity: '0.9', transform: 'rotate(258.182 50 50)' },
            React.createElement('animateTransform', { attributeName: 'transform', type: 'rotate', calcMode: 'linear', values: '0 50 50;360 50 50', keyTimes: '0;1', dur: '1s', repeatCount: 'indefinite' })
          );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          _props2$state = _props2.state,
          state = _props2$state === undefined ? 'normal' : _props2$state,
          disabled = _props2.disabled,
          text = _props2.text,
          loadingText = _props2.loadingText;


      return React.createElement(
        'button',
        {
          className: 'opm-btn is-' + state,
          disabled: !!disabled,
          ref: function ref(el) {
            return _this2.button = el;
          },
          onClick: this.handleClick.bind(this) },
        React.createElement(
          'span',
          { className: 'opm-text' },
          text
        ),
        loadingText ? React.createElement(
          'span',
          { className: 'opm-loading-text' },
          React.createElement(
            'span',
            { className: 'opm-loading-text__blinker' },
            loadingText
          )
        ) : React.createElement(
          'span',
          { className: 'opm-loader' },
          React.createElement(
            'svg',
            { height: '100%', overflow: 'visible', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100', preserveAspectRatio: 'xMidYMid' },
            this.getLoader()
          )
        ),
        React.createElement(
          'svg',
          { className: 'opm-success', opacity: '0.95', viewBox: '0 0 192 192', xmlns: 'http://www.w3.org/2000/svg' },
          React.createElement('path', { className: 'opm-checkmark opm-stroke', d: 'M30,102L70,142L162,50' })
        )
      );
    }
  }]);

  return OpiumButton;
}(React.Component);

OpiumButton.defaultProps = {
  background: '#e8eaeb',
  color: '#2e2e2e',
  dimensions: 'auto auto',
  padding: '5px',
  border: 'none',
  radius: 0,
  full: false,
  rounded: false,
  onClick: function onClick() {}
};

export default OpiumButton;
