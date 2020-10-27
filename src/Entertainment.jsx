import React, { Component } from "react";
import "./Common.css";
import NavBar from "./NavBar";
import NewsCard from "./NewsCard";
import axios from "axios";

class Entertainment extends Component {
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
    this.API("https://shauryasuman.pythonanywhere.com/entertainment");
  }
  render() {
    return (
      <>
        <NavBar name="Entertainment News" />
        <NewsCard data={this.state.data}/>
      </>
    );
  }
}

export default Entertainment;
