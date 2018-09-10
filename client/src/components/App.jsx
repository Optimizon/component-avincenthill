import React from 'react';
import $ from 'jquery';
import Header from './Header.jsx';
import Mentions from './Mentions.jsx';
import TopReviews from './TopReviews.jsx';
import styles from '../styles/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      currentProductId: 50,
    };
  }

  componentDidMount() {
    // TBD refactor ajax request to fetch/promises/await
    const settings = {
      async: true,
      crossDomain: true,
      url: `/reviews/${this.state.currentProductId}`,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'cache-control': 'no-cache',
      },
    };

    $.ajax(settings).done((data) => {
      console.log(`A successful GET request to server returned ${data.length} review objects`);
      this.setState({ reviews: data });
    });
  }

  renderStarRating(rating, vmin) {
    var style = {
      width: `${vmin}vmin`,
      height: `${vmin}vmin`,
    };

    const numFullStars = Math.floor(rating);
    const numEmptyStars = 5 - numFullStars;
    const remainder = rating - numFullStars;
    let hasHalf = remainder >= .25;

    let ratingArr = new Array(5).fill('');

    const starArray = ratingArr.map((element, index) => {
      if (index + 1 <= numFullStars) {
        return <img key='index' style={style} src='./img/fullStar.png'></img>;
      } else if (hasHalf) {
        hasHalf = false;
        return <img key='index' style={style} src='./img/halfStar.png'></img>;
      } else {
        return <img key='index' style={style} src='./img/emptyStar.png'></img>;
      }
    });

    return starArray;
  }

  getState() {
    return this.state;
  }

  render() {
    const { state } = this;
    const stringState = JSON.stringify(state.reviews[0]);
    return (
      <React.Fragment>
        <Header getState={this.getState.bind(this)} renderStarRating={this.renderStarRating.bind(this)} />
        <Mentions getState={this.getState.bind(this)} />
        <TopReviews getState={this.getState.bind(this)} renderStarRating={this.renderStarRating.bind(this)} />
      </React.Fragment>
    );
  }
}

export default App;
