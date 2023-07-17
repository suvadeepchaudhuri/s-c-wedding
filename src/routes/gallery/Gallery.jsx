import React, { useEffect } from 'react';

const myimages = () => {
  let imagen = [];
  for (let index = 0; index <= 54; index++) {
    imagen.push(`https://scwedassets.blob.core.windows.net/pictures/image${index}.jpg`);
  }
  return imagen;
};

function Gallery() {

  useEffect(() => {
    myimages().forEach((url) => {
      const image = new Image();
      image.src = url;
    });
  }, []);

  return (
    <div className="bg-black p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {myimages().map((image, index) => (
          <img
            key={index}
            src={image}
            className={`rounded-lg border border-black object-cover w-full h-full xl:hover:scale-125 ease-in-out duration-100`}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
