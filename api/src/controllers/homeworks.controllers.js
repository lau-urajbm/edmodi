const { Homework } = require("../db");
async function createHomework(req, res) {
  const { name, date, description, links, profid, groupId } = req.body;

  try {
    let newHomework = await Homework.create(
      {
        name,
        date,
        description,
        links,
       profid,
        groupId,
      },
      
    );
    if (newHomework) {
      return res.json({
        message: "created successfully",
        data: newHomework,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "something went wrong",
    });
  }
}

module.exports = {
  createHomework,
};
