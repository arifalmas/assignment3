import React from "react";
import { useDispatch } from "react-redux";
import {
  filterByAuthor,
  filterByCategory,
  filterByRead,
} from "../redux/blogsFilter/actions";

function BlogPost({ blog }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src={blog.img}
          alt={blog.title}
        />
      </div>

      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            <span
              onClick={() => dispatch(filterByCategory(blog.category))}
              className="cursor-pointer inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
            >
              {blog.category}
            </span>
          </p>
          <h3 className="block mt-1">
            <p className="text-xl font-semibold text-gray-900">{blog.title}</p>
          </h3>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full cursor-pointer "
              src={blog.author_img}
              alt={blog.author_name}
              onClick={() => dispatch(filterByAuthor(blog.author_name))}
            />
          </div>
          <div className="ml-3">
            <p
              className=" cursor-pointer  text-sm font-medium text-gray-900 hover:underline"
              onClick={() => dispatch(filterByAuthor(blog.author_name))}
            >
              {blog.author_name}
            </p>
            <div className="cursor-pointer flex space-x-1 text-sm text-gray-500">
              <time dateTime={blog.create_at}>{blog.create_at}</time>
              <span aria-hidden="true">&middot;</span>
              <span onClick={() => dispatch(filterByRead(blog.read_time))}>
                {blog.read_time} min read
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
