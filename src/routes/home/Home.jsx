import React from 'react';
import Countdown from '../../components/Countdown';

export default function Home() {
  return (
    <div className="flex flex-col bg-black">
      {/* Section 1 */}
      <div className="h-full min-h-screen flex items-center justify-center content-center bg-cover bg-blend-soft-light bg-no-repeat" style={{ backgroundImage: `url('https://scwedassets.blob.core.windows.net/siteassets/bg4.jpg')` }}>
        <div className="h-full w-full flex-col items-center justify-center">

          <div className="flex justify-center items-center m-10">
            <div className="w-64 h-78 mx-4 drop-shadow-lg animate-wiggle hover:-translate-y-2">
              <img
                src="https://scwedassets.blob.core.windows.net/siteassets/t.png"
                alt="Picture of a Bengali Groom's wedding hat called Topor(pronounced tow-pour)"
                className="w-full h-full object-contain md:object-scale-down rounded"
              />
            </div>
            <div className="w-64 h-64 mx-4 drop-shadow-lg animate-wiggle">
              <img
                src="https://scwedassets.blob.core.windows.net/siteassets/m.png"
                alt="Picture of a Bengali Bride's crown called Mukut(pronounced moo-koot)"
                className="w-full h-full object-contain md:object-scale-down rounded"
              />
            </div>
          </div>
          <div className="text-4xl mb-4 text-center font-bold text-black font-berkshireswash"><span className="text-5xl max-sm:px-4">28th December 2023</span></div>
          <div className="min-h-16 text-4xl mb-20 text-center font-bold text-black font-berkshireswash"><Countdown/></div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="h-full min-h-screen flex contrast-125 justify-center bg-[length:200px_200px] bg-blend-soft-light bg-repeat-round" style={{ backgroundImage: `url('https://scwedassets.blob.core.windows.net/siteassets/tile1.jpg')` }}>
        <div className="backdrop-blur-xs backdrop-sepia backdrop-opacity-125 backdrop-brightness-50 min-h-full w-full flex justify-center items-center">
          <div className="bg-black/25 border-2 p-5 border-white decoration-1 text-7xl font-greatvibes m-auto drop-shadow font-bold text-white text-center text-wrap hover:scale-125 ease-in-out duration-500 ">Suvadeep<br />and<br />Clara</div>
        </div>
      </div>
      <div className="h-full min-h-screen p-10 flex flex-col justify-center content-center items-center text-white font-berkshireswash">
        <div className="w-1/2 max-sm:w-3/4 flex flex-col justify-center content-center text-center">
          <div className="text-4xl mb-4">The Story</div>
          <div className="text-xl">
            Clara is from Kassel, Germany <img src='https://scwedassets.blob.core.windows.net/siteassets/germany.png' className="h-4 border-y border-slate-800 inline"/> She is currently a researcher who loves traveling, spending time outdoors, swimming in mountain lakes and riding bicycles.
            In 2017, she went to the University of Florida(UF) at Gainesville in USA, for an internship. That's where she met Suvadeep.
            <br /><br />
            Suvadeep was born in Calcutta and grew up in New Delhi, India <img src='https://scwedassets.blob.core.windows.net/siteassets/india.png' className="h-4 inline"/> He likes painting, creating and fixing things, playing various sports and also loves traveling. He has lived in various cities in India and in the US. During his time at UF,
            he met Clara at one of the college's weekly events called Gator Nights.
            <br /><br />
            Following the initial meeting, they met over the remaining time of her internship in Florida at various events like the college salsa dance society, parties and kept talking once she returned. Shortly after, Suvadeep
            visited her in Germany followed by Clara's visits to the US.
            Eventually Clara decided to pursue her PhD in the US and the rest is history.
          </div>
          {/* <div className="flex flex-row w-full my-4 items-center justify-center">
            <img
              src="https://scwedassets.blob.core.windows.net/placesassets/ger.png"
              alt="The German Flag"
              className="h-14 w-22 border-t border-l border-b border-slate-400"
            />
            <img
              src="https://scwedassets.blob.core.windows.net/placesassets/ind.png"
              alt="The Indian Flag"
              className="h-14 w-22 border-t border-r border-b border-slate-400"
            />
          </div> */}
          <div className='brightness-125 max-sm:pt-4'>
            <img
              src="https://scwedassets.blob.core.windows.net/siteassets/Layer-1.svg"
              alt="book end"
              className="w-full h-full object-contain md:object-scale-down rounded contrast-25"
            />
          </div>
        </div>
      </div>
    </div>
  );
}