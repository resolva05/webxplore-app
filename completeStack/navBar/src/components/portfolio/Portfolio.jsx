import "./Portfolio.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import { useState, useEffect } from "react";
import "../home/Testimon.css";
import ProjectCards from "./ProjectCards";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(top);
  }, []);
  const [open, setOpen] = useState(false);
 

  return (
    <>
      <div className=" cont relative w-full">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 d-flex">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <h1
              className="mt-8 text-3xl font-bold tracking-tight md:text-4xl lg:text-6xl"
              style={{
                color: "black",
                fontSize: "50px",
                marginBottom: "30px",
                marginTop: "40px",
              }}
            >
              Delivering cutting-edge solutions
            </h1>
            <p className="mt-8 text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur modi blanditiis dolores quasi eaque explicabo!Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Consequatur
              modi blanditiis dolores quasi eaque explicabo!Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Consequatur modi blanditiis
              dolores quasi eaque explicabo!Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Consequatur modi blanditiis dolores
              quasi eaque explicabo!Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Consequatur modi blanditiis dolores quasi eaque
              explicabo!
            </p>
            <form action="" className="mt-8 flex items-start space-x-2">
              <div>
                <Button
                  className="btn"
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  style={{
                    marginBottom: "10px",
                    borderRadius: "25px",
                  }}
                >
                  Know More
                </Button>
                <div style={{ minHeight: "150px", width: "100%" }}>
                  <Collapse in={open} dimension="height">
                    <div id="example-collapse-text">
                      <Card
                        body
                        style={{
                          width: "100%",
                          maxWidth: "100%",
                          minWidth: "250px",
                          height: "auto",
                          backgroundColor: "white",
                          marginBottom: "10px",
                        }}
                      >
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. Nihil anim
                        keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                      </Card>
                    </div>
                  </Collapse>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="portfolioimg">
        <h2
          className="text-center"
          style={{
           
            color: "white",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          Our Projects
        </h2>
          <ProjectCards/>
      </div>

      <div
        className="d-flex"
        style={{
          margin: "20px",
          borderRadius: "20px",
        }}
      >
        <div
          className="d-flex sec max-w-2xl flex flex-col items-center rounded-md border md:flex-row shadow-lg w-full"
          style={{ borderRadius: "20px" }}
        >
          <div className="h-full w-full md:h-[200px] md:w-[300px]">
            <img
              src="https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726099200&semt=ais_hybrid"
              alt="Laptop"
              className="h-full w-full rounded-md object-cover"
              style={{ borderRadius: "20px", margin: "10px", height: "20vw" }}
            />
          </div>
          <div className="flex-grow w-full p-4 md:p-6">
            <h1
              className="text-lg font-semibold break-words"
              style={{ fontSize: "20px" , color:"black"}}
            >
              Web Development
            </h1>
            <p className="mt-3 text-sm text-gray-600 break-words">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              consequatur accusamus nobis ad quas aspernatur dolores possimus
              veritatis itaque vel? Impedit perferendis dolorem totam qui
              quaerat temporibus voluptate nihil neque?
            </p>
          </div>
        </div>
      </div>
      <div
        className="d-flex"
        style={{
          margin: "20px",
          borderRadius: "20px",
        }}
      >
        <div
          className="d-flex sec max-w-2xl flex flex-col items-center rounded-md border md:flex-row shadow-lg w-full"
          style={{ borderRadius: "20px" }}
        >
          <div className="h-full w-full md:h-[200px] md:w-[300px]">
            <img
              src="https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg"
              alt="Laptop"
              className="h-full w-full rounded-md object-cover"
              style={{ borderRadius: "20px", margin: "10px", height: "20vw" }}
            />
          </div>
          <div className="flex-grow w-full p-4 md:p-6 ">
            <h1
              className="text-lg font-semibold break-words"
              style={{ fontSize: "20px" , color:"black" }}
            >
              App Development
            </h1>
            <p className="mt-3 text-sm text-gray-600 break-words">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              consequatur accusamus nobis ad quas aspernatur dolores possimus
              veritatis itaque vel? Impedit perferendis dolorem totam qui
              quaerat temporibus voluptate nihil neque?
            </p>
          </div>
        </div>
      </div>

      <div
        className="d-flex"
        style={{
          margin: "20px",
          borderRadius: "20px",
        }}
      >
        <div
          className="d-flex sec max-w-2xl flex flex-col items-center rounded-md border md:flex-row shadow-lg w-full"
          style={{ borderRadius: "20px" }}
        >
          <div className="h-full w-full md:h-[200px] md:w-[300px]">
            <img
              src="https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg"
              alt="Laptop"
              className="h-full w-full rounded-md object-cover"
              style={{ borderRadius: "20px", margin: "10px", height: "20vw" }}
            />
          </div>
          <div className="flex-grow w-full p-4 md:p-6">
            <h1
              className="text-lg font-semibold break-words"
              style={{ fontSize: "20px"  , color:"black"}}
            >
              E-Commerce
            </h1>
            <p className="mt-3 text-sm text-gray-600 break-words">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              consequatur accusamus nobis ad quas aspernatur dolores possimus
              veritatis itaque vel? Impedit perferendis dolorem totam qui
              quaerat temporibus voluptate nihil neque?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
