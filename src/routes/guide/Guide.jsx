import React from 'react';
import Places from './places.json';

function Guide() {
  return (
    <div className="h-full min-h-screen flex-col justify-center bg-[length:300px_200px] bg-blend-soft-light bg-fixed bg-repeat-round" style={{ backgroundImage: `url('/bg3.jpg')` }}>
      <div className="backdrop-sepia-50 backdrop-brightness-70 h-full w-full">
      <h2 className="text-4xl text-center m-auto text-white font-bold mb-4 bg-black w-1/3">Places to Visit</h2>

      <h3 className="text-2xl text-center font-bold border-2 m-auto rounded-md bg-white w-1/3">Kolkata, West Bengal</h3>
      <div className="w-full flex flex-col items-center justify-center ">
        {Places.places.map((card, index) => (
          <div
            key={index}
            className="bg-white border w-1/2 rounded-lg p-4 m-6 shadow-md hover:shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <h4 className="text-gray-600 mb-2">{card.subtitle}</h4>
                <p className="text-gray-800">{card.paragraph}</p>
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
    </div>
  );
}

export default Guide;
