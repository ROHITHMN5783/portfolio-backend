const mongoose = require("mongoose");
const ContactModel = require("../model/contactmodel");

const sendcontact = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    console.log(name, email, phone, "name");
    if (!name || !email || !phone) {
      return res.status(401).json({ success: false, msg: "Fill all details" });
    }
    if (phone.length !== 10) {
      return res
        .status(401)
        .json({ success: false, msg: "Phone number should be of 10 digits" });
    }
    const contactnew = new ContactModel({ name, email, phone });
    await contactnew.save();
    return res
      .status(200)
      .json({ success: true, msg: "Submitted successfully", data: contactnew });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, msg: "Not submitted", error: error.msg });
  }
};
module.exports = sendcontact;
