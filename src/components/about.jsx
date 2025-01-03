import React from "react";

const About = () => {
  return (
    <div className="w-full px-10 mt-8 mx-auto ">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Us
              <br className="hidden lg:inline-block " />
              <p className="w-37 border-b-2 border-gray-800"></p>
            </h1>
            <p className="mb-8 leading-relaxed">
              Welcome to our world of growth and harmony! At [Your Organization
              Name], we believe in creating meaningful connections between
              people and nature. Our mission is to inspire and empower
              individuals to cultivate green spaces, whether it's through
              gardening, sustainable practices, or community initiatives. With a
              passion for nurturing life and a commitment to the environment, we
              strive to make a difference—one plant, one garden, and one
              community at a time. Together, let's sow the seeds of a brighter,
              greener future. 🌱
            </p>
            {/* <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div> */}
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://plus.unsplash.com/premium_photo-1675039871605-eb156cc0575d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
