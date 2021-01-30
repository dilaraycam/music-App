import React, { useRef, useState, useEffect } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import songs from "../data/songs.json";
import SongCard from "./Songs/SongCard";
import "./Search.css";

function Search(props) {
  const location = useLocation();
  const history = useHistory();
  const params = new URLSearchParams(location.search);
  const q = params.get("q");
  console.log(q);

  //const [inputValue, setInputValue] = useState(q ? q : "")
  const inputValue = useRef();
  const [searchResult, setSearchResult] = useState([]);

  console.log("location");

  useEffect(() => {
    if (q) {
      inputValue.current.value = q;
      const songsResults = songs.results
        .filter(item => item.title.toLowerCase().includes(q.toLowerCase()))
        .map(item => (
          <li key={item.id} class="list-group-item" id="listCol">
            <Link to={`/allsongs/${item.id}`} />
            <SongCard
              id={item.id}
              title={item.title}
              detail={item.detail}
              url={item.url}
            />
          </li>
        ));
      setSearchResult(songsResults);
    }
    //console.log(productResults)

    console.log(new Date());
  }, [q]);

  function handleForm(event) {
    event.preventDefault();
    history.push(`/search?q=${inputValue.current.value}`);
  }

  return (
    <>
  
        <div className="col-sm-6 offset-sm-3">
          <form className="mt-4" onSubmit={handleForm}>
            <div className="form-group" id="f">
              <input
                name="q"
                type="text"
                className="form-control form-control-lg"
                id="search"
                placeholder="senorita,dance monkey..."
                //value={inputValue}
                ref={inputValue}
              />
            </div>

            <button
              id="b"
              type="submit"
              class="btn btn-outline-warning btn-lg"
              onClick={handleForm}
            >
              Search
            </button>
          </form>
        </div>
     
      <div className="row">
        <div className="col-sm-6 offset-5" id="songAlign">
          <ul class="list-group mt-3">
          {searchResult}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Search;
