
import React ,{useState, useEffect}from 'react'
import Card from './Card';


const CardList = ({ data }) => {
    console.log("In cardList component", data);
  
    const [cards, setCards] = useState([]);
  
    useEffect(() => {
      setCards(data);
    });
  
    return (
      <div className="container bg-white">
        <div className="row">
          {cards.length > 0 ? (
            <>
              {cards.map((elmt, index) => (
                <>
                  <div key={index} className="col mb-3 hoverEffect">
                    <Card fruit={elmt} />
                  </div>
                </>
              ))}
            </>
          ) : (
            <>No data</>
          )}
        </div>
      </div>
    );
  };
  
 export default CardList 