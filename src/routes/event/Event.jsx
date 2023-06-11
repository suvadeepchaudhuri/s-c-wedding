import React from 'react';

function Event() {
  return (
    <div>

      <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
        <h1 className="text-3xl text-center font-bold text-blue-500">Events</h1>
        <div className="border-l-2 mt-10">
          <div className="flex-auto w-full text-center p-5">Day-1 (27th December 2023)</div>
          {/* Card 1*/}
          <div className="transform transition cursor-pointer hover:-translate-y-2 hover:drop-shadow-xl ml-10 relative flex items-center px-6 py-4 border-2 text-black rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          
            <div className="w-5 h-5 bg-gray-300 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
            <div className="w-10 h-1 bg-gray-300 absolute -left-10 z-0"></div>

            {/* Content*/}
            <div className="flex-auto">
              <h1 className="text-lg">5pm</h1>
              <h1 className="text-xl font-bold">Sangeet</h1>
              <h3>Singing and Dancing</h3>
            </div>
          </div>

          {/* Card 2*/}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            
            <div className="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
            <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

            {/* Content*/}
            <div className="flex-auto">
              <h1 className="text-lg">Day 1</h1>
              <h1 className="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
              <h3>Classroom</h3>
            </div>
          </div>

          {/* Card3*/}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            
            <div className="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
            <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

            {/* Content*/}
            <div className="flex-auto">
              <h1 className="text-lg">Day 1</h1>
              <h1 className="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
              <h3>Classroom</h3>
            </div>
          </div>

          {/* Card4*/}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-purple-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            
            <div className="w-5 h-5 bg-purple-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
            <div className="w-10 h-1 bg-purple-300 absolute -left-10 z-0"></div>

            {/* Content*/}
            <div className="flex-auto">
              <h1 className="text-lg">Day 1</h1>
              <h1 className="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
              <h3>Classroom</h3>
            </div>
          </div>

          {/* Card5 */}
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-yellow-600 text-white rounded mb-10 flex-col md:flex-row">
            
            <div className="w-5 h-5 bg-yellow-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0"></div>
            <div className="w-10 h-1 bg-yellow-300 absolute -left-10 z-0"></div>
            {/* Content*/}
            <div className="flex-auto">
              <h1 className="text-lg">Day 1</h1>
              <h1 className="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
              <h3>Classroom</h3>
            </div>
          </div>
        </div>
        
      </div>

      <section className="mt-4 text-center">Build with ❤️</section>
    </div>
  );
}

export default Event;
