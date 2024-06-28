import React, { useEffect, useState } from "react";
// import Blogbanner from "../../Assets/blog-card.png";
import { blogs } from "../../controller/masterController";
import HTMLReactParser from "html-react-parser/lib/index";

import { SlCalender } from "react-icons/sl";
import { IoMdAlarm } from "react-icons/io";
import { useParams } from "react-router-dom";
import moment from "moment";
import { TbFileDescription } from "react-icons/tb";

export default function Blog() {
  const [blogData, setBlogData] = useState();
  console.log(blogData, "PPPPPPPPPPP");
  const id = useParams();
  console.log(id.blogId, "SSSSSSSSSS");

  const getAllBlogs = async () => {
    const data = await blogs(id?.blogId);
    setBlogData(data?.data?.userBlogs);
    console.log(data.data.userBlogs, "AAAAAAAAAAAAAA");
    console.log(data);
  };

  useEffect(() => {
    getAllBlogs();
  }, []);
  return (
    <div>
      <section>
        <div className="container ">
          <div className="row  ">
            <div className="col-md-12">
              <div className="blog">
                <p className="display-3 text-white fw-bold text-center">Blog</p>
                <p className=" text-white fw-medium text-center">
                  There is now an abundance of readable dummy texts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div class="card border-0 ">
                <img
                  src={`http://192.168.0.247:8000/${blogData?.blog_image}`}
                  alt=""
                  className="w-100  mt-3"
                />
                <div class="card-body ">
                  <div className="box-wrap d-flex gap-3 mb-4">
                    <div className="d-flex align-items-center gap-3">
                      <span>
                        <SlCalender />
                      </span>
                      <span>
                        {moment(blogData?.updatedAt).format("DD-MM-YYYY")}
                      </span>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                      <span>
                        <IoMdAlarm size={20} />
                      </span>
                      <span>{moment().format("LT")}</span>
                    </div>
                  </div>

                  <h5 class="card-title">{blogData?.blog_title}</h5>
                  <p
                    class="card-text"
                    dangerouslySetInnerHTML={{ __html: blogData?.description }}
                  >
                    {/* {console.log("=======================", blogData)} */}
                    {/* {HTMLReactParser(blogData?.description)} */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
