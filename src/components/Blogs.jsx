import React from "react";
import BlogPost from "./BlogPost";
import { useSelector } from "react-redux";

function Blogs() {
  const blogs = useSelector((state) => state.blogs);
  const blogFilter = useSelector((state) => state.blogFilter);

  const filterByAuthor = (blog) => {
    if (blogFilter.byAuthor.length > 0) {
      return blogFilter.byAuthor.includes(blog.author_name);
    }
    return true;
  };

  const filterByCategory = (blog) => {
    if (blogFilter.byCategory.length > 0) {
      return blogFilter.byCategory.includes(blog.category);
    }
    return true;
  };

  const filterByRead = (blog) => {
    if (blogFilter.byRead.length > 0) {
      return blogFilter.byRead.includes(blog.read_time);
    }
    return true;
  };

  const filterBySearch = (blog) => {
    if (blogFilter.search.length > 0) {
      return blog.title.toLowerCase().includes(blogFilter.search.toLowerCase());
    }
    return true;
  };

  return (
    <div className="mt-8 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {blogs
        .filter(filterByAuthor)
        .filter(filterByCategory)
        .filter(filterByRead)
        .filter(filterBySearch)
        .map((blog) => (
          <BlogPost key={blog.id} blog={blog} />
        ))}
    </div>
  );
}

export default Blogs;
