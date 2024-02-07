const Projectmodel = require("../model/Projectmodel");

const Newproject = async (req, res) => {
  try {
    const { title, imageurl, demolink, githublink } = req.body;
    if (!title) {
      return res.status(401).json({ success: false, msg: "Title not given" });
    }
    if (!imageurl) {
      return res
        .status(401)
        .json({ success: false, msg: "Imageurl not given" });
    }
    if (!demolink || !githublink) {
      return res.status(401).json({
        success: false,
        msg: "Demolink not there and github link not there",
      });
    }
    const projectnew = await Projectmodel({
      title,
      imageurl,
      demolink,
      githublink,
    });
    await projectnew.save();
    return res
      .status(200)
      .json({ msg: "Project created successfully", data: projectnew });
  } catch (error) {
    return res.status(400).json({
      success: false,
      msg: "Project could not be created",
      error: error.msg,
    });
  }
};
const getprojects = async (req, res) => {
  try {
    const projectfind = await Projectmodel.find({});
    if (!projectfind) {
      return res
        .status(401)
        .json({ success: false, msg: "Could not find project" });
    }
    return res.status(200).json({
      success: true,
      msg: "Projects found successfully",
      data: projectfind,
    });
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, msg: "Could not get projects" });
  }
};
const updateprojects = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, imageurl, githublink, demolink } = req.body;
    console.log(id);
    if (!title || !imageurl || !githublink || !demolink) {
      return res
        .status(401)
        .json({ success: false, msg: "Please input all fields" });
    }
    const findproject = await Projectmodel.findOneAndUpdate(
      { _id: id },
      { title, imageurl, githublink, demolink },
      { new: true }
    );
    if (!findproject) {
      return res.status(401).json({ success: false, msg: "Project not found" });
    }
    await findproject.save();
    return res.status(200).json({
      success: true,
      msg: "Project updated successfully",
      data: findproject,
    });
  } catch (error) {
    return res
      .status(401)
      .json({ msg: "Internal Server Error", success: false });
  }
};
const Deleteproject = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteproj = await Projectmodel.findOneAndDelete({ _id: id });
    return res.status(401).json({
      success: false,
      msg: "Project deleted successfully",
      data: deleteproj,
    });
  } catch (error) {
    return res
      .status(401)
      .josn({ msg: "Project could not be deleted", error: error.msg });
  }
};
module.exports = {
  Newproject,
  Deleteproject,
  getprojects,
  updateprojects,
};
