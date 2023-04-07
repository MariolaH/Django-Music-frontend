import { useEffect, useState, useRef } from "react";
import axios from "axios";

const BASE_URL =
  "https://8000-mariolah-djangojams-al7u0axu9a5.ws-us93.gitpod.io/api/"

function App() {
  const [artist, setArtist] = useState([]);
//   const inputRef = useRef('');
  const nameRef = useRef("");
  const bioRef = useRef("");
  const imgUrlRef = useRef("");

  useEffect(() => {
    const getArtist = async () => {
      let config = {
        url: "/artist/",
        baseURL: BASE_URL,
        method: "get",
      };
      let response = await axios.request(config);
      setArtist(response.data.results);
  
    };
    getArtist();
  }, []);

async function addArtist(){

    let config = {
      url: "/artist/",
      baseURL: BASE_URL,
      method: "post",
      data: {
       
   name: nameRef.current.value,
   biography: bioRef.current.value,
   img: imgUrlRef.current.value,


      },
    };
    let response = await axios.request(config);
    console.log(response);
    setArtist([...artist, response.data]);
    console.log(response.data);
     
    }

  return (
    <div>
      <input type="text" ref={nameRef} />
      <input type="text" ref={bioRef} />
      <input type="text" ref={imgUrlRef} />
  
{/* <button
        onClick={addArtist}
      ></button> */}


  <button
        onClick={() => {
          addArtist();
        }}
      ></button>

      {artist.map((a) => (
        <h3>
          {a.name}:
          <br />
          {a.biography}
          <br />
          {a.img}
        </h3>
      ))}
    </div>
  );
}

export default App;
