import { useState } from "react";
import { useEffect } from "react";




function App() {
  async function fetchData(){
    const res = await fetch("/gerichte/all");
    const data = await res.json();
    setGerichte(data)
    setLoading(false)
  }
  const [loading,setLoading] = useState(true)
  const [gerichte, setGerichte] = useState();
  useEffect(() =>{
      fetchData();
  },[])
  if(loading) return <div>Is Loading...</div>
  return (
    <>
    <div className="bg-red-200">Eure Fitnessapp</div>
    <form onSubmit={fetchData}>
  
    <input type="text" placeholder="gericht">
    </input>
    <input type="text" placeholder="calories">
    </input>
    <button
        type="submit"
        onClick={fetchData}
        className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
       Add
        </button>
        </form>
        {
          gerichte.map((el, index) =>{
            console.log(el)
            return (
              <>
              <div className="flex flex-row">

             
              <div key={index}>{el.Gericht}</div>
            <div>
              {el.calories}
            </div>
            </div>
            </>)
           
          })
        }
    </>
    
  )
}

export default App
