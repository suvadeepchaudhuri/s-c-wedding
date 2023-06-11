import React from 'react';
import Places from './places.json';

function Guide() {
  return (
    <div className="p-4">
      <h2 className="text-2xl text-center font-bold mb-4">Places to Visit</h2>

      <h3 className="text-2xl font-bold mb-4">Kolkata, West Bengal</h3>
      <div className="grid grid-cols-1 gap-4">
        {Places.places.map((card, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg p-4 mx-8 shadow-md hover:shadow-lg"
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
  );
}

export default Guide;
