"use client";
import { useState } from "react";

const ContactOne = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    // Using FormSubmit - Simple form submission service, no signup required
    // It sends form data directly to the specified email address
    const formSubmitEndpoint = "https://formsubmit.co/mbsmtrust@gmail.com";

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("address", formData.address);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("_subject", "New Contact Form Submission from MBSM Trust Website");
      formDataToSend.append("_captcha", "false"); // Disable captcha for simplicity
      formDataToSend.append("_template", "table"); // Use table template for better formatting

      const response = await fetch(formSubmitEndpoint, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ email: "", phone: "", address: "", message: "" });
        setTimeout(() => setSubmitStatus(""), 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='contact'>
      <div className='container'>
        <div className='row justify-content-end'>
          <div className='col-12 col-md-10 col-xl-7'>
            <div className='contact__content'>
              <div
                className='section__content'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>
                  <i className='icon-donation' />
                  Where there's less, we give our best!
                </span>
                <h2 className='title-animation_inner'>
                  Send Us a <span>Message</span>!
                </h2>
              </div>
              <div
                className='contact__form cta'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <form onSubmit={handleSubmit}>
                  <div className='input-group'>
                    <div className='input-single'>
                      <input
                        type='email'
                        name='email'
                        id='contactEmail'
                        placeholder='your email...'
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <i className='fa-solid fa-paper-plane' />
                    </div>
                    <div className='input-single'>
                      <input
                        type='text'
                        name='phone'
                        id='contactNumber'
                        placeholder='your phone...'
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                      <i className='fa-solid fa-phone' />
                    </div>
                  </div>
                  <div className='input-single'>
                    <input
                      type='text'
                      name='address'
                      id='contactAddress'
                      placeholder='your address...'
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                    <i className='fa-solid fa-location-dot' />
                  </div>
                  <div className='input-single alter-input'>
                    <textarea
                      name='message'
                      id='contactMessage'
                      placeholder='your message...'
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                    <i className='fa-solid fa-envelope' />
                  </div>
                  {submitStatus === "success" && (
                    <div style={{ color: "#4CAF50", marginBottom: "20px", fontSize: "14px" }}>
                      Message sent successfully!
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div style={{ color: "#f44336", marginBottom: "20px", fontSize: "14px" }}>
                      Failed to send message. Please try again.
                    </div>
                  )}
                  <div className='form-cta'>
                    <button
                      type='submit'
                      aria-label='submit message'
                      title='submit message'
                      className='btn--primary'
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Get A Quote"}{" "}
                      <i className='fa-solid fa-arrow-right' />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='contact-bg'>
        <img
          src='assets/images/contact/contact-bg.png'
          alt='Image_inner'
          className='parallax-image'
        />
      </div>
      <div
        className='shape-left'
        data-aos='fade-down'
        data-aos-duration={1000}
        data-aos-delay={300}
      >
        <img
          src='assets/images/cta/shape-left.png'
          alt='Image_inner'
          className='base-img'
        />
      </div>
    </section>
  );
};

export default ContactOne;
