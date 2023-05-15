import React from "react";

const App = () => {
  return (
    <div
      name="about"
      className="w-full h-scren bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          As a highly skilled MBA graduate and successful sales and marketing
          professional, my love for technology has driven me to explore the
          dynamic and exciting world of web development. After spending several
          years in sales and marketing roles, I have decided to pursue my
          passion and transition into a career as a web developer.
        </p>
        <br />

        <p className="text-xl">
          In my previous roles, I have honed my skills in project management,
          problem-solving, and exceeding customer expectations. I am excited to
          bring these skills to my work as a web developer and create innovative
          and user-friendly web applications. With a strong background in sales
          and marketing, I am uniquely equipped to understand the needs of users
          and develop solutions that meet their requirements
        </p>
      </div>
    </div>
  );
};

export default App;
