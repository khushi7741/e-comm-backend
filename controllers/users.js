const User = require("../models/users");

const UserSignUp = async (req, resp) => {
  try {
    let users = new User(req.body);
    let result = await users.save();
    result = result.toObject();
    delete result.password;
    delete result.confirmPassword;
    resp.send(result);
  } catch (error) {
    console.log(error);
  }
};

const UserLogin = async (req, resp) => {
  try {
    console.log(req.body);
    if (req.body.email && req.body.password) {
      let user = await User.findOne(req.body)
        .select("-password")
        .select("-confirmPassword");
      if (user) {
        resp.send(user);
      } else {
        resp.send({ result: "No User Found" });
      }
    } else {
      resp.send({ result: "No User Found" });
    }
  } catch (error) {
    console.log(error);
  }
};

const AdminSignUp = async (req, resp) => {
  try {
    let users = new User(req.body);
    let result = await users.save();
    result = result.toObject();
    delete result.password;
    delete result.confirmPassword;
    resp.send(result);
  } catch (error) {
    console.log(error);
  }
};

const AdminLogin = async (req, resp) => {
  try {
    console.log(req.body);
    if (req.body.email && req.body.password) {
      let user = await User.findOne(req.body)
        .select("-password")
        .select("-confirmPassword");
      if (user) {
        resp.send(user);
      } else {
        resp.send({ result: "No User Found" });
      }
    } else {
      resp.send({ result: "No User Found" });
    }
  } catch (error) {
    console.log(error);
  }
};

const StoreSignUp = async (req, resp) => {
  try {
    let users = new User(req.body);
    let result = await users.save();
    result = result.toObject();
    delete result.password;
    delete result.confirmPassword;
    resp.send(result);
  } catch (error) {
    console.log(error);
  }
};

const StoreLogin = async (req, resp) => {
  try {
    console.log(req.body);
    if (req.body.email && req.body.password) {
      let user = await User.findOne(req.body)
        .select("-password")
        .select("-confirmPassword");
      if (user) {
        resp.send(user);
      } else {
        resp.send({ result: "No User Found" });
      }
    } else {
      resp.send({ result: "No User Found" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  UserSignUp,
  UserLogin,
  AdminLogin,
  AdminSignUp,
  StoreLogin,
  StoreSignUp,
};
