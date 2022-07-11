import React, { useEffect, useState } from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import mainImg from "./images/main.jpg";
import Modal from "./components/modal/Modal";
import SingleItem from "./components/singleItem/SingleItem";
import Card from "./components/card/Card";
import Pagination from "./components/pagi/Pagination";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  //const [characterPegi, setCharacterPegi] = useState(3)
  const characters = useCharacters(currentPage);
  const locations = useLocations(currentPage);
  //console.log("Characters data: ");
  //console.log(characters);
  //console.log("Locations data: ");
  //console.log(locations);

  const [singleData, setSingleData] = useState(null);

  const [showCharacters, setShowCharacters] = useState(false);
  const [showLocations, setShowLocations] = useState(false);

  const updateShowCharacters = () => {
    setShowLocations(false);
    setShowCharacters(true);
  };

  const updateShowLocations = () => {
    setShowCharacters(false);
    setShowLocations(true);
  };

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);
  return (
    <div>
      <div className="main">
        <h1>Rick and Morty</h1>
        <div className="grid">
          <img src={mainImg} />

          <button onClick={updateShowCharacters} className="character-btn">
            Character
          </button>
          <button onClick={updateShowLocations} className="location-btn">
            Location
          </button>

          <p className="character-text">
            Rick and Morty is an American adult animated science fiction sitcom
            created by Justin Roiland and Dan Harmon for Cartoon Network's
            nighttime programming block, Adult Swim Roiland voices the eponymous
            characters, with Chris Parnell, Spencer Grammer and Sarah Chalke
            voicing the rest of Rick and Morty's family. The series originated
            from an animated short parody film of Back to the Future, created by
            Roiland for Channel 101, a short film festival co-founded by Harmon.
            The series has been acclaimed by critics for its originality,
            creativity and humor.
          </p>
          <p className="location-text">
            The series follows the misadventures of cynical mad scientist Rick
            Sanchez and his good-hearted, but fretful grandson Morty Smith, who
            split their time between domestic life and interdimensional
            adventures. The fifth season premiered on June 20, 2021, and
            consisted of ten episodes. A sixth season was confirmed as part of a
            long-term deal in May 2018 that ordered 70 new episodes over an
            unspecified number of seasons.[2]
          </p>
        </div>
      </div>

      <div className="card-container">
        {showCharacters &&
          characters.results.map((char) => (
            <Card
              key={char.id}
              img={char.image}
              name={char.name}
              species={char.species}
              onClick={() => setSingleData(char)}
            />
          ))}

        {showLocations &&
          locations.results.map((char) => (
            <Card
              key={char.id}
              img={char.image}
              name={char.name}
              species={char.species}
              type={char.type}
              onClick={() => setSingleData(char)}
            />
          ))}
      </div>

      {(showLocations || showCharacters) && (
        <Pagination
          currentPage={currentPage}
          info={showCharacters ? characters.info : locations.info}
          setCurrentPage={setCurrentPage}
        />
      )}
      {singleData && (
        <Modal closeModal={() => setSingleData(null)}>
          <SingleItem data={singleData} />
        </Modal>
      )}
    </div>
  );
}

export default App;
