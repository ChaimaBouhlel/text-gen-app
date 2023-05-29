const text ="The leaves are falling down so fast\n" +
    "Autumn winds so cold, it can't last\n" +
    "\n" +
    "The trees are changing colors bright\n" +
    "Red, orange, yellow, what a sight\n" +
    "\n" +
    "Pumpkins sitting in the fields so round\n" +
    "Cornstalks standing up high, abound\n" +
    "\n" +
    "The smell of apple cider in the air\n" +
    "Halloween costumes, people prepare\n" +
    "\n" +
    "Thanksgiving turkey, stuffing and pie\n" +
    "Family gatherings, don't be shy\n" +
    "\n" +
    "As autumn comes, it's time for change\n" +
    "Embrace it all, it's quite strange\n" +
    "\n" +
    "The chill in the air, the crunch underfoot\n" +
    "The autumn season, full of soot."
export default function Home() {
  return (
      <>
         <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center pt-32 w-screen h-screen px-[15%] lg:px-[25%]">
             <div className="mb-12">
                 <h1 className="text-3xl font-bold text-white text-6xl mb-6">
                     The modern Shakespeare
                 </h1>
                 <p className="text-white">
                     Write an entire poem or a news article in less than a minute!
                 </p>
             </div>
             <div className="flex flex-row shadow-2xl">
                 <textarea rows="1" className="caret-pink-600 rounded-bl-2xl rounded-tl-2xl resize-y w-full p-2"/>
                 <button className="bg-white text-sm p-1 ml-0.5 font-bold">{"Generate Poem"}</button>
                 <button className="bg-white rounded-tr-2xl rounded-br-2xl text-sm ml-0.5 p-1 font-bold">{"Generate News"}</button>
             </div>
             <div className="mt-6 text-left bg-black/30 backdrop-opacity-10 rounded-2xl p-4">
                 <h6 className="text-lg font-bold">Generated text:</h6>
                 <p>
                     {text}
                 </p>
             </div>
         </div>
      </>
  )
}