import React from 'react';
import "./Home.css"

const AboutMe = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-16" id='About'>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Heading */}
        <h1 className="text-5xl lg:text-6xl font-bold text-center mb-12">
          About Me
        </h1>

        {/* A Bit About Me Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">A Bit About Me:</h2>
          <p className="text-lg lg:text-xl">
            I am a passionate developer who loves creating innovative and efficient web applications. 
            With a focus on clean design and robust functionality, I aim to build digital solutions that make a difference.
          </p>
        </div>

        {/* Technologies and Tools Section */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Technologies and Tools:</h2>
          <div className="flex flex-wrap justify-center gap-6 techdiv">
            {/* Example Technology Cards */}
            <div className="bg-white p-4 shadow-lg rounded-lg" >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                alt="Python"
                className="w-16 h-16 mx-auto"
              />
              <p className="text-center mt-2 font-semibold">Python</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
                alt="Django"
                className="w-16 h-16 mx-auto"
              />
              <p className="text-center mt-2 font-semibold">Django</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                alt="MySQL"
                className="w-16 h-16 mx-auto"
              />
              <p className="text-center mt-2 font-semibold">MySQL</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                alt="HTML5"
                className="w-16 h-16 mx-auto"
              />
              <p className="text-center mt-2 font-semibold">HTML5</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                alt="CSS3"
                className="w-16 h-16 mx-auto"
              />
              <p className="text-center mt-2 font-semibold">CSS3</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                alt="Bootstrap"
                className="w-16 h-16 mx-auto"
              />
              <p className="text-center mt-2 font-semibold">Bootstrap</p>
            </div>



            <div className="bg-white p-4 shadow-lg rounded-lg">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
                alt="C Language"
                className="w-16 h-16 mx-auto"
              />
              <p className="text-center mt-2 font-semibold">C Language</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                alt="React"
                className="w-16 h-16 mx-auto"
              />
              <p className="text-center mt-2 font-semibold">React</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                alt="PostgreSQL"
                className="w-16 h-16 mx-auto"
              />
              <p className="text-center mt-2 font-semibold">PostgreSQL</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                alt="Git"
                className="w-16 h-16 mx-auto"
              />
              <p className="text-center mt-2 font-semibold">Git</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                alt="GitHub"
                className="w-16 h-16 mx-auto"
              />
              <p className="text-center mt-2 font-semibold">GitHub</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
                alt="Linux"
                className="w-16 h-16 mx-auto"
              />
              <p className="text-center mt-2 font-semibold">Linux</p>
            </div>
            



          </div>
        
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
