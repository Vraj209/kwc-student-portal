import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  Radio,
  RadioGroup,
  Checkbox,
  FormGroup,
  Select,
  MenuItem,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function OldStudentForm() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    MiddleName: "",
    PhoneNumber: "",
    DateOfBirth: "",
    Gender: "",
    CityInIndia: "",
    CityInCanada: "",
    Address: "",
    PrimarySeva: "",
    SecondarySeva: "",
    Mis: "",
    Skills: [],
    Status: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      // If the event type is checkbox, handle multiple selections
      const newSkills = checked
        ? [...formData.Skills, value] // If checkbox is checked, add the skill to the array
        : formData.Skills.filter((skill) => skill !== value); // If checkbox is unchecked, remove the skill from the array

      setFormData({ ...formData, [name]: newSkills });
    } else {
      // For other fields, update the form data as usual
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleDateChange = (date) => {
    setFormData({ ...formData, DateOfBirth: date });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center pt-20 mb-20">
        Student Form
      </h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <TextField
          name="FirstName"
          label="First Name"
          value={formData.FirstName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          name="LastName"
          label="Last Name"
          value={formData.LastName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          name="MiddleName"
          label="Middle Name"
          value={formData.MiddleName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          name="PhoneNumber"
          label="Phone Number"
          value={formData.PhoneNumber}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        {/* <label>Date of Birth</label>
        <input
          
          type="date"
          value={formData.DateOfBirth}
          onChange={handleDateChange}
          
          name="DateOfBirth"
          required
        /> */}

        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            row
            aria-label="gender"
            name="Gender"
            value={formData.Gender}
            onChange={handleChange}
          >
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="Female"
              control={<Radio />}
              label="Female"
            />
          </RadioGroup>
        </FormControl>
        <TextField
          label="City in India"
          value={formData.CityInIndia}
          onChange={handleChange}
          fullWidth
          margin="normal"
          name="CityInIndia"
          required
        />
        <TextField
          label="City in Canada"
          value={formData.CityInCanada}
          onChange={handleChange}
          fullWidth
          margin="normal"
          name="CityInCanada"
          required
        />
        <TextField
          label="Address in Canada"
          value={formData.Address}
          onChange={handleChange}
          fullWidth
          margin="normal"
          name="Address"
          required
        />

        <FormControl fullWidth margin="normal">
          <InputLabel id="primary-seva-label">Primary Seva</InputLabel>
          <Select
            labelId="primary-seva-label"
            id="primary-seva"
            value={formData.PrimarySeva}
            onChange={handleChange}
            name="PrimarySeva"
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="Mandir - Pujari">Mandir - Pujari</MenuItem>
            <MenuItem value="Mandir - Maintenance">
              Mandir - Maintenance
            </MenuItem>
            <MenuItem value="Mandir - Kitchen">Mandir - Kitchen</MenuItem>
            <MenuItem value="Mandir - Sabha Vayvstha">
              Mandir - Sabha Vayvstha
            </MenuItem>
            <MenuItem value="Mandir - Gujarati Teacher">
              Mandir - Gujarati Teacher
            </MenuItem>
            <MenuItem value="Mandir - Audio-Video">
              Mandir - Audio-Video
            </MenuItem>
            <MenuItem value="Mandir - Setup-Windup Kitchen">
              Mandir - Setup-Windup Kitchen
            </MenuItem>
            <MenuItem value="Mandir - Sayona">Mandir - Sayona</MenuItem>
            <MenuItem value="Mandir - Decoration">Mandir - Decoration</MenuItem>
            <MenuItem value="Mandir - Book Store">Mandir - Book Store</MenuItem>
            <MenuItem value="Student - Volunteer Coordinator">
              Student - Volunteer Coordinator
            </MenuItem>
            <MenuItem value="Student - Outbound Activity">
              Student - Outbound Activity
            </MenuItem>
            <MenuItem value="Student - Kitchen">Student - Kitchen</MenuItem>
            <MenuItem value="Student - Flyer-Design">
              Student - Flyer-Design
            </MenuItem>
            <MenuItem value="Student - Audio-Video-Photography">
              Student - Audio-Video-Photography
            </MenuItem>
            <MenuItem value="Student - Accommodation">
              Student - Accommodation
            </MenuItem>
            <MenuItem value="Student - Decoration">
              Student - Decoration
            </MenuItem>
            <MenuItem value="Student - PR">Student - PR</MenuItem>
            <MenuItem value="Student - Network Admin">
              Student - Network Admin
            </MenuItem>
            <MenuItem value="Student - Database Admin">
              Student - Database Admin
            </MenuItem>
            <MenuItem value="Student - Sampark Karyakar">
              Student - Sampark Karyakar
            </MenuItem>
            <MenuItem value="Student - Ride">Student - Ride</MenuItem>
          </Select>
        </FormControl>

        {/* Secondary Seva */}
        <FormControl fullWidth margin="normal" hidden>
          <InputLabel id="secondary-seva-label">Secondary Seva</InputLabel>
          <Select
            labelId="secondary-seva-label"
            id="secondary-seva"
            value={formData.SecondarySeva}
            onChange={handleChange}
            name="SecondarySeva"
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="Mandir - Pujari">Mandir - Pujari</MenuItem>
            <MenuItem value="Mandir - Maintenance">
              Mandir - Maintenance
            </MenuItem>
            <MenuItem value="Mandir - Kitchen">Mandir - Kitchen</MenuItem>
            <MenuItem value="Mandir - Sabha Vayvstha">
              Mandir - Sabha Vayvstha
            </MenuItem>
            <MenuItem value="Mandir - Gujarati Teacher">
              Mandir - Gujarati Teacher
            </MenuItem>
            <MenuItem value="Mandir - Audio-Video">
              Mandir - Audio-Video
            </MenuItem>
            <MenuItem value="Mandir - Setup-Windup Kitchen">
              Mandir - Setup-Windup Kitchen
            </MenuItem>
            <MenuItem value="Mandir - Sayona">Mandir - Sayona</MenuItem>
            <MenuItem value="Mandir - Decoration">Mandir - Decoration</MenuItem>
            <MenuItem value="Mandir - Book Store">Mandir - Book Store</MenuItem>
            <MenuItem value="Student - Volunteer Coordinator">
              Student - Volunteer Coordinator
            </MenuItem>
            <MenuItem value="Student - Outbound Activity">
              Student - Outbound Activity
            </MenuItem>
            <MenuItem value="Student - Kitchen">Student - Kitchen</MenuItem>
            <MenuItem value="Student - Flyer-Design">
              Student - Flyer-Design
            </MenuItem>
            <MenuItem value="Student - Audio-Video-Photography">
              Student - Audio-Video-Photography
            </MenuItem>
            <MenuItem value="Student - Accommodation">
              Student - Accommodation
            </MenuItem>
            <MenuItem value="Student - Decoration">
              Student - Decoration
            </MenuItem>
            <MenuItem value="Student - PR">Student - PR</MenuItem>
            <MenuItem value="Student - Network Admin">
              Student - Network Admin
            </MenuItem>
            <MenuItem value="Student - Database Admin">
              Student - Database Admin
            </MenuItem>
            <MenuItem value="Student - Sampark Karyakar">
              Student - Sampark Karyakar
            </MenuItem>
            <MenuItem value="Student - Ride">Student - Ride</MenuItem>
          </Select>
        </FormControl>
        {/* MIS */}
        <div>
          <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend">MIS</FormLabel>
            <RadioGroup
              row
              aria-label="mis"
              name="Mis"
              value={formData.Mis}
              onChange={handleChange}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel
                value="No"
                control={<Radio />}
                label="No"
                defaultChecked
              />
            </RadioGroup>
          </FormControl>
        </div>
        {/* Skills */}
        <div>
          <FormControl margin="normal">
            <FormLabel component="legend">Skills</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Dance"
                name="Skills"
                value="Dance"
                onChange={handleChange}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Speech"
                name="Skills"
                value="Speech"
                onChange={handleChange}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Acting"
                name="Skills"
                value="Acting"
                onChange={handleChange}
              />

              {/* Add more skills */}
            </FormGroup>
          </FormControl>
        </div>
        {/* Status */}
        <div>
          <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend">Status</FormLabel>
            <RadioGroup
              aria-label="status"
              name="Status"
              value={formData.Status}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Citizen"
                control={<Radio />}
                label="Citizen"
              />
              <FormControlLabel
                value="Permanent Resident"
                control={<Radio />}
                label="Permanent Resident"
              />
              <FormControlLabel
                value="Student Visa"
                control={<Radio />}
                label="Student Visa"
              />
              <FormControlLabel
                value="Work Permit"
                control={<Radio />}
                label="Work Permit"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default OldStudentForm;
