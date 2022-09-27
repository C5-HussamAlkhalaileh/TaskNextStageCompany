const connection = require("../model/db");

// create cats
const createCats = (req, res) => {
  const { name, addres } = req.body;
  const query = "INSERT INTO rest_list (Name,Bread,Description) values (?,?,?)";
  const data = [name, addres];

  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        sucsess: false,
        err: err,
      });
    }

    res.status(200).json({
      sucsess: true,
      message: "sucsess create cats",
      result: result,
    });
  });
};

module.exports = { createResturants};
