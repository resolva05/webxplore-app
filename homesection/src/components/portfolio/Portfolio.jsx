// import React from 'react'
import logo from "../../assets/logo.jpg";
import "./Portfolio.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import { useState } from "react";
import '../home/Testimon.css'

const Portfolio = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className=" cont relative w-full">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 d-flex">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <h1
              className="mt-8 text-3xl font-bold tracking-tight md:text-4xl lg:text-6xl"
              style={{
                color: "red",
                fontSize: "50px",
                marginBottom: "30px",
                marginTop: "40px",
                fontFamily: "fantasy",
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
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  style={{
                    marginBottom: "10px",
                    borderRadius: "25px",
                    backgroundColor: "red",
                  }}
                >
                  Know More
                </Button>
                <div style={{ minHeight: "150px" }}>
                  <Collapse in={open} dimension="width">
                    <div id="example-collapse-text">
                      <Card body style={{ width: "400px" }}>
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
          <div
            className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6"
            style={{}}
          >
            <img
              className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
              src={logo}
              alt=""
              style={{ height: "25vw", marginRight: "30px" }}
            />
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "red" }}>
        <h2
          className="text-center"
          style={{
            fontFamily: "fantasy",
            color: "white",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          Our Projects
        </h2>
        <div className="d-flex text-center justify-content-center">
          <div
            className="crd w-[300px] rounded-md border shadow-lg"
            style={{
              backgroundColor: "white",
              marginRight: "10px",
              marginLeft: "10px",
              marginBottom: "20px",
              borderRadius: "20px",
              height: "30%",
              width: "28.3vw",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="Laptop"
              className="rounded-md object-cover"
              style={{ height: "18.75vw", borderRadius: "20px" }}
            />
            <div className="p-4 text-center">
              <h1 className="text-lg font-semibold">Project Title</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipilo Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Ratione
                exercitationem eius at, aut laboriosam molestias ut. Similique
                quos nam molestiae ducimus maxime ex nemo numquam possimus.
                
              </p>
            </div>
          </div>
            <div
                className="crd w-[300px] rounded-md border shadow-lg"
                style={{
                backgroundColor: "white",
                marginRight: "10px",
                marginLeft: "20px",
                marginBottom: "20px",
                borderRadius: "20px",
                height: "30%",
                width: "28.3vw",
                }}
            >
                <img
                src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="Laptop"
                className="h-[200px] w-full rounded-md object-cover"
                style={{ height: "18.75vw", borderRadius: "20px" }}
                />
                <div className="p-4 text-center">
                <h1 className="text-lg font-semibold">Project Title</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipilo Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Ratione
                    exercitationem eius at, aut laboriosam molestias ut. Similique
                    quos nam molestiae ducimus maxime ex nemo numquam possimus.
                    
                </p>
                </div>
            </div>
            <div
                className="crd w-[300px] rounded-md border shadow-lg"
                style={{
                backgroundColor: "white",
                marginRight: "10px",
                marginLeft: "20px",
                marginBottom: "20px",
                borderRadius: "20px",
                height: "30%",
                width: "28.3vw",
                }}
            >
                <img
                src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="Laptop"
                className="h-[200px] w-full rounded-md object-cover"
                style={{ height: "18.75vw", borderRadius: "20px" }}
                />
                <div className="p-4 text-center">
                <h1 className="text-lg font-semibold">Project Title</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipilo Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Ratione
                    exercitationem eius at, aut laboriosam molestias ut. Similique
                    quos nam molestiae ducimus maxime ex nemo numquam possimus.
                </p>
                </div>
            </div>
        </div>
      </div>
      <div>

      </div>
    </>
  );
};

export default Portfolio;
