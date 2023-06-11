import React, { useState } from 'react';

function Gallery() {
  const [expandedImage, setExpandedImage] = useState(null);

  const images = [
    'https://scwedassets.blob.core.windows.net/pictures/IMG_3010.JPG',
    'https://scwedassets.blob.core.windows.net/pictures/IMG_8822.jpg',
    'https://scwedassets.blob.core.windows.net/pictures/IMG_9592.jpg',
    'https://scwedassets.blob.core.windows.net/pictures/IMG_9758.jpg',
    'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg',
    // Add more image URLs here
  ];

  const handleImageClick = (index) => {
    // if (expandedImage === index) {
    //   setExpandedImage(null);
    // } else {
    //   setExpandedImage(index);
    // }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Gallery</h2>

      <div className="grid grid-cols-2 gap-4">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className={`relative overflow-hidden cursor-pointer transition-all duration-300 ${
              expandedImage === index ? 'col-span-2 row-span-2' : ''
            }`}
            onClick={() => handleImageClick(index)}
          >
            <img
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className={`w-full h-auto ${
                expandedImage !== null && expandedImage !== index ? 'opacity-50' : ''
              }`}
            />
            {expandedImage === index && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white">
                <p>Expanded Image {index + 1}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
