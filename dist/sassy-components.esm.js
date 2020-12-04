import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider, css } from 'styled-components';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var LightMode = {};

var DarkMode = {
  mode: 'dark',
  backgroundColor: 'black',
  color: 'white'
};

var generatePalette = function generatePalette(hue, saturation) {
  var palette = {};

  for (var i = 0; i <= 95; i += 5) {
    palette[i] = hsl(hue, saturation, i);
  }

  palette['hue'] = hue;
  palette['saturation'] = saturation;
  return palette;
};

var hsl = function hsl(h, s, l) {
  return "hsl(" + h + "," + s + "%," + l + "%)";
};

var ColorTokens = {
  colors: {
    primary: /*#__PURE__*/generatePalette(203, 100),
    success: /*#__PURE__*/generatePalette(110, 70),
    info: /*#__PURE__*/generatePalette(203, 10),
    warning: /*#__PURE__*/generatePalette(40, 90),
    danger: /*#__PURE__*/generatePalette(10, 95),
    gray: /*#__PURE__*/generatePalette(203, 10),
    white: "white",
    black: "black"
  }
};
var BorderRadiusTokens = {
  borderRadiusSmall: "0.125rem",
  borderRadiusMedium: "0.25rem",
  borderRadiusLarge: "0.5rem",
  borderRadiusXLarge: "1rem",
  borderRadiusCircle: "50%",
  borderRadiusPill: "9999px"
};
var ElevationTokens = {
  shadowXSmall: "0 1px 0 rgba(0, 0, 0, 0.05)",
  shadowSmall: "0 1px 2px rgba(0, 0, 0, 0.1)",
  shadowMedium: "0 2px 4px rgba(0, 0, 0, 0.1)",
  shadowLarge: "0 2px 8px rgba(0, 0, 0, 0.1)",
  shadowXLarge: "0 4px 16px rgba(0, 0, 0, 0.1)"
};
var SpacingTokens = {
  spacingXXXSmall: "0.125rem",
  spacingXXSmall: "0.25rem",
  spacingXSmall: "0.5rem",
  spacingSmall: "0.75rem",
  spacingMedium: "1rem ",
  spacingLarge: "1.25rem",
  spacingXLarge: "1.75rem",
  spacingXXLarge: "2.25rem",
  spacingXXXLarge: "3rem ",
  spacingXXXXLarge: "4.5rem"
};
var TransitionTokens = {
  transitionXSlow: "1000ms",
  transitionSlow: "500ms",
  transitionMedium: "250ms",
  transitionFast: "150ms",
  transitionXFast: "50ms"
};
var TypographyTokens = {
  // font families
  fontMono: "'SFMono Regular', Consolas, 'Liberation Mono', Menlo, monospace",
  fontSans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  fontSerif: "Georgia, 'Times New Roman', serif",
  // font sizes
  fontSizeXXSmall: "0.625rem",
  fontSizeXSmall: "0.75rem",
  fontSizeSmall: "0.875rem",
  fontSizeMedium: "1rem",
  fontSizeLarge: "1.25rem",
  fontSizeXLarge: "1.5rem",
  fontSizeXXLarge: "2.25rem",
  fontSizeXXXLarge: "3rem",
  fontSizeXXXXLarge: "4.5rem",
  // font weights
  fontWeightLight: 300,
  fontWeightNormal: 400,
  fontWeightSemibold: 500,
  fontWeightBold: 700,
  // letter spacings
  letterSpacingDense: "-0.015em",
  letterSpacingNormal: "normal",
  letterSpacingLoose: "0.075em",
  // line heights
  lineHeightDense: "1.4",
  lineHeightNormal: "1.8",
  lineHeightLoose: "2.2"
};
var core = /*#__PURE__*/_extends({}, ColorTokens, TransitionTokens, BorderRadiusTokens, ElevationTokens, SpacingTokens, TypographyTokens);

var SassyThemeProvider = function SassyThemeProvider(_ref2) {
  var _ref2$mode = _ref2.mode,
      mode = _ref2$mode === void 0 ? 'light' : _ref2$mode,
      _theme = _ref2.theme,
      children = _ref2.children;
  return React.createElement(ThemeProvider, {
    theme: function theme() {
      return {
        sassy: _extends({}, mode === 'light' ? LightMode : DarkMode, _theme, core)
      };
    }
  }, children);
};

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  display: block;\n  height: 100%;\n  width: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n    width: ", ";\n    height: ", ";\n    color: ", ";\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n  contain: strict;\n  box-sizing: content-box !important;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var StyledIcon = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject(), function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '1em' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '1em' : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color;
  return css(_templateObject2(), width, height, color);
});
var Svg = /*#__PURE__*/styled.svg( /*#__PURE__*/_templateObject3());

var icons = /*#__PURE__*/require('./bootstrap-icons.svg');
var Icon = function Icon(_ref) {
  var name = _ref.name,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '1em' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '1em' : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      src = _ref.src,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? (name == null ? void 0 : name.replaceAll(/\-/g, ' ')) + " icon" : _ref$label,
      otherProps = _objectWithoutPropertiesLoose(_ref, ["name", "width", "height", "color", "src", "label"]);

  if (!name && !src) throw new Error('At least name or src for Icon must be defined');
  return React.createElement(StyledIcon, Object.assign({
    width: width,
    height: height,
    color: color,
    "aria-label": label
  }, otherProps), React.createElement(Svg, null, src ? React.createElement("use", {
    href: src
  }) : React.createElement("use", {
    href: "./" + icons + "#" + name
  })));
};

