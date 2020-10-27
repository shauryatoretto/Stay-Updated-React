import React, { Component } from "react";
import "./Common.css";
import axios from "axios";
import NewsCard from "./NewsCard";
import NavBar from "./NavBar";

class Health extends Component {
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
    this.API("https://shauryasuman.pythonanywhere.com/health");
  }
  render() {
    return(
      <>
        <NavBar name="Health News"/>
        <NewsCard data={this.state.data}/>
      </>
    )
  }
}

export default Health;
