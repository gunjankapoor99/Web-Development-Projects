import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card'
import "./tinderCards.css";
import axios from "./axios";

function TinderCards() {
    
// eslint-disable-next-line
    const [people, setPeople] = useState([
        // {
        //     name: "Elon Musk",
        //     url: "https://i.pinimg.com/originals/00/09/f4/0009f44897c3d9f6eb740dea9ec11022.png"
        // },
        // {
        //     name: "Jeff Bezos",
        //     url: "https://www.macitynet.it/wp-content/uploads/2017/11/jeff-bezos.jpg"
        // }
    ]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/tinder/cards");
            setPeople(req.data);
        }
        fetchData();
    }, [])

    const swipped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + "left the screen!");
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {people.map((person) => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up","down"]}
                    onSwipe={(dir) => swipped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div
                     style={{backgroundImage: `url(${person.imgUrl})`}}
                     className="card"
                    >
                     <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards;
