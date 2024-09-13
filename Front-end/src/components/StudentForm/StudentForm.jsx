import React, { useEffect, useState } from "react";
import { Sidebar } from "../index";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function StudentForm() {
  const [formData, setFormData] = useState({
    Image: "",
    FirstName: "",
    LastName: "",
    MiddleName: "",
    PhoneNumber: "",
    Email: "",
    DateOfBirth: "",
    Gender: "",
    CityInIndia: "",
    CityInCanada: "",
    Address: "",
    PrimarySeva: "",
    SecondarySeva: "",
    Mis: "",
    Satsangi: "",
    Skills: [],
    Status: "",
  });
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      let newSkills;
      if (checked) {
        newSkills = [...formData.Skills, value];
      } else {
        newSkills = formData.Skills.filter((skill) => skill !== value);
      }
      setFormData({ ...formData, Skills: newSkills });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: event.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData(); // Create a FormData object
    for (const key in formData) {
      if (key === "Image") {
        formDataToSend.append(key, formData[key], formData[key].name); // Append the file
      } else {
        formDataToSend.append(key, formData[key]); // Append other form data
      }
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3000/users/createUser",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the content type header for multipart form data
          },
        }
      );
      console.log("Response from Student Form", response.data);
      setLoading(false);
      alert("Student added successfully");
      // Handle navigation or redirection here as needed
    } catch (error) {
      console.error("Error in Student form: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      formData.FirstName.length > 0 &&
      formData.LastName.length > 0 &&
      formData.MiddleName.length > 0 &&
      formData.PhoneNumber.length > 0 &&
      formData.Email.length > 0 &&
      formData.DateOfBirth.length > 0 &&
      formData.Skills.length > 0
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [formData]);
  return (
    <div>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-orange-200">
          <p className="text-5xl text-black">
            {loading ? "Processing" : "Student Form"}
          </p>
        </div>
        <div className="w-full max-w-xl mx-auto pt-3">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="image"
              >
                Upload Profile Picture
              </label>
              <input
                id="image"
                type="file"
                className="form-input mt-1 block w-full"
                name="Image"
                onChange={handleChange}
              />
            </div>
            {/* First Name */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="FirstName"
              >
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="FirstName"
                type="text"
                placeholder="First Name"
                name="FirstName"
                value={formData.FirstName}
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="MiddleName"
                type="text"
                placeholder="Middle Name"
                name="MiddleName"
                value={formData.MiddleName}
                onChange={handleChange}
                required
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="LastName"
                type="text"
                placeholder="Last Name"
                name="LastName"
                value={formData.LastName}
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="DateOfBirth"
                onChange={handleChange}
                value={formData.DateOfBirth}
              />
            </div>
            {/* Phone Number */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="PhoneNumber"
              >
                Phone Number (Please add whatsApp number)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="PhoneNumber"
                type="text"
                placeholder="Phone Number"
                name="PhoneNumber"
                value={formData.PhoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            {/* Email */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Email"
                type="text"
                placeholder="Email Address"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                required
              />
            </div>
            {/* Gender Radio Group */}
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
                  checked={formData.Gender === "Male"}
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
                  checked={formData.Gender === "Female"}
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

            {/* CityInIndia, CityInCanada, Address Text Inputs similar to FirstName */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="CityInIndia"
              >
                City In India
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="CityInIndia"
                type="text"
                placeholder="City In India"
                name="CityInIndia"
                value={formData.CityInIndia}
                onChange={handleChange}
                required
              />
            </div>
            {/* CityInCanada */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="CityInCanada"
              >
                City In Canada
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="CityInCanada"
                type="text"
                placeholder="City In Canada"
                name="CityInCanada"
                value={formData.CityInCanada}
                onChange={handleChange}
                required
              />
            </div>

            {/* Address */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Address"
              >
                Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Address"
                type="text"
                placeholder="Address"
                name="Address"
                value={formData.Address}
                onChange={handleChange}
                required
              />
            </div>

            {/* PrimarySeva Select */}
            <div className="mb-4" hidden>
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
                value={formData.PrimarySeva}
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
                <option value="Mandir - Decoration">Mandir - Decoration</option>
                <option value="Mandir - Book Store">Mandir - Book Store</option>
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

            {/* Secondary Seva Select */}
            <div className="mb-4" hidden>
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
                value={formData.SecondarySeva}
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
                <option value="Mandir - Decoration">Mandir - Decoration</option>
                <option value="Mandir - Book Store">Mandir - Book Store</option>
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

            {/* Mis */}
            <div className="mb-4" hidden>
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
                  checked={formData.Mis === "Yes"}
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
                  checked={formData.Mis === "No"}
                />
                <label htmlFor="mis-no" className="ml-2">
                  No
                </label>
              </div>
            </div>

            {/* Satsangi */}
            <div className="mb-4" hidden>
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
                  checked={formData.Satsangi === "Yes"}
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
                  checked={formData.Satsangi === "No"}
                />
                <label htmlFor="satsangi-no" className="ml-2">
                  No
                </label>
              </div>
            </div>

            {/* Skills - Checkboxes */}
            <fieldset className="mb-4">
              <legend className="text-gray-700 text-sm font-bold mb-2">
                Skills
              </legend>
              <div className="flex flex-wrap">
                <div className="mb-4 mr-4">
                  <input
                    type="checkbox"
                    id="skill-dance"
                    name="Skills"
                    value="Dance"
                    onChange={handleChange}
                    checked={formData.Skills.includes("Dance")}
                    className="form-checkbox h-5 w-5 text-gray-600"
                  />
                  <label
                    htmlFor="skill-dance"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Dance
                  </label>
                </div>
                <div className="mb-4 mr-4">
                  <input
                    type="checkbox"
                    id="skill-acting"
                    name="Skills"
                    value="Acting"
                    onChange={handleChange}
                    checked={formData.Skills.includes("Acting")}
                    className="form-checkbox h-5 w-5 text-gray-600"
                  />
                  <label
                    htmlFor="skill-acting"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Acting
                  </label>
                </div>
                <div className="mb-4 mr-4">
                  <input
                    type="checkbox"
                    id="skill-speech"
                    name="Skills"
                    value="Speech"
                    onChange={handleChange}
                    checked={formData.Skills.includes("Speech")}
                    className="form-checkbox h-5 w-5 text-gray-600"
                  />
                  <label
                    htmlFor="skill-speech"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Speech
                  </label>
                </div>
                {/* Repeat for other skills */}
              </div>
            </fieldset>

            {/* Status - Radio Buttons similar to Gender */}
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
                  checked={formData.Status === "Citizen"}
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
                  checked={formData.Status === "Permanent Resident"}
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
                  checked={formData.Status === "Student Visa"}
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
                  checked={formData.Status === "Work Permit"}
                />
                <label htmlFor="status-work-permit" className="ml-2">
                  Work Permit
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {disable ? "Please fill all details." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StudentForm;
