import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Subblogpage.css";
import subimg from "../../assets/subblog2.png";

const Subblogpage = () => {
  const { title } = useParams(); // Get slug from URL params
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  // useEffect for fetching the post by slug
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/getUsers/${title}`); // Fetch post by slug
        setPost(response.data);
      } catch (err) {
        console.error("Error fetching post:", err);
        setError("Post not found!"); // Error message if post is not found
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [title]); // Dependency array with slug

  // Loading state
  if (loading) {
    return <p className="loading-text">Loading...</p>;
  }

  // Error or post not found
  if (error || !post) {
    return <p className="error-text">{error}</p>; // Show "Post not found!" if there's an error
  }

  // Split content into paragraphs
  const contentParagraphs = post.content.split("\n");

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value.trim(), // Trim whitespace
    }));
  };

  // Validate form data
  const validateForm = () => {
    const errors = {};

    // First Name Validation
    if (!formData.firstName) errors.firstName = "First name is required.";

    // Last Name Validation
    if (!formData.lastName) errors.lastName = "Last name is required.";

    // Phone Number Validation (Basic international format check)
    const phoneRegex = /^[0-9+\-\(\)\s]*$/; // Allow digits, spaces, +, -, and parentheses
    if (!formData.phoneNumber) {
      errors.phoneNumber = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      errors.phoneNumber = "Invalid phone number.";
    }

    // Email Validation (Enhanced regex)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email address.";
    }

    // Message Validation
    if (!formData.message) errors.message = "Message is required.";

    return errors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
    } else {
      setFormErrors({}); // Reset errors
      try {
        // Send data to backend
        const response = await axios.post("http://localhost:5000/submitBlogContact", formData);
        setSubmitStatus({ type: "success", message: response.data.message });

        // Reset the form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          message: "",
        });
      } catch (error) {
        setSubmitStatus({ type: "error", message: "Failed to submit form. Please try again." });
      }
    }
  };

  return (
    <>
      <div className="subblogpage-container">
        <div className="post-card">
          <div className="title-image-container">
            <h1 className="post-title">{post.title}</h1>
            <img src={subimg} alt="" className="subimg" />
          </div>
          <p className="post-description">{post.description}</p>
          <p className="post-date">Published on: {post.date}</p>

          <div className="post-content">
            {contentParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="post-paragraph"
                dangerouslySetInnerHTML={{
                  __html: paragraph.replace(/\n/g, "<br />"), // Ensure new lines are rendered correctly
                }}
              />
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
      </div>
      <div className="contact-form-section">
        <h2>Contact Us</h2>
        <p>
          Have any questions or feedback? Feel free to reach out by filling out the form below. We’ll get back to you as soon as possible.
        </p>

        {/* Display status message */}
        {submitStatus && (
          <div className={`submit-status ${submitStatus.type}`}>
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="form-input"
            />
            {formErrors.firstName && <span className="error-text">{formErrors.firstName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="form-input"
            />
            {formErrors.lastName && <span className="error-text">{formErrors.lastName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="form-input"
            />
            {formErrors.phoneNumber && <span className="error-text">{formErrors.phoneNumber}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
            />
            {formErrors.email && <span className="error-text">{formErrors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="form-input"
              rows="4"
            />
            {formErrors.message && <span className="error-text">{formErrors.message}</span>}
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </>
  );
};

export default Subblogpage;
