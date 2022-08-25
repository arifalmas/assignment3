import search from "../media/search.534936ee7d0735f85702a0791b96f0bb.svg";
import React from "react";
import { useDispatch } from "react-redux";
import { filterBySearch } from "../redux/blogsFilter/actions";

const receiveInputValueOnce = (cb, delay = 1000) => {
  let waiting = false;
  let arrgs;

  const timeout = () => {
    if (arrgs == null) {
      waiting = false;
    } else {
      cb(...arrgs);
      arrgs = null;
      setTimeout(timeout, delay);
    }
  };

  return (...args) => {
    if (waiting) {
      arrgs = args;
      return;
    }

    cb(...args);
    waiting = true;
    setTimeout(timeout, delay);
  };
};

function Search() {
  const dispatch = useDispatch();

  const searchHandler = receiveInputValueOnce(
    (e) => dispatch(filterBySearch(e.target.value)),
    1500
  );

  return (
    <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
      <input
        onChange={searchHandler}
        className="outline-none border-none bg-gray-50 h-full w-full mr-2"
        type="search"
        name="search"
        placeholder="Search"
      />
      <img className="inline h-6 cursor-pointer" src={search} alt="Search" />
    </div>
  );
}

export default Search;
