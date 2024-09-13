import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Sidebar } from "../index";

function StudentPreview() {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/users/previewUser/${id}`
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user: ", error);
      }
    })();
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="flex  md:flex-row h-screen bg-gray-100 ">
      <div className="w-64">
        <Sidebar />
      </div>
      <div className="flex-grow flex justify-center items-center ">
        <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg overflow-hidden md:flex">
          <div className="w-full md:w-1/2 xl:w-1/3">
            <img
              src={user.Image}
              alt="Profile"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="w-full md:w-1/2 xl:w-2/3 p-4 md:p-8">
            <h2 className="text-4xl md:text-4xl font-bold text-gray-800">{`${user.FirstName} ${user.MiddleName} ${user.LastName}`}</h2>
            <div className="mt-4">
              <div className="text-gray-600">
                <p>
                  <strong>Email:</strong> {user.Email}
                </p>
                <p>
                  <strong>Phone Number:</strong> {user.PhoneNumber}
                </p>
                <p>
                  <strong>Date of Birth:</strong>{" "}
                  {user.DateOfBirth ? formatDate(user.DateOfBirth) : ""}
                </p>

                <p>
                  <strong>Gender:</strong> {user.Gender}
                </p>
                <p>
                  <strong>City in India:</strong> {user.CityInIndia}
                </p>
                <p>
                  <strong>City in Canada:</strong> {user.CityInCanada}
                </p>
                <p>
                  <strong>Address:</strong> {user.Address}
                </p>
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">
                Seva Preferences
              </h3>
              <p className="text-gray-600">
                <strong>Primary Seva:</strong> {user.PrimarySeva}
              </p>
              <p className="text-gray-600">
                <strong>Secondary Seva:</strong> {user.SecondarySeva}
              </p>
              <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">
                Additional Information
              </h3>
              <p className="text-gray-600">
                <strong>MIS:</strong> {user.Mis}
              </p>
              <p className="text-gray-600">
                <strong>Satsangi:</strong> {user.Satsangi}
              </p>
              <p className="text-gray-600">
                <strong>Status:</strong> {user.Status}
              </p>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Skills
                </h3>
                <div className="flex flex-wrap">
                  {user.Skills &&
                    user.Skills.map((skill, index) => (
                      <span
                        key={index}
                        className="m-1 px-2 py-1 rounded bg-blue-500 text-white text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentPreview;
