import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from './Link';

   const IQuery=()=>{
       const [stateData,setStateData]=useState(null)
       const [searchValue, setSearchValue]=useState('');
       const [query,setQuery]=useState('hooks')

       const getDataFromAPI=async()=>{
           try{
            const data=await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`)
            //  const data=await axios.get(`https://hn.algolia.com/api/v1/search?query=hooks`)
            //  setStateData(data.data.hits);
             console.log(data.data.hits);
              }catch(e){
                console.log(e,"api fetch error")
               }
                    }
useEffect(()=>{
  getDataFromAPI()
},[]);

const getSearchValue=()=>{
  console.log(e.target.value)
}

const getNewQuery=()=>{
  setQuery(searchValue)
  console.log(query);
}

   return (
     <div>
       <input type="text" onChange={(e)=>{getSearchValue(e)}}/>
       <input type="button" value="search"/>
       {stateData==null?(<div>loading</div>):(stateData.map(link=>{
         return(
       <Link 
       key={link.objectID}
       when={link.created_at}
       title={link.title}
       url={link.url}
       auth={link.author} />
       )}))}
     </div>
   )  
}
export default IQuery;