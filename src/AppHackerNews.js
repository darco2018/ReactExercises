import React, { Component } from 'react';

export default class AppHackerNews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newsItems: ['hello']
    };
  }

  componentDidMount() {
    const hackernewsBaseUrl =
      'https://hacker-news.firebaseio.com/v0/topstories.json';
    let storyBase = 'https://hacker-news.firebaseio.com/v0/item/'; //{21737696}.json`

    fetch(hackernewsBaseUrl)
      .then(res => res.json())
      .then(storiesArr => {
          const LIMIT = 20;
        const limited = storiesArr.filter((story, i) => i < LIMIT);
        // returns array of Promises with JS objects
        return limited.map((storyId, i) => {
          let storyUrl = `${storyBase}${storyId}.json`;
          return fetch(storyUrl).then(res => res.json());
           //above:  response with extracted JS object
        });        
      }).then(promises => Promise.all(promises)) // takes a few seconds: 500 items
      .then(newsItems => {
          console.log(newsItems[0].title); 
          this.setState({newsItems});
        }
      )
  }

  render() {
    let { newsItems } = this.state;
    let view = <p>Loading....</p>;

    if (newsItems && newsItems.length > 0) {        
        view = newsItems.map((item, i) => (
            <p key={Number(item.id)} style={{padding: '5px'}}><a href={item.url} >{item.title}</a></p>
        ))      
    }
    return <div >{view}</div>;
  }
}
