require("dotenv").config();

const axios = require("axios");

const connectDB = require(
  "../config/db"
);

const User = require(
  "../models/User"
);

const seed = async () => {
  try {
    await connectDB();

    await User.deleteMany();

    const response =
      await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

    await User.insertMany(
      response.data
    );

    console.log(
      "Users seeded successfully"
    );

    process.exit();
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
};

seed();