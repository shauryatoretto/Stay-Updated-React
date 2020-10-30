import React, { Component } from "react";
import "./Common.css";
import axios from "axios";
import NavBar from "./NavBar";
import NewsCard from "./NewsCard";
import CircularProgress from "@material-ui/core/CircularProgress";

class Business extends Component {
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
    this.API("https://shauryasuman.pythonanywhere.com/business");
  }
  render() {
    return this.state.loading ? (
      <div className="progress">
        <NavBar name="Top Headlines" />
        <CircularProgress />
      </div>
    ) : (
      <>
        <NavBar name="Business News" />
        <NewsCard data={this.state.data} />
      </>
    );
  }
}

export default Business;
