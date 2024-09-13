import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Sidebar } from "../index";
import * as XLSX from "xlsx";
function FemaleStudent() {
  const [users, setUsers] = useState([]);
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(users); // Convert users data to sheet
    const wb = XLSX.utils.book_new(); // Create a new workbook
    XLSX.utils.book_append_sheet(wb, ws, "Users"); // Append your sheet to the workbook
    XLSX.writeFile(wb, "Female_Student.xlsx"); // Write the file
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/users/getUsers"
        );
        console.log("Response data: ", response.data); // Log the response data
        setUsers(response.data.filter((user) => user.Gender === "Female"));
      } catch (error) {
        console.log("Error fetching users: ", error); // Log any errors
      }
    })();
  }, []);

  // useEffect(() => {
  //   console.log("Users After: ", users);
  // }, [users]);

  const handleView = async (user) => {
    window.location.href = `/users/previewUser/${user._id}`;
  };

  const handleUpdate = async (user) => {
    window.location.href = `/users/updateUser/${user._id}`;

    try {
      const response = await axios.put(
        `http://localhost:3000/users/updateUser/${user._id}`
      );
      console.log(response.data);
      // Refresh the users list after updating
      setUsers(users.map((u) => (u._id === user._id ? response.data : u)));
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-green-500">
          <p className="text-5xl text-white">Student Directory</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                <th className="px-4 py-3">First Name</th>
                <th className="px-4 py-3">Middle Name</th>
                <th className="px-4 py-3">Last Name</th>
                <th className="px-4 py-3">Phone Number</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Gender</th>

                <th className="px-4 py-3">Primary Seva</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y">
              {console.log(users)}
              {users.map((user) => (
                <tr key={user._id} className="text-gray-700">
                  <td className="px-4 py-3">{user.FirstName}</td>
                  <td className="px-4 py-3">{user.MiddleName}</td>
                  <td className="px-4 py-3">{user.LastName}</td>
                  <td className="px-4 py-3">{user.PhoneNumber}</td>
                  <td className="px-4 py-3">{user.Email}</td>
                  <td className="px-4 py-3">{user.Gender}</td>
                  <td className="px-4 py-3">{user.PrimarySeva}</td>
                  <td className="px-4 py-3 flex justify-between">
                    <button
                      type="button"
                      className="text-sm font-semibold text-blue-500 px-2 py-1"
                      onClick={() => handleView(user)}
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="text-sm font-semibold text-yellow-500 px-2 py-1"
                      onClick={() => handleUpdate(user)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto">
          <div className="mb-4 flex justify-start">
            <button
              onClick={exportToExcel}
              className="w-1/6 mt-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Export to Excel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FemaleStudent;