function _templateObject3$1() {
  var data = _taggedTemplateLiteralLoose(["\n        &:hover,\n        &:focus {\n          color: ", ";\n        }\n\n        &:active {\n          color: ", ";\n        }\n      "]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteralLoose(["\n    border-radius: ", ";\n    color: ", ";\n    padding: ", ";\n    transition: color ", ";\n\n    ", "\n  "]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  background: none;\n  border: none;\n  font-size: inherit;\n  cursor: pointer;\n  -webkit-appearance: none;\n\n  ", "\n\n  &:focus {\n    outline: none;\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledIconButton = /*#__PURE__*/styled.button( /*#__PURE__*/_templateObject$1(), function (_ref) {
  var sassy = _ref.theme.sassy,
      disabled = _ref.disabled;
  return css(_templateObject2$1(), sassy.borderRadiusMedium, sassy.colors.gray[50], sassy.spacingXSmall, sassy.transitionMedium, !disabled && css(_templateObject3$1(), sassy.colors.primary[50], sassy.colors.primary[40]));
});

var IconButton = function IconButton(_ref) {
  var name = _ref.name,
      src = _ref.src,
      label = _ref.label,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      otherProps = _objectWithoutPropertiesLoose(_ref, ["name", "src", "label", "disabled"]);

  if (!name && !src) throw new Error('At least name or src for IconButton must be defined');
  return React.createElement(StyledIconButton, Object.assign({
    type: "button",
    disabled: disabled
  }, otherProps, {
    role: "button"
  }), React.createElement(Icon, {
    name: name,
    src: src,
    label: label
  }));
};

function _templateObject8() {
  var data = _taggedTemplateLiteralLoose(["\n      background-color: ", ";\n      border: solid 1px ", ";\n      border-radius: ", ";\n      font-family: ", ";\n      font-size: ", ";\n      font-weight: ", ";\n      color: ", ";\n      transition: opacity ", " ease,\n        transform ", " ease;\n\n      border-top-color: ", ";\n\n      & ", " {\n        color: ", ";\n      }\n\n      ", "\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  display: flex;\n  align-items: stretch;\n  box-shadow: none;\n  line-height: 1.6;\n  opacity: 0;\n  transform: scale(0.9);\n  ", "\n  border-top-width: 3px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n    font-size: ", ";\n    padding-right: ", ";\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n    padding: ", ";\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1 1 auto;\n  overflow: hidden;\n  ", "\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteralLoose(["\n    font-size: ", ";\n    margin-left: ", ";\n  "]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  ", "\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var AlertIcon = /*#__PURE__*/styled.span( /*#__PURE__*/_templateObject$2(), function (_ref) {
  var sassy = _ref.theme.sassy;
  return css(_templateObject2$2(), sassy.fontSizeLarge, sassy.spacingLarge);
});
var AlertMessage = /*#__PURE__*/styled.span( /*#__PURE__*/_templateObject3$2(), function (_ref2) {
  var sassy = _ref2.theme.sassy;
  return css(_templateObject4(), sassy.spacingLarge);
});
var AlertClose = /*#__PURE__*/styled.span( /*#__PURE__*/_templateObject5(), function (_ref3) {
  var sassy = _ref3.theme.sassy;
  return css(_templateObject6(), sassy.fontSizeLarge, sassy.spacingMedium);
});
var StyledAlert = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject7(), function (_ref4) {
  var sassy = _ref4.theme.sassy,
      hidden = _ref4.hidden,
      variant = _ref4.variant;
  if (!sassy) throw new Error('Please mount the sassy theme provider at a higher place in the component tree');
  return css(_templateObject8(), sassy.colors.white, sassy.colors.gray[90], sassy.borderRadiusMedium, sassy.fontSans, sassy.fontSizeSmall, sassy.fontWeightNormal, sassy.colors.gray[30], sassy.transitionMedium, sassy.transitionMedium, sassy.colors[variant][50], AlertIcon, sassy.colors[variant][50], !hidden && "opacity: 1; transform: scale(1);");
});

var Alert = function Alert(_ref) {
  var _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? true : _ref$isOpen,
      _ref$isClosable = _ref.isClosable,
      isClosable = _ref$isClosable === void 0 ? true : _ref$isClosable,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 5000 : _ref$duration,
      icon = _ref.icon,
      children = _ref.children,
      otherProps = _objectWithoutPropertiesLoose(_ref, ["isOpen", "isClosable", "variant", "duration", "icon", "children"]);

  var _useState = useState(),
      autoHideTimeout = _useState[0],
      setAutoHideTimeout = _useState[1];

  var _useState2 = useState(false),
      isShowing = _useState2[0],
      setIsShowing = _useState2[1];

  var hide = function hide() {
    setIsShowing(false);
    clearTimeout(autoHideTimeout);
  };

  var restartAutoHide = function restartAutoHide() {
    if (autoHideTimeout !== undefined) clearTimeout(autoHideTimeout);
    if (duration !== Infinity) setAutoHideTimeout(setTimeout(hide, duration));
  };

  var show = function show() {
    if (isOpen) {
      restartAutoHide();
      setIsShowing(true);
    }
  };

  useEffect(function () {
    show();
    return function () {
      return clearTimeout(autoHideTimeout);
    };
  }, []);
  if (!isOpen) return null;
  return React.createElement(StyledAlert, Object.assign({
    variant: variant,
    hidden: !isShowing,
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true",
    "aria-hidden": !isShowing,
    onMouseMove: restartAutoHide
  }, otherProps), icon && React.createElement(AlertIcon, null, React.createElement(Icon, {
    name: icon
  })), React.createElement(AlertMessage, null, children), isClosable && React.createElement(AlertClose, {
    onClick: hide
  }, React.createElement(IconButton, {
    name: "x"
  })));
};

export { Alert, Icon, IconButton, SassyThemeProvider, core, DarkMode as dark, LightMode as light };
//# sourceMappingURL=sassy-components.esm.js.map
