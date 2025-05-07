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
          <div className="border-2 border-gray-400 p-6 mb-6 rounded-2xl">
            <h1 className="font-bold text-2xl">{blog.question}</h1>
            <h1 className="font-regular text-xl">{blog.answer}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
