import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col bg-black">
      {/* Section 1 */}
      <div className="h-full min-h-screen flex items-center justify-center content-center bg-cover bg-blend-soft-light bg-no-repeat" style={{ backgroundImage: `url('/bg4.jpg')` }}>
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
          <div className="text-4xl mb-20 text-center font-bold text-black font-berkshireswash">Save The Date<br /><span className="text-5xl">28th December 2023</span></div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="h-full min-h-screen flex contrast-125 justify-center bg-[length:200px_200px] bg-blend-soft-light bg-repeat-round" style={{ backgroundImage: `url('/tile1.jpg')` }}>
        <div className="backdrop-blur-xs backdrop-sepia backdrop-opacity-75 backdrop-brightness-50 min-h-full w-full flex justify-center items-center">
          <div className="bg-black/25 border-2 p-5 border-white decoration-1 text-7xl font-greatvibes m-auto drop-shadow font-bold text-white text-center text-wrap hover:scale-125 ease-in-out duration-500 ">Clara<br />and<br />Suvadeep</div>
        </div>
      </div>
      <div className="h-full min-h-screen p-10 flex flex-col justify-center content-center items-center text-white font-berkshireswash">
        <div className="w-1/2 flex flex-col justify-center content-center text-center">
          <div className="text-4xl mb-4">The Story</div>
          <div className="text-xl">
            Clara is from Kassel, Germany 🇩🇪 She grew up there and went on to pursue a degree in pharmacy at Frankfurt.
            In her final year in 2017, she went to University of Florida at Gainesville in Florida USA, for an internship. That is where she met Suvadeep.
            <br /><br />
            Suvadeep is from New Delhi, India 🇮🇳 He was born in Calcutta and grew up in New Delhi. He lived in various cities in India and in the US. During his time at the University of Florida,
            working on his Computer Science degree, he met Clara at one of the college's weekly events called Gator Nights.
            <br /><br />
            Following the initial meeting, they met over the remaining time of her internship in Florida in various events like the college salsa dance society, parties and kept talking once she returned. Shortly after, Suvadeep
            visited her in Germany followed by Clara's visits to the US.
            Eventually Clara decided to pursue her PhD in Pancreatic Cancer Research in the US and the rest is history.
          </div>
          <div className="flex flex-row w-full my-4 items-center justify-center">
            <img
              src="https://scwedassets.blob.core.windows.net/placesassets/ger.png"
              alt="The German Flag"
              className="h-28 w-44 border-t border-l border-b border-slate-400"
            />
            <img
              src="https://scwedassets.blob.core.windows.net/placesassets/ind.png"
              alt="The German Flag"
              className="h-28 w-44 border-t border-r border-b border-slate-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}