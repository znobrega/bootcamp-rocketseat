import React, { Component } from "react";

import PropTypes from "prop-types";

class TechItem extends Component {
  render() {
    return (
      <li key={this.props.tech}>
        {this.props.tech}
        <button
          onClick={() => this.props.handleDelete(this.props.tech)}
          type="button"
        >
          remove
        </button>
      </li>
    );
  }
}

TechItem.defaulProps = {
  tech: "noone"
};

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};

export default TechItem;
