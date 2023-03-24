import { useEffect } from "react";
import { useState } from "react";
import InfoPerson from "./personInfo";

export const Person = () => {
  const url = "https://randomuser.me/api/?results=15";
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const res = data.results;
        setUser(res);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="d-flex flex-column align-items-center p-5">
      <div className="d-flex flex-start justify-content-center ">
        <form className="col-6 text-center mt-2">
          <input
            value={search}
            onChange={handleSearchChange}
            type="text"
            placeholder="search"
            className="form-control form-inline mt-2 "
          />
        </form>
      </div>

      {user
        .filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.name.first.toLowerCase().includes(search);
        })
        .map((item, index) => {
          return <InfoPerson key={index} content={item} gen={item.gender} />;
        })}
    </div>
  );
};