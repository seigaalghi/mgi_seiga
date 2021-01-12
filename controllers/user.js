const User = require("../models/User");
const Joi = require("joi");

exports.getUsers = async (req, res) => {
  try {
    let users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

exports.addUser = async (req, res) => {
  const { body } = req;
  try {
    const schema = Joi.object({
      nama: Joi.string().required(),
      hobi: Joi.string().required(),
      alamat: Joi.string().required(),
      nomor_telp: Joi.number().required(),
    });

    const { error } = schema.validate({ ...body }, { abortEarly: false });

    if (error) {
      return res.status(400).json({
        status: "failed",
        message: error.details[0].message,
        errors: error.details.map((detail) => detail.message),
      });
    }

    const user = new User({
      ...body,
    });

    const response = await user.save();

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

exports.editUser = async (req, res) => {
  const { body } = req;
  try {
    const schema = Joi.object({
      nama: Joi.string(),
      hobi: Joi.string(),
      alamat: Joi.string(),
      nomor_telp: Joi.number(),
    });

    const { error } = schema.validate({ ...body }, { abortEarly: false });

    if (error) {
      return res.status(400).json({
        status: "failed",
        message: error.details[0].message,
        errors: error.details.map((detail) => detail.message),
      });
    }

    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...body } },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({
        status: "failed",
        message: "User not found",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findOneAndRemove({ _id: req.params.id });

    if (!user)
      res.status(404).json({
        status: "failed",
        message: "User not found",
      });

    return res.status(200).json({
      status: "success",
      message: "User deleted successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};
