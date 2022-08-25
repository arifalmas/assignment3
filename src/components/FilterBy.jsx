import React from "react";
import { useSelector } from "react-redux";
import ClearFilter from "./ClearFilter";
import Tag from "./Tag";

function FilterBy() {
  const blogFilter = useSelector((state) => state.blogFilter);
  console.log(blogFilter);
  return (
    <div className="flex mt-5 p-3 shadow-sm">
      <span className="p-2 text-orange-900">
        <strong>FilterBy:</strong>
      </span>
      {blogFilter.byAuthor.map((author) => (
        <Tag tag={author} by="Author" />
      ))}
      {blogFilter.byCategory.map((byCategory) => (
        <Tag tag={byCategory} by="Category" />
      ))}
      {blogFilter.byRead.map((byRead) => (
        <Tag tag={byRead} by="Read" extra="Min" />
      ))}
      <span className="pl-3">
        {blogFilter.search ? `Search: ${blogFilter.search}` : ""}
      </span>
      <ClearFilter />
    </div>
  );
}

export default FilterBy;
