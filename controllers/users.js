const User = require("../models/users");

const UserSignUp = async (req, resp) => {
  let users = new User(req.body);
  let result = await users.save();
  result = result.toObject();
  delete result.password;
  delete result.confirmPassword;
  resp.send(result);
};

const UserLogin = async (req, resp) => {
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
};

const AdminSignUp = async (req, resp) => {
  let users = new User(req.body);
  let result = await users.save();
  result = result.toObject();
  delete result.password;
  delete result.confirmPassword;
  resp.send(result);
};

const AdminLogin = async (req, resp) => {
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
};

const StoreSignUp = async (req, resp) => {
  let users = new User(req.body);
  let result = await users.save();
  result = result.toObject();
  delete result.password;
  delete result.confirmPassword;
  resp.send(result);
};

const StoreLogin = async (req, resp) => {
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
};

module.exports = {
  UserSignUp,
  UserLogin,
  AdminLogin,
  AdminSignUp,
  StoreLogin,
  StoreSignUp,
};
