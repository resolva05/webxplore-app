// import React from 'react'
import maplogo from '../../assets/mapslogo.png'
const Contactus = () => {
  return (
    <>
      {/* <div className="container mx-auto px-4">
        <div className="d-flex flex-column pb-10 pt-12 text-center"style={{marginTop:"20px"}}>
          <h1 className="text-center display-4 font-weight-bold text-dark">
            Love to hear from you
          </h1>
          <p className="mx-auto lead text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            veritatis voluptates neque itaque repudiandae sint, explicabo
            assumenda quam ratione placeat?
          </p>
        </div>

        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h2 className="font-weight-bold text-dark">Contact Us</h2>
              <p className="mt-4 lead text-muted">
                Our friendly team would love to hear from you
              </p>
              <form className="mt-4">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="first_name">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="first_name"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="last_name">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="last_name"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone_number">Phone number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone_number"
                    placeholder="Phone number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    placeholder="Leave us a message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-dark btn-block">
                  Send Message
                </button>
              </form>
            </div>
            <div className="col-lg-6">
            <h2 className="font-weight-bold text-dark">We Are Here! <img src={maplogo} alt="" style={{height:"4vh", marginBottom:"10px"}}/> </h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238541.2190499328!2d77.59692982134875!3d20.904008185835508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a4a67774bc15%3A0x3c7b3f78ca4f9635!2sAmravati%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1726575689670!5m2!1sen!2sin"
                width="600"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{borderRadius:"20px"}}
              ></iframe>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="container mx-auto px-4">
  <div className="d-flex flex-column pb-10 pt-12 text-center" style={{ marginTop: "20px" }}>
    <h1 className="text-center display-4 font-weight-bold text-dark">
      Love to hear from you
    </h1>
    <p className="mx-auto lead text-muted">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?
    </p>
  </div>

  <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <h2 className="font-weight-bold text-dark">Contact Us</h2>
        <p className="mt-4 lead text-muted">
          Our friendly team would love to hear from you
        </p>
        <form className="mt-4">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                className="form-control"
                id="first_name"
                placeholder="First Name"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="last_name"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone_number">Phone number</label>
            <input
              type="tel"
              className="form-control"
              id="phone_number"
              placeholder="Phone number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              placeholder="Leave us a message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-dark btn-block">
            Send Message
          </button>
        </form>
      </div>
      <div className="col-lg-6">
        <h2 className="font-weight-bold text-dark">
          We Are Here! <img src={maplogo} alt="" style={{ height: "4vh", marginBottom: "10px" }} />
        </h2>
        <div className="embed-responsive embed-responsive-16by9" style={{ borderRadius: "20px", overflow: "hidden", marginTop:"10px" }}>
          <iframe
            className="embed-responsive-item"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238541.2190499328!2d77.59692982134875!3d20.904008185835508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a4a67774bc15%3A0x3c7b3f78ca4f9635!2sAmravati%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1726575689670!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ width: "100%", height: "100%" }}
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</div> */}
    <div className="container mx-auto px-4">
  <div className="d-flex flex-column pb-10 pt-12 text-center" style={{ marginTop: "20px" }}>
    <h1 className="text-center display-4 font-weight-bold text-dark">
      Love to hear from you
    </h1>
    <p className="mx-auto lead text-muted">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?
    </p>
  </div>
  <hr className="my-4"></hr>
  <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <h2 className="font-weight-bold text-dark">Contact Us</h2>
        <p className="mt-4 lead text-muted">
          Our friendly team would love to hear from you
        </p>
        <form className="mt-4">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                className="form-control"
                id="first_name"
                placeholder="First Name"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="last_name"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone_number">Phone number</label>
            <input
              type="tel"
              className="form-control"
              id="phone_number"
              placeholder="Phone number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              placeholder="Leave us a message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-dark btn-block">
            Send Message
          </button>
        </form>
      </div>

      {/* Divider for smaller screens */}
      <hr className="d-block d-lg-none" style={{ width: "80%", margin: "20px auto", borderTop: "2px solid #ccc" }} />

      <div className="col-lg-6">
        <h2 className="font-weight-bold text-dark">
          We Are Here! <img src={maplogo} alt="" style={{ height: "4vh", marginBottom: "10px" }} />
        </h2>
        <div className="embed-responsive embed-responsive-16by9" style={{ borderRadius: "20px", overflow: "hidden", marginTop: "10px" }}>
          <iframe
            className="embed-responsive-item"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238541.2190499328!2d77.59692982134875!3d20.904008185835508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a4a67774bc15%3A0x3c7b3f78ca4f9635!2sAmravati%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1726575689670!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ width: "100%", height: "100%" }}
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Contactus;
