import React, { Component } from "react";
import "./Common.css";
import NavBar from "./NavBar";
import NewsCard from "./NewsCard";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";

class Entertainment extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], loading: true };
  }

  API(url) {
    axios.get(url).then((response) => {
      this.setState({ data: response.data });
      this.setState({ loading: false });
      console.log(response);
    });
  }

  componentDidMount() {
    this.API("https://shauryasuman.pythonanywhere.com/entertainment");
  }
  render() {
    return this.state.loading ? (
      <div className="progress">
        <NavBar name="Top Headlines" />
        <CircularProgress />
      </div>
    ) : (
      <>
        <NavBar name="Entertainment News" />
        <NewsCard data={this.state.data} />
      </>
    );
  }
}

export default Entertainment;
