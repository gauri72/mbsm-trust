"use client";
import { useState } from "react";

const ContactUsInner = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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

    const formSubmitEndpoint = "https://formsubmit.co/mbsmtrust@gmail.com";

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("_subject", "New Contact Form Submission from MBSM Trust Website");
      formDataToSend.append("_captcha", "false");
      formDataToSend.append("_template", "table");

      const response = await fetch(formSubmitEndpoint, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
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
    <section className='contact-main volunteer'>
      <div className='container'>
        <div className='row gutter-40'>
          <div className='col-12 col-xl-6'>
            <div className='contact__content'>
              <div
                className='section__content'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title contact-inner-subtitle'>
                  <i className='icon-donation' /> Get In Touch
                </span>
                <h2 className='title-animation_inner'>Contact Us</h2>
                <p>
                  We welcome your inquiries, feedback, and support. Reach out to us for information about our spiritual services, community programs, or to learn how you can contribute to our humanitarian mission. Your connection with MBSM Trust helps us serve better.
                </p>
              </div>
              <div className='contact-main__inner cta'>
                <div className='contact-main__single'>
                  <div className='thumb'>
                    <i className='fa-solid fa-location-dot' />
                  </div>
                  <div className='content'>
                    <h6>Location</h6>
                    <p>
                      <a
                        href='https://maps.app.goo.gl/xzwdnNpZWCxWuPX48'
                        target='_blank'
                        rel='noreferrer'
                      >
                        F.70, MIDC, Ahilyanagar, 414111
                      </a>
                    </p>
                  </div>
                </div>
                <div className='contact-main__single'>
                  <div className='thumb'>
                    <i className='fa-solid fa-phone' />
                  </div>
                  <div className='content'>
                    <h6>Phone</h6>
                    <p>
                      <a href='tel:+917588797788'>+91 7588797788</a>
                    </p>
                  </div>
                </div>
                <div className='contact-main__single'>
                  <div className='thumb'>
                    <i className='fa-solid fa-envelope' />
                  </div>
                  <div className='content'>
                    <h6>Email</h6>
                    <p>
                      <a href='mailto:mbsmtrust@gmail.com'>mbsmtrust@gmail.com</a>
                    </p>
                  </div>
                </div>
                <div className='contact-main__single'>
                  <div className='thumb'>
                    <i className='fa-solid fa-share-nodes' />
                  </div>
                  <div className='content'>
                    <h6>Social</h6>
                    <div className='social'>
                      <a
                        href='https://wa.me/917588797788'
                        target='_blank'
                        aria-label='contact us on whatsapp'
                        title='whatsapp'
                        rel='noreferrer'
                      >
                        <i className='fa-brands fa-whatsapp' />
                      </a>
                      <a
                        href='https://www.instagram.com/mangal_bhakta_seva_mandal_?igsh=NDVnb3JhendmcmFs'
                        target='_blank'
                        aria-label='follow us on instagram'
                        title='instagram'
                        rel='noreferrer'
                      >
                        <i className='fa-brands fa-instagram' />
                      </a>
                      <a
                        href='https://youtube.com/@mangalbhaktasevamandaltrus2349?si=uVc-1P931b2zX2fH'
                        target='_blank'
                        aria-label='subscribe to our youtube channel'
                        title='youtube'
                        rel='noreferrer'
                      >
                        <i className='fa-brands fa-youtube' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='contact-main__thumb cta'>
                <img src='assets/images/contact-thumb.png' alt='Image_inner' />
              </div>
            </div>
          </div>
          <div className='col-12 col-xl-6'>
            <div
              className='contact__form volunteer__form checkout__form'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              <div className='volunteer__form-content'>
                <h4 className='title-animation_inner'>Fill Up The Form</h4>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
              </div>
              <form onSubmit={handleSubmit} className='cta'>
                <div className='input-single'>
                  <input
                    type='text'
                    name='name'
                    id='fullName'
                    placeholder='Enter Name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <i className='fa-solid fa-user' />
                </div>
                <div className='input-single'>
                  <input
                    type='email'
                    name='email'
                    id='cEmail'
                    placeholder='Enter Email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <i className='fa-solid fa-envelope' />
                </div>
                <div className='input-single'>
                  <input
                    type='text'
                    name='phone'
                    id='phoneNumber'
                    placeholder='Phone Number'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <i className='fa-solid fa-phone' />
                </div>
                <div className='input-single alter-input'>
                  <textarea
                    name='message'
                    id='contactMessage'
                    placeholder='Your Message...'
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <i className='fa-solid fa-comments' />
                </div>
                {submitStatus === "success" && (
                  <div style={{ padding: "15px", marginBottom: "20px", backgroundColor: "#d4edda", color: "#155724", borderRadius: "5px", border: "1px solid #c3e6cb" }}>
                    <i className='fa-solid fa-check-circle' style={{ marginRight: "8px" }} />
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div style={{ padding: "15px", marginBottom: "20px", backgroundColor: "#f8d7da", color: "#721c24", borderRadius: "5px", border: "1px solid #f5c6cb" }}>
                    <i className='fa-solid fa-exclamation-circle' style={{ marginRight: "8px" }} />
                    Sorry, there was an error sending your message. Please try again.
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
                    {isSubmitting ? "Sending..." : "Get A Quote"} <i className='fa-solid fa-arrow-right' />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsInner;
