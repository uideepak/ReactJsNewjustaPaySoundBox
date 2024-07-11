import React, { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { TiUserAdd } from "react-icons/ti";

import { useNavigate } from "react-router-dom";

import { subuserList, SubUserDel } from "../../controller/masterController";
export default function SubUserList() {
  const navigate = useNavigate();

  const [userList, SetuserList] = useState([]);
  console.log(userList, "**********");
  const subuser = async () => {
    try {
      const data = await subuserList();
      SetuserList(data?.data?.UserList || []);
      console.log(data?.data?.UserList, "AAAAAAAAAAAAAA");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    subuser();
  }, []);

  const handleDelete = async (id) => {
    console.log("====", id);
    try {
      await SubUserDel(id);
      subuser();
    } catch (error) {
      console.error("Error deleting the blog:", error);
    }
  };
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center m-3">
        <div className="text-end">
          <h4 className=" m-2   ">Sub User List</h4>
        </div>

        <Link to="/admin/subuser">
          <button type="button" class="btn btn-success">
            <TiUserAdd />
            Add User
          </button>
        </Link>
      </div>
      <div>
        <table className="w-100">
          <thead>
            <tr className="bg-dark-subtle">
              <th>name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((subuser, index) => {
              // const { name, email, role, phone, id } = subuser;
              return (
                <tr>
                  <td>{subuser.name}</td>
                  <td>{subuser.email}</td>
                  <td>{subuser.phone}</td>
                  <td>{subuser.role}</td>
                  <td>
                    {" "}
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        onClick={() => {
                          navigate("/admin/editsubuser", {
                            state: { userList: subuser },
                          });
                        }}
                        type="button"
                        className="btn btn-primary "
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleDelete(subuser._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
