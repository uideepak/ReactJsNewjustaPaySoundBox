import React, { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { allblogList, blogDelete } from "../controller/masterController";

 export const basurl = process.env.REACT_APP_API_URL;


export default function AllBlog() {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState([]);
  console.log(blogData, "SSSSSSSSSS");

  const getAllBlogs = async () => {
    const data = await allblogList();
    setBlogData(data?.data.userBlogs);
    console.log(data.data.userBlogs, "AAAAAAAAAAAAAA");
  };
  useEffect(() => {
    getAllBlogs();
  }, []);

  console.log(blogData, "BBBBBBBBBBBBBBB");

  const handleDelete = async (id) => {
    try {
      await blogDelete(id);
    } catch (error) {
      console.error("Error deleting the blog or fetching blogs:", error);
    }
    getAllBlogs();
  };

  return (
    <div>
      <table className="text-center w-100 " border={1}>
        <tr className="border">
          <th>blog_title</th>
          <th>blog_image</th>
          <th>description</th>
          <th>Acction</th>
        </tr>

        {blogData.map((blogData, index) => {
          const { blog_image } = blogData;
          const image = `${basurl}/${blog_image}`;
          console.log(image);
          return (
            <tr className="border">
              <td>{blogData?.blog_title}</td>
              <td>
                <img src={image} alt="jhjh" className="w-25" />
              </td>
              <td>{blogData?.description}</td>
              <td>
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button
                    onClick={() =>
                      navigate("/admin/editblog", {
                        state: { blogData: blogData },
                      })
                    }
                    type="button"
                    class="btn btn-primary"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => handleDelete(blogData._id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}