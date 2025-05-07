import React, { useEffect, useState } from "react";

const Blog = () => {
  const [blogdata, setblogdata] = useState([]);

  useEffect(() => {
    const blogdata = async () => {
      const res = await fetch("/blog.json");
      const data = await res.json();

      setblogdata(data);
    };

    blogdata();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto mb-20">
      {blogdata.map((blog) => {
        return (
          <div className="flex border-2 border-gray-400 xl:p-6 p-2 mb-6 rounded-2xl drop-shadow-2xl transition-transform duration-300 transform hover:scale-105 shadow-md">
            <div className="avatar mr-4">
              <div className="ring-primary ring-offset-base-100 w-10 h-10 rounded-full ring-2 ring-offset-2">
                <img src={blog.photo} />
              </div>
            </div>

            <div className="xl:space-y-4 space-y-2">
              <h1 className="font-bold text-2xl">{blog.name}</h1>
              <h1 className="font-regular text-xl">{blog.feedback}</h1>
              <p className="font-regular text-base">{blog.time}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
