import React from 'react';

function Event() {
  return (
    <div className="h-full min-h-screen font-berkshireswash flex flex-col justify-center bg-fixed bg-cover" style={{ backgroundImage: `url('/bg7.jpg')` }}>

      <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
        <h1 className="text-6xl text-center font-bold text-black">Events</h1>
        <div className="border-l-2 mt-10 flex-col justify-center items-center">
          <div className="flex-auto w-1/2 text-center border-2 mx-auto my-10 rounded-md bg-white text-2xl p-2">Day-1 (27th December 2023)</div>
          {/* Card 1*/}
          <div className="transform transition cursor-pointer hover:-translate-y-2 hover:drop-shadow-xl ml-10 relative flex items-center px-6 py-4 border-2 bg-blue-900 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            <div className="w-5 h-5 bg-blue-700 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
            <div className="w-10 h-1 bg-blue-700 absolute -left-10 z-0"></div>

            {/* Content*/}
            <div className="flex-auto">
              <h1 className="text-lg">(12-3pm)</h1>
              <h1 className="text-xl underline underline-offset-2 decoration-1 font-bold">Eiburo Bhaat</h1>
              <h3>Groom is presented with a 10 course meal on 'silver'ware.</h3>
            </div>
          </div>

          {/* Card 2*/}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 border-2 bg-orange-900 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            
            <div className="w-5 h-5 bg-orange-700 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
            <div className="w-10 h-1 bg-orange-700 absolute -left-10 z-0"></div>

            {/* Content*/}
            <div className="flex-auto">
              <h1 className="text-lg">(3-5pm)</h1>
              <h1 className="text-xl underline underline-offset-2 decoration-1 font-bold">Mehendi</h1>
              <h3>Having ethnic patterns drawn on your hands by a professional, using a henna paste. Once the henna is washed off, a beautiful pattern is revealed.</h3>
            </div>
          </div>

          {/* Card3*/}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 border-2 bg-green-900 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            
            <div className="w-5 h-5 bg-green-700 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
            <div className="w-10 h-1 bg-green-700 absolute -left-10 z-0"></div>

            {/* Content*/}
            <div className="flex-auto">
              <h1 className="text-lg">(7-9pm)</h1>
              <h1 className="text-xl underline underline-offset-2 decoration-1 font-bold">Sangeet</h1>
              <h3>Music and Dance.</h3>
            </div>
          </div>

          <div className="flex-auto w-1/2 text-center border-2 mx-auto my-10 rounded-md bg-white text-2xl p-2">Day-2 (28th December 2023)</div>
          {/* Card4*/}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 border-2 bg-yellow-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            
            <div className="w-5 h-5 bg-yellow-500 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
            <div className="w-10 h-1 bg-yellow-500 absolute -left-10 z-0"></div>

            {/* Content*/}
            <div className="flex-auto">
              <h1 className="text-lg">(11am-1pm)</h1>
              <h1 className="text-xl underline underline-offset-2 decoration-1 font-bold">Haldi</h1>
              <h3>Lathering the bride and the groom with turmeric paste as a way of blessing them.</h3>
            </div>
          </div>

          {/* Card5 */}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 border-2 bg-rose-900 text-white rounded mb-10 flex-col md:flex-row">
            
            <div className="w-5 h-5 bg-rose-700 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0"></div>
            <div className="w-10 h-1 bg-rose-700 absolute -left-10 z-0"></div>
            {/* Content*/}
            <div className="flex-auto">
              <h1 className="text-lg">(5-8:30pm)</h1>
              <h1 className="text-xl underline underline-offset-2 decoration-1 font-bold">The Bengali Wedding</h1>
              <h3>
                <ul className='list-disc'>
                  <li>
                    Totto - Send gifts to the Bride's abode. Garments in specific.
                  </li>
                  <li>
                    Bor Jatri - Groom goes for the wedding to the Bride's house.
                  </li>
                  <li>
                    Bor Boron - Special welcome of the groom. Gifts are given to the bride. Jewelry in specific.
                  </li>
                  <li>
                    Saanth Paak - The Bride is carried on a plint to the wedding stage.
                  </li>
                  <li>
                    Subho Drishti - The first eye contact between the bride and the groom parting beetel leaves.
                  </li>
                  <li>
                    Mala Badal - Exchanging wedding garlands.
                  </li>
                  <li>
                    Yagya - Prayers to to Gods in front of a fire praying for health and happiness. 
                  </li>
                  <li>
                    Saptapadi - Seven steps near the yagya fire while being showered with flower petals. The core of the ritual that facilitates the wedding.
                  </li>
                  <li>
                    Sindoor - Application of red powder on the forehead of the bride by the groom.
                  </li>
                </ul>
              </h3>
            </div>
          </div>


          {/* Card6*/}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 border-2 bg-violet-900 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            
            <div className="w-5 h-5 bg-violet-700 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
            <div className="w-10 h-1 bg-violet-700 absolute -left-10 z-0"></div>

            {/* Content*/}
            <div className="flex-auto">
              <h1 className="text-lg">(8-11:30pm)</h1>
              <h1 className="text-xl underline underline-offset-2 decoration-1 font-bold">Reception</h1>
              <h3>Dinner and a general party celebrating the wedding.</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Event;
