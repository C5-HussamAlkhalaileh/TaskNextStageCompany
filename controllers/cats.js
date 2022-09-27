const connection = require("../model/db");

// create cats
const createCats = (req, res) => {
  const { Name, Bread, Description } = req.body;
  const query = "INSERT INTO CAT (Name,Bread,Description) values (?,?,?)";
  const data = [Name, Bread, Description];

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

module.exports = { createCats };
