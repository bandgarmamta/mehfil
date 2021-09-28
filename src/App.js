import { useState } from "react";
import "./styles.css";
import React from "react";

export default function App() {
  const topic = {
    Lata_Mangeshkar: [
      {
        name: "Lag ja gale",
        description: "A sweet pain",
        ratings: "4.7/5"
      },
      {
        name: "Ek pyaar ka nagma hai",
        description: "Just me and you",
        ratings: "4.5/5"
      },
      {
        name: "Der na ho jaye",
        description: "Still waiting",
        ratings: "4.1/5"
      }
    ],
    Mohommed_Rafi: [
      {
        name: "Kya hua tera wada",
        description: "An unkept promise",
        ratings: "4.7/5"
      },
      {
        name: "Baharon phool barsao",
        description: "Universe celebrates your presence",
        ratings: "4.5/5"
      },
      {
        name: "Likhe jo khat tujhe",
        description: "Writing for you",
        ratings: "4.1/5"
      }
    ],
    Mehdi_Hasan: [
      {
        name: "Aap ki aankhon ne",
        description: "Eyes are enough",
        ratings: "4.7/5"
      },
      {
        name: "Jab bhi pee kar",
        description: "Musings",
        ratings: "4.5/7"
      },
      {
        name: "Main hosh mai tha",
        description: "In delimma",
        ratings: "4.1/5"
      }
    ]
  };

  var [topicName, setTopic] = useState("Lata_Mangeshkar");

  function clickHandler(topicName) {
    setTopic(topicName);
  }

  console.log(Object.keys(topic));
  return (
    <div className="App">
      <h1 className="heading">Mehfil🎶</h1>
      {Object.keys(topic).map(function (subtopic) {
        console.log(subtopic);
        let namely = subtopic.split("_");
        return (
          <button className="btn-music" onClick={() => clickHandler(subtopic)}>
            {namely[0] + " " + namely[1]}
          </button>
        );
      })}
      ;
      <hr />
      <div>
        {topic[topicName].map((itemName) => {
          return (
            <li className="list-music">
              <h4>{itemName.name}</h4>
              <br />
              <small>{itemName.description}</small>
              <br />
              <small>{itemName.ratings}</small>
            </li>
          );
        })}
      </div>
    </div>
  );
}
