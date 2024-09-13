import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Sidebar } from "../index";
import { useNavigate } from "react-router-dom";
function StudentUpdate() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate();
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

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3000/users/updateUser/${id}`, user);
      alert("Student data updated successfully");
    } catch (error) {
      console.error("Error in updating user: ", error);
    }
  };

  const handleDelete = async () => {
    try {
      // console.log("Deleting user with id: ", id);
      await axios.delete(`http://localhost:3000/users/updateUser/${id}`);
      alert("Student data deleted successfully");
      navigate("/student-directory");
    } catch (error) {
      console.error("Error in deleting user: ", error);
    }
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-4 sm:ml-64 w-full">
        <div className="flex items-center justify-center h-48 mb-4 rounded-lg bg-gray-50 dark:bg-yellow-500 shadow-lg">
          <p className="text-5xl text-white font-bold">Edit Student</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Details */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Personal Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="FirstName"
                >
                  First Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
                  id="FirstName"
                  type="text"
                  placeholder="First Name"
                  name="FirstName"
                  value={user.FirstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="MiddleName"
                >
                  Middle Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
                  id="MiddleName"
                  type="text"
                  placeholder="Middle Name"
                  name="MiddleName"
                  value={user.MiddleName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="LastName"
                >
                  Last Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
                  id="LastName"
                  type="text"
                  placeholder="Last Name"
                  name="LastName"
                  value={user.LastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="dob"
                >
                  Date of Birth
                </label>
                <input
                  id="dob"
                  type="date"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
                  name="DateOfBirth"
                  onChange={handleChange}
                  value={user.DateOfBirth}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="PhoneNumber"
                >
                  Phone Number
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
                  id="PhoneNumber"
                  type="text"
                  placeholder="Phone Number"
                  name="PhoneNumber"
                  value={user.PhoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
                  id="Email"
                  type="email"
                  placeholder="Email Address"
                  name="Email"
                  value={user.Email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-6">
                <span className="block text-gray-700 text-sm font-bold mb-2">
                  Gender
                </span>
                <div className="flex items-center mb-4">
                  <input
                    id="gender-male"
                    type="radio"
                    name="Gender"
                    value="Male"
                    onChange={handleChange}
                    checked={user.Gender === "Male"}
                    className="form-radio h-5 w-5 text-gray-600"
                  />
                  <label
                    htmlFor="gender-male"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Male
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="gender-female"
                    type="radio"
                    name="Gender"
                    value="Female"
                    onChange={handleChange}
                    checked={user.Gender === "Female"}
                    className="form-radio h-5 w-5 text-gray-600"
                  />
                  <label
                    htmlFor="gender-female"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Female
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="CityInIndia"
                >
                  City In India
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
                  id="CityInIndia"
                  type="text"
                  placeholder="City In India"
                  name="CityInIndia"
                  value={user.CityInIndia}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="CityInCanada"
                >
                  City In Canada
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
                  id="CityInCanada"
                  type="text"
                  placeholder="City In Canada"
                  name="CityInCanada"
                  value={user.CityInCanada}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Address"
                >
                  Address
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
                  id="Address"
                  type="text"
                  placeholder="Address"
                  name="Address"
                  value={user.Address}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Seva Preferences */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Seva Preferences
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="PrimarySeva"
                >
                  Primary Seva
                </label>
                <select
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  id="PrimarySeva"
                  name="PrimarySeva"
                  value={user.PrimarySeva}
                  onChange={handleChange}
                >
                  {/* Insert <option> elements here */}
                  <option value="">None</option>
                  <option value="Mandir - Pujari">Mandir - Pujari</option>
                  <option value="Mandir - Maintenance">
                    Mandir - Maintenance
                  </option>
                  <option value="Mandir - Kitchen">Mandir - Kitchen</option>
                  <option value="Mandir - Sabha Vayvstha">
                    Mandir - Sabha Vayvstha
                  </option>
                  <option value="Mandir - Gujarati Teacher">
                    Mandir - Gujarati Teacher
                  </option>
                  <option value="Mandir - Audio-Video">
                    Mandir - Audio-Video
                  </option>
                  <option value="Mandir - Setup-Windup Kitchen">
                    Mandir - Setup-Windup Kitchen
                  </option>
                  <option value="Mandir - Shayona">Mandir - Shayona</option>
                  <option value="Mandir - Decoration">
                    Mandir - Decoration
                  </option>
                  <option value="Mandir - Book Store">
                    Mandir - Book Store
                  </option>
                  <option value="Student - Volunteer Coordinator">
                    Student - Volunteer Coordinator
                  </option>
                  <option value="Student - Outbound Activity">
                    Student - Outbound Activity
                  </option>
                  <option value="Student - Kitchen">Student - Kitchen</option>
                  <option value="Student - Flyer-Design">
                    Student - Flyer-Design
                  </option>
                  <option value="Student - Audio-Video-Photography">
                    Student - Audio-Video-Photography
                  </option>
                  <option value="Student - Accommodation">
                    Student - Accommodation
                  </option>
                  <option value="Student - Decoration">
                    Student - Decoration
                  </option>
                  <option value="Student - PR">Student - PR</option>
                  <option value="Student - Network Admin">
                    Student - Network Admin
                  </option>
                  <option value="Student - Database Admin">
                    Student - Database Admin
                  </option>
                  <option value="Student - Sampark Karyakar">
                    Student - Sampark Karyakar
                  </option>
                  <option value="Student - Ride">Student - Ride</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="SecondarySeva"
                >
                  Secondary Seva
                </label>
                <select
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  id="SecondarySeva"
                  name="SecondarySeva"
                  value={user.SecondarySeva}
                  onChange={handleChange}
                >
                  {/* Insert <option> elements here */}
                  <option value="">None</option>
                  <option value="Mandir - Pujari">Mandir - Pujari</option>
                  <option value="Mandir - Maintenance">
                    Mandir - Maintenance
                  </option>
                  <option value="Mandir - Kitchen">Mandir - Kitchen</option>
                  <option value="Mandir - Sabha Vayvstha">
                    Mandir - Sabha Vayvstha
                  </option>
                  <option value="Mandir - Gujarati Teacher">
                    Mandir - Gujarati Teacher
                  </option>
                  <option value="Mandir - Audio-Video">
                    Mandir - Audio-Video
                  </option>
                  <option value="Mandir - Setup-Windup Kitchen">
                    Mandir - Setup-Windup Kitchen
                  </option>
                  <option value="Mandir - Shayona">Mandir - Shayona</option>
                  <option value="Mandir - Decoration">
                    Mandir - Decoration
                  </option>
                  <option value="Mandir - Book Store">
                    Mandir - Book Store
                  </option>
                  <option value="Student - Volunteer Coordinator">
                    Student - Volunteer Coordinator
                  </option>
                  <option value="Student - Outbound Activity">
                    Student - Outbound Activity
                  </option>
                  <option value="Student - Kitchen">Student - Kitchen</option>
                  <option value="Student - Flyer-Design">
                    Student - Flyer-Design
                  </option>
                  <option value="Student - Audio-Video-Photography">
                    Student - Audio-Video-Photography
                  </option>
                  <option value="Student - Accommodation">
                    Student - Accommodation
                  </option>
                  <option value="Student - Decoration">
                    Student - Decoration
                  </option>
                  <option value="Student - PR">Student - PR</option>
                  <option value="Student - Network Admin">
                    Student - Network Admin
                  </option>
                  <option value="Student - Database Admin">
                    Student - Database Admin
                  </option>
                  <option value="Student - Sampark Karyakar">
                    Student - Sampark Karyakar
                  </option>
                  <option value="Student - Ride">Student - Ride</option>
                </select>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mb-6 ">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Additional Information
            </h3>

            <div className="mb-4 ">
              <span className="block text-gray-700 text-sm font-bold mb-2">
                MIS
              </span>
              <div className="flex items-center">
                <input
                  id="mis-yes"
                  type="radio"
                  className="form-radio text-indigo-600"
                  name="Mis"
                  value="Yes"
                  onChange={handleChange}
                  checked={user.Mis === "Yes"}
                />
                <label htmlFor="mis-yes" className="ml-2">
                  Yes
                </label>
              </div>
              <div className="flex items-center mt-2">
                <input
                  id="mis-no"
                  type="radio"
                  className="form-radio text-indigo-600"
                  name="Mis"
                  value="No"
                  onChange={handleChange}
                  checked={user.Mis === "No"}
                />
                <label htmlFor="mis-no" className="ml-2">
                  No
                </label>
              </div>
            </div>
            <div className="mb-4">
              <span className="block text-gray-700 text-sm font-bold mb-2">
                Satsangi
              </span>
              <div className="flex items-center">
                <input
                  id="satsangi-yes"
                  type="radio"
                  className="form-radio text-indigo-600"
                  name="Satsangi"
                  value="Yes"
                  onChange={handleChange}
                  checked={user.Satsangi === "Yes"}
                />
                <label htmlFor="satsangi-yes" className="ml-2">
                  Yes
                </label>
              </div>
              <div className="flex items-center mt-2">
                <input
                  id="satsangi-no"
                  type="radio"
                  className="form-radio text-indigo-600"
                  name="Satsangi"
                  value="No"
                  onChange={handleChange}
                  checked={user.Satsangi === "No"}
                />
                <label htmlFor="satsangi-no" className="ml-2">
                  No
                </label>
              </div>
            </div>
            <div className="mb-4">
              <span className="block text-gray-700 text-sm font-bold mb-2">
                Status
              </span>
              <div className="flex items-center">
                <input
                  id="status-citizen"
                  type="radio"
                  className="form-radio text-indigo-600"
                  name="Status"
                  value="Citizen"
                  onChange={handleChange}
                  checked={user.Status === "Citizen"}
                />
                <label htmlFor="status-citizen" className="ml-2">
                  Citizen
                </label>
              </div>
              <div className="flex items-center mt-2">
                <input
                  id="status-permanent-resident"
                  type="radio"
                  className="form-radio text-indigo-600"
                  name="Status"
                  value="Permanent Resident"
                  onChange={handleChange}
                  checked={user.Status === "Permanent Resident"}
                />
                <label htmlFor="status-permanent-resident" className="ml-2">
                  Permanent Resident
                </label>
              </div>
              <div className="flex items-center mt-2">
                <input
                  id="status-student-visa"
                  type="radio"
                  className="form-radio text-indigo-600"
                  name="Status"
                  value="Student Visa"
                  onChange={handleChange}
                  checked={user.Status === "Student Visa"}
                />
                <label htmlFor="status-student-visa" className="ml-2">
                  Student Visa
                </label>
              </div>
              <div className="flex items-center mt-2">
                <input
                  id="status-work-permit"
                  type="radio"
                  className="form-radio text-indigo-600"
                  name="Status"
                  value="Work Permit"
                  onChange={handleChange}
                  checked={user.Status === "Work Permit"}
                />
                <label htmlFor="status-work-permit" className="ml-2">
                  Work Permit
                </label>
              </div>
            </div>
          </div>
          <div className="flex w-1/6 gap-6">
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50"
            >
              Update
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50"
              onClick={() => handleDelete(user)}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StudentUpdate;
