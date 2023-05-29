import {useState} from "react";
import axios from "axios";
import {useMutation} from "@tanstack/react-query";
import { log } from "console";



export default function Home() {
    const [data, setData] = useState(null);
    const [inputText, setInputText] = useState("")

    const mutation = useMutation({
        onSuccess: (data) => {
            setData(data.poem)
        },
        mutationFn: (input) => {
            console.log(input)
            return axios.post("http://localhost:5000/generate_poem", input).then(response => response.data)
        }
    })

    const handleChange = (e) => {setInputText(e.target.value)}
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
                 <textarea rows="1" value={inputText} className="caret-pink-600 rounded-bl-2xl rounded-tl-2xl resize-y w-full p-2" onChange={handleChange}/>
                 <button className="bg-white text-sm p-1 ml-0.5 font-bold" onClick={()=>{mutation.mutate({input_text:inputText})}}>{"Generate Poem"}</button>
                 <button className="bg-white rounded-tr-2xl rounded-br-2xl text-sm ml-0.5 p-1 font-bold">{"Generate News"}</button>
             </div>
             <div className="mt-6 text-left bg-black/30 backdrop-opacity-10 rounded-2xl p-4">
                 <h6 className="text-lg font-bold">Generated text:</h6>
                 <p>

                     { mutation.isLoading? "poem loading..." :
                         (
                         ! data ? "No poem yet"
                            :
                                 data
                         )}
                 </p>
             </div>
         </div>
      </>
  )
}