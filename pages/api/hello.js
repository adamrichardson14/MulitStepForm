export default (req, res) => {
  const data = req.body;
  console.log(data);
  res.status(200).json(data);
};
