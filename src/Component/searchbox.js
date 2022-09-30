import "../App.css";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import MediaCard from "./Card";

function SearchBox(prop) {
  let specification = [
    {
      value: {
        mobile: {
          name: "mobiles",
        },
        motorcycle: {
          name: "motorcycle",
        },
        garment: {
          name: "garment",
        },
        car: {
          name: "car",
        },
      },
    },
  ];

  let [inputValue, setInputValue] = useState("");
  // const [list,setList] = useState([]);

  const getInputValue = (event) => {
    setInputValue(event.target.value);
  };

  let a = specification[0].value;

  let b = Object.values(a);

  let item = b.map((e, i) => {
    return e.name;
  });
  console.log(item.includes(inputValue), "sadasda");

  // let check = item.filter((e, i) => {
  //   console.log(e.includes(inputValue), "inputValue");
  //   if (e.includes(inputValue) && inputValue !== "") {
  //     return { e };
  //   } else {
  //     return false;
  //   }
  // });
  let check =
    inputValue.length > 0
      ? prop.data
          .map((e) => {
            return {
              name: e.name,
              category: e.category,
            };
          })
          .filter((item, index) => {
            return Object.values(item).filter((val) => {
              return (
                typeof val == "string" &&
                val?.toLowerCase()?.includes(inputValue.toLowerCase())
              );
            }).length;
          })
      : [];
  console.log("checked", check);

  // setList([...list,inputValue])

  // const item = list.map((e,i)=>{
  //   if(e.includes=="m"){
  //       console.log(e)
  //   }

  // })

  const setInput = (e, j) => {
    j.preventDefault();
    prop.onSearch(
      prop.data.filter(
        (item) => check.filter((ch) => ch.name == item.name).length
      )
    );
    setInputValue(e.name);
  };

  return (
    <div>
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <form id="form-div" class="d-flex" role="search">
            <div className="d-block">
              <div className="d-flex">
                <input
                  id="input"
                  value={inputValue}
                  onChange={getInputValue}
                  placeholder="Find Cars,Mobile Phones and more..."
                  style={{
                    width: "450px",
                    padding: "10px 10px",
                    height: "40px",
                    border: "2px solid black",
                  }}
                  className={prop.className}
                  class="form-control me-2"
                  type="search"
                  aria-label="Search"
                />

                <span
                  id="span"
                  style={{ backgroundColor: "#002f34", color: "white" }}
                >
                  <SearchIcon />
                </span>
              </div>
              <div className="d-flex but">
                {check.map((e, i) => {
                  return (
                    <div>
                      {" "}
                      <button
                        onClick={(j) => {
                          setInput(e, j);
                        }}
                        key={i}
                      >
                        {e.name}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default SearchBox;
