import React, { useState } from 'react';
import Places from './places.json';
import Shopping from './shopping.json';
import Food from './foodanddrinks.json';

const views = ["places", "shopping", "food"];

const places = () => {
  return (
    <div>
      <h1 className="text-4xl text-center m-auto text-white font-bold bg-black mt-5 w-1/2 xl:w-1/3">Places to Visit</h1><hr />
      <h2 className="text-xl text-center font-bold border-2 m-auto rounded-md bg-white w-1/3 my-5">Kolkata, West Bengal</h2>
      <div className="w-full flex flex-col items-center justify-center ">
        {Places.places.map((card, index) => (
          <div
            key={index}
            className="bg-white border w-10/12 xl:w-1/2 rounded-lg p-4 m-6 shadow-md hover:shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <h4 className="text-gray-600 mb-2">{card.subtitle}</h4>
                <p className="text-gray-800 mb-4">{card.paragraph}</p>
                <a className="underline text-blue" href={card?.map} target='_blank'>View in Google Maps</a>
              </div>
              <div className="md:w-1/2 p-8 flex justify-end">
                <img
                  src={card.image}
                  alt={`Image ${index + 1}`}
                  className="w-96 h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center border-2 m-auto rounded-md bg-white w-8/12 xl:w-1/3 ">
        <span className="font-bold underline">Other mentions:</span>
        <ul className='list-disc'>
          {Places.mentions.map((card, index) => (
            <li
              key={index}
              className='hover:underline'
            >
              <a href={card.map} target='_blank'>{card.title}</a>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

const shopping = () => {
  return (
    <div>
      <h1 className="text-4xl text-center m-auto mt-5 text-white font-bold bg-black w-1/2 xl:w-1/3">Places to Shop</h1><hr />
      <h2 className="text-xl text-center font-bold border-2 m-auto rounded-md bg-white w-1/3 my-5">Kolkata, West Bengal</h2>
      <div className="w-full flex flex-col items-center justify-center ">
        {Shopping.map((card, index) => (
          <div
            key={index}
            className="bg-white border w-10/12 xl:w-1/2 rounded-lg p-4 m-6 shadow-md hover:shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <h4 className="text-gray-600 mb-2">{card.description}</h4>
                <a className="underline text-blue" href={card?.map} target='_blank'>View in Google Maps</a>
              </div>
              <div className="md:w-1/2 p-8 flex justify-end">
                <img
                  src={card.image}
                  alt={`Image ${index + 1}`}
                  className="w-96 h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const food = () => {
  return (
    <div>
      <h1 className="text-4xl text-center m-auto mt-5 text-white font-bold bg-black w-1/2 xl:w-1/3">Places to Eat and Drink</h1><hr />
      <h2 className="text-xl text-center font-bold border-2 m-auto rounded-md bg-white w-1/3 my-5">Kolkata, West Bengal</h2>
      <div className="w-full flex flex-col items-center justify-center ">
        {Food.map((card, index) => (
          <div
            key={index}
            className="bg-white border w-10/12 xl:w-1/2 rounded-lg p-4 m-6 shadow-md hover:shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <h4 className="text-gray-600 mb-2">{card.description}</h4>
                <a className="underline text-blue" href={card?.map} target='_blank'>View in Google Maps</a>
              </div>
              <div className="md:w-1/2 p-8 flex justify-end">
                <img
                  src={card.image}
                  alt={`Image ${index + 1}`}
                  className="w-96 h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Guide() {

  const [viewSelection, setViewSelection] = useState(views[0]);

  const getCurrentView = () => {

    switch (viewSelection) {
      case views[0]: return places();
      case views[1]: return shopping();
      case views[2]: return food();
      default: return (<div></div>);
    }
  }

  const handleButtonClick = (selection) => {
    setViewSelection(selection);
  };

  return (
    <div className="h-full min-h-screen flex-col justify-center bg-[length:300px_200px] bg-blend-soft-light bg-fixed bg-repeat-round" style={{ backgroundImage: `url('/bg3.jpg')` }}>
      <div className="backdrop-sepia-50 backdrop-brightness-70 min-h-full min-w-full">
        <div className="flex justify-center pt-8">
          <button
            className={`px-4 py-2 rounded mr-4 ${viewSelection === views[0] ? 'bg-white text-black' : 'bg-black text-white'}`}
            onClick={() => handleButtonClick(views[0])}
          >
            Places
          </button>
          <button
            className={`px-4 py-2 rounded mr-4 ${viewSelection === views[1] ? 'bg-white text-black' : 'bg-black text-white'}`}
            onClick={() => handleButtonClick(views[1])}
          >
            Shopping
          </button>
          <button
            className={`px-4 py-2 rounded ${viewSelection === views[2] ? 'bg-white text-black' : 'bg-black text-white'}`}
            onClick={() => handleButtonClick(views[2])}
          >
            Food
          </button>
        </div>
        {getCurrentView()}
      </div>
    </div>
  );
}

export default Guide;
