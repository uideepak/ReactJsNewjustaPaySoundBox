import React, { useEffect, useState } from "react";
import { contactLeads } from "../controller/masterController";

export default function AllLeads() {
  const [contactData, setcontactData] = useState([]);

  console.log(contactData, "lll");
  const GetallContact = async () => {
    const data = await contactLeads();
    setcontactData(data?.data.userdata);
    console.log(data, "llllllll");
  };
  useEffect(() => {
    GetallContact();
  }, []);
  return (
    <div>
      <h2 className="text-center">All contacts Leads</h2>
      <table className="text-center w-100 " border={1}>
        <tr className="w-100 border">
          <th>First Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Device</th>
          <th>Message</th>
        </tr>

        {contactData.map((contactData, index) => {
          return (
            <tr className="border">
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
