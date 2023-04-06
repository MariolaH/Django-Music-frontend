import { useEffect, useState, useRef } from "react";
import axios from "axios";

const BASE_URL =
  "https://8000-mariolah-djangojams-al7u0axu9a5.ws-us93.gitpod.io/api/"

function App() {
  const [artist, setArtist] = useState([]);
  const inputRef = useRef('');
 

  useEffect(() => {
    const getArtist = async () => {
      let config = {
        url: "/artist/",
        baseURL: BASE_URL,
        method: "get",
      };
      let response = await axios.request(config);
      setArtist(response.data.results);
      console.log(response.data);
    };
    getArtist();
  }, []);

async function addArtist(){

  console.log("button works");
    console.log(inputRef.current.value);
    let config = {
      url: "/artist/",
      baseURL: BASE_URL,
      method: "post",
      data: {
        name: inputRef.current.value,
        // biography: inputRef.current.value,
        // img: inputRef.current.value,
      },
    };
     let response = await axios.request(config);
     console.log(response);
  
}

async function addBio() {
  console.log("button works");
  console.log(inputRef.current.value);
  let config = {
    url: "/artist/",
    baseURL: BASE_URL,
    method: "post",
    data: {
      // name: inputRef.current.value,
      biography: inputRef.current.value,
      // img: inputRef.current.value,
    },
  };
  let response = await axios.request(config);
  console.log(response);
}

async function addImg() {
  console.log("button works");
  console.log(inputRef.current.value);
  let config = {
    url: "/artist/",
    baseURL: BASE_URL,
    method: "post",
    data: {
      // name: inputRef.current.value,
      // biography: inputRef.current.value,
      img: inputRef.current.value,
    },
  };
  let response = await axios.request(config);
  console.log(response);
}

  return (
    <div>
      {/* <input type="text" ref={inputRef} />
      <br />
      <input type="text" ref={inputRef.biography} />
      <br /> */}
      <input type="text" ref={inputRef} />
      <button key={artist.id} onClick={() => { 
          addArtist();
          addBio();
          addImg();
        }}>Input name</button>


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
