import {useState} from 'react';
import './App.css';

var favs = {
  "Books": [
    {
      "title": "Start with Why",
      "rating": "4.5/5.0"
    },
    {
      "title": "The Infinite Game",
      "rating": "4.8/5.0"
    },
    {
      "title": "Inner Engineering",
      "rating": "4.0/5.0"
    }
  ], 
  "Movies": [
    {
      "title": "Avengers Endgame",
      "rating": "4.0/5.0"
    },
    {
      "title": "Thor Ragnorak",
      "rating": "4.8/5.0"
    },
    {
      "title": "Iron Man",
      "rating": "5.0/5.0"
    },
    {
      "title": "Iron Man 3",
      "rating": "4.9/5.0"
    },
    {
      "title": "Avengers",
      "rating": "4.7/5.0"
    },
    {
      "title": "Zack Snyder's Justice League",
      "rating": "4.6/5.0"
    }
  ], 
  "Tv Series": [
    {
      "title": "F.R.I.E.N.D.S.",
      "rating": "4.5/5.0"
    },
    {
      "title": "The Big Bang Theory",
      "rating": "4.7/5.0"
    },
    {
      "title": "Wanda Vision",
      "rating": "4.8/5.0"
    },
    {
      "title": "The Falcon and the Winter Soldier",
      "rating": "4.8/5.0"
    }
  ]
};

var mainTitles = Object.keys(favs);

function App() {

  const [item, setItem] = useState([]);

  function clickHandler(title) {
    var maintitle = title.target.innerText;
    var titleList = favs[maintitle];
    setItem(titleList);
  }

  return (
    <div className="App">
      <h1>my favs</h1>
      <div className="titles-container">
        {
          mainTitles.map(
            maintitle => {
              return (
                <div key={maintitle} className="titles" onClick={clickHandler}>
                  {maintitle}
                </div>
              )
            }
          )
        }
      </div>
      <h3>click to view my favs</h3>
      <hr></hr>
      <div className="card-collection">
        {
          item.map(
            listItem => {
              return (
                <div key={listItem.title} className="the-card">
                  <h1 className="sub-title"> {listItem.title}</h1>
                  <p className="rating">Rating: {listItem.rating}</p>
                </div>
              )
            }
          )
        }
      </div>
    </div>
  );
}

export default App;
