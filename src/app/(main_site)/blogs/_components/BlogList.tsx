"use client";
import { useEffect, useState } from "react";

import BlogCard from "./BlogCard";
import { Skeleton } from "@mantine/core";
import moment from "moment";

const BlogList = () => {
  const [blogList, setBlogList] = useState<BlogModel[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setFetching(true);
      const allBlogs = await Promise.all(
        ["alsongarbuja", "utsab043", "sunilpdl", "bipinad"].map((username) =>
          fetch(`https://dev.to/api/articles?username=${username}`).then(
            (res) => res.json()
          )
        )
      )
        .then((data: BlogModel[]) => data)
        .catch((err) => {
          console.error(err);
        });

      if (!allBlogs) return;
      // const res = await fetch(
      //   "https://dev.to/api/articles?username=alsongarbuja"
      // );
      // const blogs = await res.json();

      setBlogList(
        allBlogs
          .flat()
          .sort((a, b) => moment(b.created_at).diff(moment(a.created_at)))
      );
    };

    fetchBlogs().finally(() => setFetching(false));
  }, []);

  return (
    <section className="grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2 lg:grid-cols-3">
      {fetching ? (
        <Skeleton className="col-span-3" height="200px" width="100%" />
      ) : (
        <>
          {blogList.length > 0 ? (
            <>
              {blogList.map((blog, i) => (
                <BlogCard {...blog} index={i} key={i} />
              ))}
            </>
          ) : (
            <p className="col-span-4 mt-12 font-medium text-center text-gray-600">
              No blogs to read at this moment
            </p>
          )}
        </>
      )}
    </section>
  );
};

export default BlogList;
