import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  previewUser,
  totalUsers,
  updateUser,
} from "../Controllers/user.controller.js";
import { upload } from "../Middleware/multer.middleware.js";
const router = Router();

router.route("/createUser").post(
  upload.fields([
    {
      name: "Image",
      maxCount: 1,
    },
  ]),
  createUser
);
router.route("/getUsers").get(getUsers);
router.route("/totalUsers").get(totalUsers);
router.route("/previewUser/:id").get(previewUser);
router.route("/updateUser/:id").delete(deleteUser);
router.route("/updateUser/:id").put(updateUser);

export default router;
