import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col bg-black">
        <div className="h-full min-h-screen flex items-center justify-center bg-cover bg-blend-soft-light bg-no-repeat" style={{ backgroundImage: `url('/bg4.jpg')` }}>
            <div className="h-full w-full flex-col items-center justify-center">

            <div className="flex justify-center items-center m-10">
              <div className="w-64 h-78 mx-4 drop-shadow-lg animate-wiggle hover:-translate-y-2">
                <img
                  src="/t.png"
                  alt="Picture of a Bengali Groom's wedding hat called Topor(pronounced tow-pour)"
                  className="w-full h-full object-contain md:object-scale-down rounded"
                />
              </div>
              <div className="w-64 h-64 mx-4 drop-shadow-lg animate-wiggle">
                <img
                  src="/m.png"
                  alt="Picture of a Bengali Bride's crown called Mukut(pronounced moo-koot)"
                  className="w-full h-full object-contain md:object-scale-down rounded"
                />
              </div>
            </div>
                <div className="text-4xl mb-20 text-center font-bold text-black font-berkshireswash">Save The Date<br/><span className="text-5xl">28th December 2023</span></div>
            </div>
        </div>
        <div className="h-full min-h-screen flex contrast-125 justify-center bg-[length:200px_200px] bg-blend-soft-light bg-repeat-round" style={{ backgroundImage: `url('/tile1.jpg')` }}>
          <div className="backdrop-blur-xs backdrop-sepia backdrop-opacity-75 backdrop-brightness-50 min-h-full w-full flex justify-center items-center">
            <div className="bg-black/25 border-2 p-5 border-white decoration-1 text-7xl font-greatvibes m-auto drop-shadow font-bold text-white text-center text-wrap hover:scale-125 ease-in-out duration-500 ">Suvadeep<br/>and<br/>Clara</div>
          </div>
          
        </div>
    </div>
  );
}