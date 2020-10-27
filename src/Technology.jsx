import React, { Component } from "react";
import "./Common.css";
import axios from "axios";
import NavBar from "./NavBar";
import NewsCard from "./NewsCard";

class Technology extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  API(url) {
    axios.get(url).then((response) => {
      this.setState({ data: response.data });
      console.log(response);
    });
  }

  componentDidMount() {
    this.API("http://shauryasuman.pythonanywhere.com/technology");
  }
  render() {
    return (
      <>
        <NavBar name="Technology News"/>
        <NewsCard data={this.state.data}/>
      </>
    );
  }
}

export default Technology;
