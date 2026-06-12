const User = require("../models/User");

const getUsers = async (req, res) => {
  const users = await User.find();

  res.json(users);
};

const getUser = async (req, res) => {
  const user = await User.findById(
    req.params.id
  );

  res.json(user);
};

const createUser = async (
  req,
  res
) => {
  const user = await User.create(
    req.body
  );

  res.status(201).json(user);
};

const updateUser = async (
  req,
  res
) => {
  const user =
    await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

  res.json(user);
};

const deleteUser = async (
  req,
  res
) => {
  await User.findByIdAndDelete(
    req.params.id
  );

  res.json({
    message:
      "User deleted successfully",
  });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};