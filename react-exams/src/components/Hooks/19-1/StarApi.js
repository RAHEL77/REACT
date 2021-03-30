import React, {useState,useEffect} from 'react';
import axios from 'axios';

 function StarApi() {
    const [details, setDetails] = useState([]);

    useEffect(() => {
      const response = async () => {
        const data = await axios.get("https://swapi.dev/api/films/2/");
        setDetails(data.data);
      }
      return response();
    },[])
  
    return (
    <div>
      <h2>Movie Name : {details.title}</h2>
      <p>Movie director : {details.director}</p>
    </div>
  )
}
export default StarApi;