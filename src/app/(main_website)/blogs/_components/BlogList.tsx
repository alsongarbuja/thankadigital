import { useEffect, useState } from "react";

import BlogCard from "./BlogCard";
import { Skeleton } from "@mantine/core";

const BlogList = () => {
  const [blogList, setBlogList] = useState<BlogModel[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setFetching(true);
      const res = await fetch("/api/admin/blog");
      const blogs = await res.json();
      setBlogList(blogs.blogs);
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
