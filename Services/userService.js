const { v4: uuidv4 } = require("uuid");
let users = [];

const listUser = async () => {
  return users;
};

const addUsers = async (user) => {
  //   const userId = users.length + 1;
  //   const newUser = Object.assign({}, user, { id: userId });
  const newUser = { ...user, id: uuidv4() };
  users.push(newUser);
  return newUser;
};

const deleteUser = async (userId) => {
  //   const index = users.findIndex((user) => user.id === userId);
  console.log("usesssIDD", userId);
  let index = -1;
  for (let key in users) {
    console.log(users[key].id, userId);
    if (users[key].id == userId) {
      index = key;
      // Sử dụng filter để lọc ra danh sách người dùng mới, loại bỏ người dùng có ID tương ứng với biến index.
      users = users.filter((user) => user.id != users[key].id);
      return users;
    }
  }
};

module.exports = {
  listUser,
  addUsers,
  deleteUser,
};

// module.exports = {
//   getUsers: function () {
//     return new Promise(function (resolve, reject) {
//       resolve(users);
//     });
//   },
//   addUser: function (user) {
//     return new Promise(function (resolve, reject) {
//       const userId = users.length + 1;
//       const newUser = Object.assign({}, user, { id: userId });
//       users.push(newUser);
//       resolve(newUser);
//     });
//   },
//   deleteUser: function (userId) {
//     return new Promise(function (resolve, reject) {
//       const index = users.findIndex((user) => user.id === userId);
//       if (index !== -1) {
//         users.splice(index, 1);
//         resolve();
//       } else {
//         reject(new Error("User not found"));
//       }
//     });
//   },
// };
