import React from "react";
import BlogHeader from "../components/BlogHeader";
import Blogs from "../components/Blogs";
import FilterBy from "../components/FilterBy";

function blog() {
  return (
    <section className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <BlogHeader />

        {/* <!-- card grid  --> */}
        <FilterBy />

        <Blogs />
      </div>
    </section>
  );
}

export default blog;
