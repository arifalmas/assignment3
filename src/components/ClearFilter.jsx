import React from "react";
import { useDispatch } from "react-redux";
import { clearFilter } from "../redux/blogsFilter/actions";

function ClearFilter() {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(clearFilter());
      }}
      className="bg-red-500 py-2 flex justify-end px-3 rounded text-white uppercase  mr-5 ml-auto"
    >
      Clear Filter
    </button>
  );
}

export default ClearFilter;
