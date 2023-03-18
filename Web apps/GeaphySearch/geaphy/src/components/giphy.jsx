import React, { useEffect, useState } from "react";
import axios from "axios";

export const Giphy = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "v9nGHafLm3fYqYTrUevHYP2aiULLDxG3",
        },
      });
      console.log(result);
      setData(result.data.data);
    };
    fetchData();
  }, []);

  const renderGifts = () => {
    return data.map((el) => {
      return (
        <div key={el.id} className="gif">
          <img
            className="p-5 bg-secondary m-2 rounded"
            src={el.images.fixed_height.url}
            alt=""
          />
        </div>
      );
    });
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async event =>{
    event.preventDefault();

        const results = await axios("https://api.giphy.com/v1/gifs/search", {
            params: {
                api_key: "v9nGHafLm3fYqYTrUevHYP2aiULLDxG3",
                q: search
            }
        });

        setData(results.data.data);
  }

  return (
    <div className="d-flex flex-wrap justify-content-center col-12">
      <div className="col-12 bg-primary text-white mb-5">
        <h3 className="d-flex p-2">Giphy App</h3>
      </div>

      <div className="col-10 ">
        <h3>Giphy Search</h3>
        <div>
          <form action="" className="form-inline justifly-content-center m-2">
            <input
              value={search}
              onChange={handleSearchChange}
              type="text"
              placeholder="search"
              className="form-control"
            />
            <button onClick={handleSubmit} type="submit" className="btn btn-primary mx-2">
              
            </button>
          </form>
          {/* <input type="text" className="w-100 border border-primary rounded mb-5 mt-3" /> */}
        </div>
        <div className="d-flex flex-wrap justify-content-between">
          {renderGifts()}
        </div>
      </div>
    </div>
  );
};
