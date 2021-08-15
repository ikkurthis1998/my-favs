import {useState} from 'react';
import './App.css';

var favs = {
  "Books": [
    {
      "title": "Start with Why",
      "description": "'Start With Why' is about a naturally occurring pattern, a way of thinking, acting and communicating that gives some leaders the ability to inspire those around them."
      ,"rating": "4.5/5.0"
    },
    {
      "title": "The Infinite Game",
      "description": "The Infinite Game explores leadership choices, and provides guidelines to implement an infinite game plan. Finite mindsets focus on winning, whereas infinite mindsets develop a more significant cause than ourselves or our business."
      ,"rating": "4.8/5.0"
    },
    {
      "title": "Inner Engineering",
      "description": "Inner Engineering is a guide to creating a life of happiness by exploring your internal landscape of thoughts and feelings and learning to align them with what the universe tells you."
      ,"rating": "4.0/5.0"
    }
  ], 
  "Movies": [
    {
      "title": "Avengers Endgame",
      "description": "After half of all life is snapped away by Thanos, the Avengers are left scattered and divided. Now with a way to reverse the damage, the Avengers and their allies must assemble once more and learn to put differences aside in order to work together and set things right."
      ,"rating": "4.0/5.0"
    },
    {
      "title": "Thor Ragnorak",
      "description": "Teaming with The Incredible Hulk and his deceptive brother Loki (Tom Hiddleston), Thor must return home to Asgard in time to stop Hela and prevent the approaching Ragnarök, the apocalyptic destruction of Asgard.",
      "rating": "4.8/5.0"
    },
    {
      "title": "Iron Man",
      "description": "A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors. Returning to America, Stark refines the suit and uses it to combat crime and terrorism.",
      "rating": "5.0/5.0"
    },
    {
      "title": "Iron Man 3",
      "description": "Marvel's Iron Man 3 pits brash-but-brilliant industrialist Tony Stark/Iron Man against an enemy whose reach knows no bounds. When Stark finds his personal world destroyed at his enemy's hands, he embarks on a harrowing quest to find those responsible. This journey, at every turn, will test his mettle.",
      "rating": "4.9/5.0"
    },
    {
      "title": "Avengers",
      "description": "When Thor's evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Fury's dream team are Iron Man (Robert Downey Jr.), Captain America (Chris Evans), the Hulk (Mark Ruffalo), Thor (Chris Hemsworth), the Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner).",
      "rating": "4.7/5.0"
    }
  ], 
  "Tv Series": [
    {
      "title": "F.R.I.E.N.D.S.",
      "description": "The misadventures of 20 something year old friends in New York City: Joey a struggling actor, Monica a chef, Rachel a waitress who hopes to work in fashion, Ross a paleontologist, Chandler who hates his job in data processing, and Phoebe a masseuse/musician.",
      "rating": "4.5/5.0"
    },
    {
      "title": "The Big Bang Theory",
      "description": "The lives of two geniuses named Dr. Leonard Hofstader and Dr. Sheldon Cooper change when they meet their new neighbor; motivated but unsuccessful actress Penny, who now works as a waitress at The Cheesecake Factory.",
      "rating": "4.7/5.0"
    },
    {
      "title": "Wanda Vision",
      "description": "Wanda Maximoff has created herself a reality in which Vision is alive and they are happily living together.",
      "rating": "4.8/5.0"
    },
    {
      "title": "The Falcon and the Winter Soldier",
      "description": "When Steve Rogers handed over Captain America’s Shield to Sam Wilson aka The Falcon, it sparked an array of questions. Will Sam hold the title of next Captain America? Why did Steve choose Sam over Bucky Barnes when in fact, he was stronger? ",
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
                  <p>{listItem.description}</p>
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
