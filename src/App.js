//imports
import React,{useState} from 'react'
import './App.css';
import axios from 'axios';

function App() {
  //variables
  const [keys,setKeys]=useState("");
  const [data,setData]=useState({
    symbol: "",
  });

//functions

//submit functions
  function submit(e){
    e.preventDefault();
    const symbol=data.symbol;
    const url="https://cloud.iexapis.com/stable/stock/"+symbol+"/company/quote?token=pk_7b5d7f3300d343af9d1fd122c3a77e82";
    axios.get(url)
    .then(res=>{
      setKeys(res.data)
    })
    
}
//handle function
function handle(e)
{
  const newdata ={...data}
  newdata[e.target.id]=e.target.value
  setData(newdata)
  console.log(newdata)
}

//content stores initial content
 let content = null;
 content=(<div>
  <div>
    <form onSubmit={(e)=>submit(e)}>
      <label>
        Symbol :
      </label>
      <input onChange={(e)=>handle(e)} type="text" id="symbol" placeholde="Symbol"name="symbol" value={data.symbol}>
      </input>
      <button type="submit">Check</button>
    </form>
 </div>
  </div>);
  
  if(keys)
  {
    content=(<div>
      
      <div>
        <form onSubmit={(e)=>submit(e)}>
        <label>
        Symbol :
      </label>
        <input onChange={(e)=>handle(e)} type="text" id="symbol" placeholde="Symbol"name="symbol" value={data.symbol}>
          </input>
          <button type="submit">Check</button>
        </form>
     </div>
     <div>
        <h1>Company Name : {keys.companyName}</h1>
        <h1>website : {keys.website}</h1>
        <h1>Description :</h1> <p>{keys.description}</p>
        <h1>CEO : {keys.CEO}</h1>
        <h1>sector : {keys.sector}</h1>
      </div>


      </div>
      )
      
  }
 
    return(
      <><div>
        {content}
      </div>
        
     </>
  );
  
   
 }

export default App;
