import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL =
  "https://8000-mariolah-djangojams-al7u0axu9a5.ws-us93.gitpod.io/api/";

function ArtistForm() {
  const [artist, setArtist] = useState([]);
  const [formState, setFormState] = useState({
    name: "",
    biography: "",
    img: "",
  });

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://8000-mariolah-djangojams-al7u0axu9a5.ws-us93.gitpod.io/api/artist/",
        formState
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />

        <label htmlFor="Biography">biography:</label>
        <input
          type="text"
          name="biography"
          value={formState.biography}
          onChange={handleChange}
        />

        {/* <label htmlFor="img">img:</label>
      <textarea name="img" value={formState.img} onChange={handleChange} />
      <label htmlFor="image_url">Image URL:</label>
      <input
        type="text"
        name="img"
        value={formState.img}
        onChange={handleChange}
      /> */}

        <button type="submit">Submit</button>
      </form>

      {artist.map((a) => (
        <h3>
          {a.name}:
          <br />
          {a.biography}
          <br />
          {a.img}
        </h3>
      ))}
    </>
  );
}
export default ArtistForm;
