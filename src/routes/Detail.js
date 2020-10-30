import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="movieDetail__container">
          <img
            src={location.state.poster}
            alt={location.state.title}
            title={location.state.title}
          ></img>
          <div className="movieDetail__data">
            <h3 className="movieDetail__title">{location.state.title}</h3>
            <h5 className="movieDetail__year-genres">
              {location.state.year} •{" "}
              {location.state.genres.map((genre, index) => {
                return (
                  <span key={index} className="movieDetail__genre">
                    {genre}
                  </span>
                );
              })}
            </h5>
            <p className="movieDetail__summary">{location.state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
