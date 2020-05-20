import React, { Children, cloneElement } from "react";
import PropTypes from "prop-types";

const Cosha = ({
    children,
    blur,
    brightness,
    saturation,
    x,
    y
  }) => {

  let clone = cloneElement(
    Children.only(children),
    {
      alt: "",
      style: {
        filter:
          `blur(${blur}) brightness(${brightness}) saturate(${saturation})`,
        position: "absolute",
        width: "100%",
        zIndex: "-1",
        transform: `translate3d(${x}, ${y}, 0)`
      }
    }
  );

  return (
    <div style={{
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      {clone}
      {children}
    </div>
  );
};

Cosha.propTypes = {
  children: PropTypes.node.isRequired,
  blur: PropTypes.string,
  brightness: PropTypes.string,
  saturation: PropTypes.string,
  x: PropTypes.string,
  y: PropTypes.string
};

Cosha.defaultProps = {
  blur: "10px",
  brightness: "125%",
  saturation: "110%",
  x: "2px",
  y: "6px"
}

export default Cosha;
