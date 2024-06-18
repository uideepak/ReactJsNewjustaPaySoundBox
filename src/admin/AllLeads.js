import React, { useEffect, useState } from "react";
import { contactLeads } from "../controller/masterController";

export default function AllLeads() {
  const [contactData, setcontactData] = useState([]);

  console.log(contactData, "lll");
  const GetallContact = async () => {
    const data = await contactLeads();
    setcontactData(data?.data.userdata)
    console.log(data, "llllllll");
  };
  useEffect(() => {
    GetallContact();
  }, []);
  return (
    <div>
      <h1>All contacts Leads</h1>
      <table className="text-center w-100 " border={1}>
        <tr className="w-100 border">
          <th>first_Name</th>
          <th>email</th>
          <th>phone</th>
          <th>device</th>
          <th>message</th>
        </tr>

       {contactData.map((contactData, index) => {
         
          return (
            <tr className="border" >
              <td>{contactData?.first_Name}</td>
             <td>{contactData?.email}</td>
             <td>{contactData?.phone}</td>
             <td>{contactData?.device}</td>
             <td>{contactData?.message}</td>


            </tr>
          );
        })}

      </table>
    </div>
  );
}
