exports.getUser = (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Hi from the get user controller",
  });
};
