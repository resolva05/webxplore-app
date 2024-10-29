// const mongoose = require("mongoose");

// const contactSchema = new mongoose.Schema({
//     firstName: { type: String, required: true },
//     lastName: { type: String, required: true },
//     email: { type: String, required: true },
//     phoneNumber: { type: String, required: true },
//     message: { type: String, required: true },
// });
// const Contact = mongoose.model("contactdata", contactSchema);
// module.exports = Contact;

const mongoose = require('mongoose');

const contactDataSchema = new mongoose.Schema({
  name: String,         // For popup form
  firstName: String,    // For contact form
  lastName: String,     // For contact form
  email: { type: String, required: true },  // Common field
  phone: String,        // Common field
  requirements: String, // For popup form
  message: String,      // For contact form
  formType: {           // New field to distinguish between forms
    type: String,
    enum: ['contact', 'popup'],
    required: true
  },
}, { timestamps: true });

const Contact = mongoose.model('ContactData', contactDataSchema);
module.exports = Contact;