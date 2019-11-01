import React, { Component } from "react";

import TechItem from "./TechItem";

class TechList extends Component {
  state = {
    newTech: "",
    techs: ["nOJD", "REACT", "DALE"]
  };

  componentDidMount() {
    const techs = localStorage.getItem("techs");

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  // executado sempre q o estado muda
  componentDidUpdate(prevProps, prevState) {
    // novos:
    // this.props e this.state

    if (prevState.techs !== this.state.techs) {
      localStorage.setItem("techs", JSON.stringify(this.state.techs));
    }
  }

  componentWillUnmount;

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();

    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  };

  handleDelete = tech => {
    console.log(tech);
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem key={tech} handleDelete={this.handleDelete} tech={tech} />
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <input type="submit" value="asdass" />
      </form>
    );
  }
}

export default TechList;
