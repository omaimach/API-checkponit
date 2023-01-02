 
import axios from 'axios';
import React, { useState } from 'react'


const Liste = () => {
     const [text, setText] = useState("")
     const [liste, setListe] = useState([])
     const [Loading, setLoading] = useState(true)
     const options = {
        method: 'GET',
        url: 'https://calorieninjas.p.rapidapi.com/v1/nutrition',
        params: {query: text},
        headers: {
          'X-RapidAPI-Key': '718955a253msh7b2af3caf5cf31ap1bb4b0jsn7eda15232a16',
          'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
        }
      };
      const handleSubmit =(e)=>{
        e.preventDefault();
        const fetchData = async() => {
            try{
            
            const res = await axios.request(options)
            console.log(res.data)
            setListe(res.data.items)
            setLoading(false)
            }catch (error) {
                console.error(error)
            }
        }
        fetchData()
        setText("")
      }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <button> search </button>
        </form>
        <br />
       
            {
                
                Loading? <h3> Loading ... </h3>
                :
                <div>
                    {liste.map(el=>
                    <div style={{border:"2px solid red"}}>
                        <h2> {el.name}</h2>
                        <h2> {el.calories}  </h2>
                        <h2> {el.carbohydrates_total_g}</h2>
                        <h2> {el.cholesterol_mg}</h2>
                        <h2> {el.sodium_mg}</h2>
                      
                        </div>

                    )}
                </div>
            }
        
    </div>
  )
}

export default Liste