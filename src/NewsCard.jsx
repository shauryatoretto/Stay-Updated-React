import React from "react";
import Card from "@material-ui/core/Card";
import "./Common.css";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import LaunchIcon from "@material-ui/icons/Launch";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function NewsCard(props) {
  if (props.data === null)
    return (
      <div className="progress">
        <CircularProgress />
      </div>
    );
  const card = props.data.map((item) => {
    const title = item.title.split(" - ");
    const date = item.publishedAt.split("T");
    const splitDate = date[0].split("-");
    const dateTime = splitDate[2] + "/" + splitDate[1] + "/" + splitDate[0];
    return (
      <Card className="card">
        <CardHeader
          title={title[0]}
          subheader={dateTime + " - " + item.author}
        />
        <CardMedia className="image" image={item.urlToImage} />
        <CardContent>
          <Typography variant="h7" color="textSecondary" component="h7">
            {item.description}
          </Typography>
        </CardContent>
        <CardActions>
          <a href={item.url}>
            <IconButton>
              <Typography color="primary">View Full Coverage</Typography>
              <LaunchIcon />
            </IconButton>
          </a>
        </CardActions>
      </Card>
    );
  });

  return <div className="mainDiv">{card}</div>;
}
