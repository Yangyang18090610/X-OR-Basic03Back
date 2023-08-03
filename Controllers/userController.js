// const User = require("../Models/usermodels");
// const addUser = async (req, res) => {
//   let user = req.body;
//   let newUser = await User.create(user);
//   return res.status(201).json({ data: newUser });
// };
// const getUser = async (req, res) => {
//   let user = await User.find({});
//   return res.status(200).json({ data: user });
// };

// const deleteUser = async (req, res) => {
//   await User.findByIdAndDelete(req.params.id);
//   return res.status(204).json({ message: " Bạn xóa thành công " });
// };
// module.exports = { addUser, getUser, deleteUser };
const useragent = require("useragent");
const userService = require("../Services/userService");

const getUsers = async (req, res) => {
  userService
    .listUser()
    .then(function (users) {
      res.json(users);
    })
    .catch(function (err) {
      console.log(err);
      res.status(500).send("Internal server error");
    });
};
const addUser = async (req, res) => {
  const userAgentString = req.headers["user-agent"];

  const userAgent = useragent.parse(userAgentString);
  console.log(userAgent);
  const browserName = userAgent.toAgent(); // lấy tên trinhf duyệt
  console.log("Tên :", browserName);
  const now = Date.now();
  const user = {
    browser: getEdge(userAgent.source)
      ? getEdge(userAgent.source)
      : browserName,
    createAt: now,
  };
  userService
    .addUsers(user)
    .then(function (newUser) {
      res.json(newUser);
    })
    .catch(function (err) {
      console.log(err);
      res.status(500).send("Internal server error");
    });
};
const deleteUser = async (req, res) => {
  const userId = req.params.id;
  console.log("ID", userId);
  try {
    await userService.deleteUser(userId).then((response) => {
      console.log(response);
      return res.status(200).json(response);
    });
  } catch (error) {
    return res.status(500).json({ messege: "Xóa không thành công" });
  }
};
function getEdge(source) {
  // Split the user agent string by spaces
  const userAgentParts = source.split(" ");

  // Find the part that starts with "Edg/"
  const edgePart = userAgentParts.find((part) => part.startsWith("Edg"));
  return edgePart;
}

module.exports = { addUser, getUsers, deleteUser };
