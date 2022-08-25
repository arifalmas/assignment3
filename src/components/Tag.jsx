import React from "react";
import { useDispatch } from "react-redux";
import {
  filterByAuthor,
  filterByCategory,
  filterByRead,
} from "../redux/blogsFilter/actions";

function Tag({ tag, by, extra }) {
  const dispatch = useDispatch();

  const filterByHandler = () => {
    if (by === "Author") dispatch(filterByAuthor(tag));
    if (by === "Category") dispatch(filterByCategory(tag));
    if (by === "Read") dispatch(filterByRead(tag));
    return;
  };

  return (
    <div
      onClick={filterByHandler}
      className="py-2 rounded drop-shadow px-3 flex text-slate-900 bg-blue-100 ml-2"
    >
      <strong>
        {by}: {tag} {extra}
      </strong>
    </div>
  );
}

export default Tag;
