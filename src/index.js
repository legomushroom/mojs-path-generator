import React from "react";
import PropTypes from "prop-types";

// Placeholder function
const generatePath = options => "M150 0 L75 200 L225 200 Z";

const MojsPathGenerator = props => (
  <div>
    <svg width="500" height="500">
      <path
        stroke="red"
        strokeWidth="3"
        fill="#000"
        d={generatePath(props.options)}
      />
    </svg>
  </div>
);

MojsPathGenerator.propTypes = {
  options: PropTypes.any.isRequired
};

export default MojsPathGenerator;
export { MojsPathGenerator };
