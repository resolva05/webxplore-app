// import React from 'react'
import Carousel from "react-bootstrap/Carousel";
const Services = () => {
  return (
    <Carousel data-bs-theme="dark" >
          <Carousel.Item >
            <div className="w-[300px] rounded-md border text-center border-0" style={{borderRadius:"10px"}}>
              <img
                src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="Laptop"
                style={{borderRadius: "15px", height:"360px" }}
                className="h-[200px] w-full rounded-md object-cover mt-2 shadow-lg"
              />
              <div className="p-4">
                <h1 className="font-semibold" style={{fontSize:"25px"}}>Service 1</h1>
                <p className="mt-3 text-sm text-gray-600">
                Qui alias molestias, animi doloremque error voluptate, veritatis
            repellat perspiciatis numquam nisi et rem adipisci possimus
            provident inventore obcaecati, beatae nemo. Laboriosam! Rerum
            nesciunt distinctio quod ducimus accusantium officia aliquam
            eveniet, saepe harum earum itaque aut! Quibusdam aspernatur tempore
                </p>
                {/* <button
                  type="button"
                  className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black "
                >
                  Read
                </button> */}
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="w-[300px] rounded-md border text-center border-0 " style={{borderRadius:"10px"}}>
              <img
                src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="Laptop"
                style={{borderRadius: "15px", height:"360px" }}
                className="h-[200px] w-full rounded-md object-cover mt-2 shadow-lg"
              />
              <div className="p-4">
                <h1 className="font-semibold"  style={{fontSize:"25px"}}>Service 2</h1>
                <p className="mt-3 text-sm text-gray-600">
                Qui alias molestias, animi doloremque error voluptate, veritatis
            repellat perspiciatis numquam nisi et rem adipisci possimus
            provident inventore obcaecati, beatae nemo. Laboriosam! Rerum
            nesciunt distinctio quod ducimus accusantium officia aliquam
            eveniet, saepe harum earum itaque aut! Quibusdam aspernatur tempore     
                </p>
                {/* <button
                  type="button"
                  className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black "
                >
                  Read
                </button> */}
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="w-[300px] rounded-md border text-center border-0" style={{borderRadius:"10px"}} >
              <img
                src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="Laptop"
                style={{borderRadius: "15px", height:"360px" }}
                className="h-[200px] w-full rounded-md object-cover mt-2 shadow-lg"
              />
              <div className="p-4">
                <h1 className="font-semibold" style={{fontSize:"25px"}}>Service 3</h1>
                <p className="mt-3 text-sm text-gray-600">
                Qui alias molestias, animi doloremque error voluptate, veritatis
            repellat perspiciatis numquam nisi et rem adipisci possimus
            provident inventore obcaecati, beatae nemo. Laboriosam! Rerum
            nesciunt distinctio quod ducimus accusantium officia aliquam
            eveniet, saepe harum earum itaque aut! Quibusdam aspernatur tempore
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
  )
}

export default Services
