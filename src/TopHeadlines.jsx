import React, { Component } from "react";
import "./Common.css";
import axios from "axios";
import NavBar from "./NavBar";
import NewsCard from "./NewsCard";

class TopHeadlines extends Component {
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
    this.API("http://shauryasuman.pythonanywhere.com/topHeadlines");
  }
  render() {
    return (
      <>
        <NavBar name="Top Headlines"/>
        <NewsCard data={this.state.data}/>
      </>
    );
  }
}

export default TopHeadlines;
