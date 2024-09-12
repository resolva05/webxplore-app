
import "./Testimon.css";
const Testimonials = () => {
  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="crd col-12 col-md-6 col-lg-3 mb-4">
          <div className="card position-relative h-100 rounded-md text-center">
            <img
              src="https://images.unsplash.com/photo-1656274404439-b8b463c73194?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Client 1"
              className="card-img-top rounded-md object-cover"
              style={{ height: "60vh" }}
            />
            <div className="card-img-overlay d-flex align-items-end">
              <div className="text-left text-light">
                <h5 className="card-title">Client 1</h5>
                <p className="card-text">
                  Information Lorem ipsum dolor sit amet consectetur adipisicing
                  elit...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className=" crd col-12 col-md-6 col-lg-3 mb-4">
          <div className="card position-relative h-100 rounded-md text-center">
            <img
              src="https://images.unsplash.com/photo-1656274404439-b8b463c73194?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="card-img-top rounded-md object-cover"
              style={{ height: "60vh" }}
            />
            <div className="card-img-overlay d-flex align-items-end">
              <div className="text-left text-light">
                <h5 className="card-title">Client 2</h5>
                <p className="card-text">
                  Information Lorem ipsum dolor sit amet consectetur adipisicing
                  elit...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className=" crd col-12 col-md-6 col-lg-3 mb-4">
          <div className="card position-relative h-100 rounded-md text-center">
            <img
              src="https://images.unsplash.com/photo-1656274404439-b8b463c73194?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="card-img-top rounded-md object-cover"
              style={{ height: "60vh" }}
            />
            <div className="card-img-overlay d-flex align-items-end">
              <div className="text-left text-light">
                <h5 className="card-title">Client 2</h5>
                <p className="card-text">
                  Information Lorem ipsum dolor sit amet consectetur adipisicing
                  elit...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
