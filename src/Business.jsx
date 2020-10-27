import React, { Component } from "react";
import "./Common.css";
import axios from "axios";
import NavBar from "./NavBar";
import NewsCard from "./NewsCard";

class Business extends Component {
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
    this.API("https://shauryasuman.pythonanywhere.com/business");
  }
  render() {
    return (
      <>
        <NavBar name="Business News"/>
        <NewsCard data={this.state.data}/>
      </>
    );
  }
}

export default Business;
