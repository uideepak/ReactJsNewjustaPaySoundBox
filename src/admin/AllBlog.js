import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { allblogList, blogDelete } from "../controller/masterController";
import HTMLReactParser from "html-react-parser";
import moment from "moment";

const basurl = process.env.REACT_APP_API_URL;

export default function AllBlog() {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState([]);

  const getAllBlogs = async () => {
    try {
      const data = await allblogList();
      setBlogData(data?.data?.userBlogs || []);
      console.log(data?.data?.userBlogs, "AAAAAAAAAAAAAA");
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  const handleDelete = async (id) => {
    console.log("====", id);
    try {
      await blogDelete(id);
      getAllBlogs();
    } catch (error) {
      console.error("Error deleting the blog:", error);
    }
  };

  return (
    <div>
      <table className="text-center w-100 p-5" border={1}>
        <thead>
          <tr className="border">
            <th>Blog Title</th>
            <th>Blog Image</th>
            <th>Description</th>
            <th>Action</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {blogData.map((blog, index) => {
            console.log("blogid====>>>", blog);
            // const { blog_image, blog_title, description, _id, updatedAt } =
            //   blog;
            const image = `${basurl}/${blog.blog_image}`;

            return (
              <tr className="border" key={index}>
                <td>{blog.blog_title}</td>
                <td>
                  <img src={image} alt="Blog" style={{ width: "50px" }} />
                </td>
                <td className="text-break">
                  {" "}
                  {HTMLReactParser(blog.description)}
                </td>
                <td>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      onClick={() =>
                        navigate("/admin/editblog", {
                          state: { blogData: blog },
                        })
                      }
                      type="button"
                      className="btn btn-primary"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleDelete(blog._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
                <td>{moment(blog.updatedAt).format("DD-MM-YYYY")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
