const express = require("express");
const router = express.Router();
const userRouter = require("./userRoute");

const defaultRoutes = [
  {
    path: "/users",
    route: userRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
