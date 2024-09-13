import { User } from "../Model/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.services.js";

const createUser = async (req, res) => {
  const maleGroupLink = "https://chat.whatsapp.com/CZzLWYNuLdN8Js2WEs59F6";
  const femaleGroupLink = "https://chat.whatsapp.com/your-female-group-link";

  // const { Image } = req.files;
  try {
    const {
      FirstName,
      LastName,
      MiddleName,
      PhoneNumber,
      Email,
      DateOfBirth,
      Gender,
      CityInIndia,
      CityInCanada,
      Address,
      PrimarySeva,
      SecondarySeva,
      Mis,
      Satsangi,
      Skills,
      Status,
    } = req.body;
    console.log(
      FirstName,
      LastName,
      MiddleName,
      PhoneNumber,
      Email,
      DateOfBirth,
      Gender,
      CityInIndia,
      CityInCanada,
      Address,
      PrimarySeva,
      SecondarySeva,
      Mis,
      Satsangi,
      Skills,
      Status
    );

    try {
      const exitsteduser = await User.findOne({ Email });
      if (exitsteduser) {
        console.log("User already exist");
        return res
          .status(400)
          .json({ message: "User already exist", Status: 400 });
      } else {
        // Upload Image on Cloudinary
        const userImageFile = req.files?.Image; // 'Image' should match the name attribute of the file input field
        console.log("userImageFile", userImageFile);
        if (!userImageFile) {
          console.log("Image is required");
          return res
            .status(400)
            .json({ message: "Image is required", Status: 400 });
        }
        const userImagePath = userImageFile[0]?.path;
        console.log("userImagePath", userImagePath);
        if (!userImagePath) {
          console.log("Image path is not found");
          return res
            .status(400)
            .json({ message: "Image path is not found", Status: 400 });
        }
        const UserImage = await uploadOnCloudinary(userImagePath);
        if (!UserImage) {
          console.log("Image upload failed");
          return res
            .status(400)
            .json({ message: "Image upload failed", Status: 400 });
        }
        console.log("UserImage", UserImage);
        const user = new User({
          Image: UserImage.url,
          FirstName,
          LastName,
          MiddleName,
          PhoneNumber,
          Email,
          DateOfBirth,
          Gender,
          CityInIndia,
          CityInCanada,
          Address,
          PrimarySeva,
          SecondarySeva,
          Mis,
          Satsangi,
          Skills,
          Status,
        });
        const savedUser = await user.save();
        // Choose the WhatsApp group link based on the user's gender
        const whatsappGroupLink =
          Gender === "Male" ? maleGroupLink : femaleGroupLink;

        res.status(200).json({
          message: "User Signup successfully",
          savedUser,
          whatsappGroupLink,
          status: 200,
        });
        console.log("User saved successfully", savedUser);
      }
    } catch (error) {
      console.log("Error while saving data in database", error);
    }
  } catch (error) {
    console.log("Error while getting data", error);
    res.status(500).json({ message: error, Status: 500 });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    // console.log("Users", users);
    return res.status(200).json(users);
  } catch (error) {
    console.log("Error while getting data", error);
    return res.status(500).json({ message: error, Status: 500 });
  }
};

const totalUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({ totalUsers: users.length });
  } catch (error) {
    console.log("Error while getting data", error);
    return res.status(500).json({ message: error, Status: 500 });
  }
};

const previewUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("User not found");
    res.send(user);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const {
    Image,
    FirstName,
    LastName,
    MiddleName,
    PhoneNumber,
    Email,
    DateOfBirth,
    Gender,
    CityInIndia,
    CityInCanada,
    Address,
    PrimarySeva,
    SecondarySeva,
    Mis,
    Satsangi,
    Skills,
    Status,
  } = req.body;

  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).send("User not found");
    if (user) {
      user.Image = Image;
      user.FirstName = FirstName;
      user.LastName = LastName;
      user.MiddleName = MiddleName;
      user.PhoneNumber = PhoneNumber;
      user.Email = Email;
      user.DateOfBirth = DateOfBirth;
      user.Gender = Gender;
      user.CityInIndia = CityInIndia;
      user.CityInCanada = CityInCanada;
      user.Address = Address;
      user.PrimarySeva = PrimarySeva;
      user.SecondarySeva = SecondarySeva;
      user.Mis = Mis;
      user.Satsangi = Satsangi;
      user.Skills = Skills;
      user.Status = Status;
      const updatedUser = await user.save();
      console.log("User updated");
      res.status(200).json({
        message: "User updated successfully",
        updatedUser,
        status: 200,
      });
    }
  } catch (error) {
    res.status(500).send("Server error");
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);
    if (user) {
      res.status(200).json({
        message: "User deleted successfully",
        status: 200,
      });
    } else {
      res.status(404).json({ message: "User not found", status: 404 });
    }
  } catch (error) {
    console.log("Error in deleting product", error);
    res.status(500).json({ message: error, status: 500 });
  }
};
export {
  createUser,
  getUsers,
  totalUsers,
  previewUser,
  updateUser,
  deleteUser,
};
