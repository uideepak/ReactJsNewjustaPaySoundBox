import React from "react";
import { useEffect, useState } from "react";
import { allblogList } from "../../admin/../controller/masterController";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

const basurl = process.env.REACT_APP_API_URL;

export default function CardBlog() {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState([]);

  const getAllBlogs = async () => {
    const data = await allblogList();
    setBlogData(data?.data?.userBlogs);
    // toast.success(data?.data?.message);

    console.log(data.data.userBlogs, "AAAAAAAAAAAAAA");
  };
  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          {blogData.map((blogData, index) => {
            const { blog_image } = blogData;
            const image = `${basurl}/${blog_image}`;
            return (
              <div className="col-md-4">
                <div class="card  ctm_card short">
                  <img src={image} class="card-img-top w-100  " alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{blogData?.blog_title}</h5>
                    <p
                      class="card-text ctm-description  text-break
"
                    >
                      {blogData?.description}
                    </p>
                    <a href={`/blog/${blogData?._id}`} class="btn btn-primary ">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
