// import './Home.css'

// const Home = () => {
//     return (
//         <section className="bg-gray-900 text-white h-screen flex items-center justify-center" id='Home'>
//             <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-12 namediv">
//                 {/* Left Section: Text and Resume Button */}
//                 <div className="lg:w-1/2 text-center lg:text-left">
//                     <h1 className="text-4xl lg:text-6xl font-bold mb-6">
//                         Hi, I'm <span className="text-teal-400">Rohith Vadla</span>
//                     </h1>
//                     <p className="text-lg lg:text-xl mb-6">
//                         I am a passionate developer specializing in creating beautiful and efficient web applications.
//                     </p>
//                     <a
//                         href="https://drive.google.com/file/d/1wHpWX9dFD9EtTwp9mnnxRLPbeEaVGI3B/view?usp=drive_link"
//                         download
//                         className="bg-teal-500 hover:bg-teal-400 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
//                     >
//                         Download Resume
//                     </a>
//                 </div>

//                 {/* Right Section: SVG Illustration */}
//                 <div className="flex items-center justify-center h-screen photodiv">
//                     <img
//                         src="https://pbs.twimg.com/profile_images/1244604096566513669/1cSwTExv_400x400.jpg"
//                         // src='src\components\PS 1.png'
//                         alt="Illustration"
//                         className="myphoto"
//                     />
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default Home;


import './Home.css';

const Home = () => {
    return (
        <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center overflow-hidden" id="Home">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 lg:px-12">
                {/* Left Section: Text and Resume Button */}
                <div className="lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0 namediv">
                    <h1 className="text-6xl lg:text-6xl font-bold mb-4 lg:mb-6 name">
                        Hi, I'm <span className="text-teal-400">Rohith Vadla</span>
                    </h1>
                    <p className="text-lg lg:text-lg mb-4 lg:mb-6 name1">
                        I am a passionate developer specializing in creating beautiful and efficient web applications.
                    </p>
                    <a
                        href="https://drive.google.com/file/d/1wHpWX9dFD9EtTwp9mnnxRLPbeEaVGI3B/view?usp=drive_link"
                        download
                        className="bg-teal-500 hover:bg-teal-400 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
                    >
                        Download Resume
                    </a>
                </div>

                {/* Right Section: Photo */}
                <div className="lg:w-1/2 flex items-center justify-center">
                    <img
                        src="https://pbs.twimg.com/profile_images/1244604096566513669/1cSwTExv_400x400.jpg"
                        alt="Illustration"
                        className="photo1"

                    />
                </div>
            </div>
        </section>
    );
};

export default Home;

