import React from "react";
import reactSvg from "../assets/react.svg";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="flex flex-col text-white" id="Skills">
      <div className="flex flex-col items-center">
        <h1 className="p-2 m-3 mt-16 text-5xl font-bold">Skills</h1>
        <h4 className="p-2 text-2xl text-center">
          I have been developing and honing these skills over the past year.
        </h4>
      </div>
      <div className="flex flex-wrap items-center justify-center cardsDiv responsiveDiv">
        <div className="flex flex-col w-5/12 p-3 m-5 border border-white androidCard h-fit rounded-xl ">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold">Programming Language</h1>
          </div>
          <div className="flex flex-wrap items-center justify-center p-3">
            <div className="flex items-center m-2 border border-white rounded-lg w-fit responsiveDiv">
              <img
                className="m-2 rounded-xl"
                src="https://res.cloudinary.com/teepublic/image/private/s--v2JODg9W--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1520050660/production/designs/2416585_0.jpg"
                height="80"
                width="80"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">Python</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-5/12 p-3 m-5 border border-white frontendCard h-fit rounded-xl">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold">Web Development</h1>
          </div>
          <div className="flex flex-wrap items-center justify-center p-3">
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                className="m-2 rounded-xl"
                src="https://th.bing.com/th/id/OIP.wtbphh9buB7NAjHoCtv74wAAAA?rs=1&pid=ImgDetMain"
                height="80"
                width="80"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">HTML</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                className="m-2 rounded-xl"
                src="https://logodownload.org/wp-content/uploads/2017/04/css-3-logo.png"
                height="80"
                width="80"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">CSS</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                className="m-2 rounded-xl"
                src="https://cdn-icons-png.flaticon.com/512/5968/5968680.png"
                height="80"
                width="80"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">Bootstrap</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                className="m-2 rounded-xl"
                src="https://th.bing.com/th/id/OIP.fGpgk9AVa9fKPUnSMhfLCAHaFj?rs=1&pid=ImgDetMain"
                height="80"
                width="80"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">JavaScript</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                className="m-2 rounded-xl"
                src="https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256"
                height="80"
                width="80"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">React</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                className="m-2 rounded-xl"
                src="https://img.icons8.com/ios_filled/512/FFFFFF/redux.png"
                height="80"
                width="80"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">Redux</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                className="m-2 rounded-xl"
                src="https://www.djangoproject.com/m/img/logos/django-logo-positive.png"
                height="150"
                width="150"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">Django</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-5/12 p-3 m-5 border border-white othersCard h-fit rounded-xl">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold">Database</h1>
          </div>
          <div className="flex flex-wrap items-center justify-center p-3">
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                className="m-2 rounded-xl"
                src="https://th.bing.com/th/id/R.bab2c760c60f17191cb3a002e08a3dbf?rik=yiOb%2bDZuARgRSw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fmysql%2fmysql_PNG23.png&ehk=ughz54ymXwgnjlfws2xz7%2fznA2I4qAWExdUJe%2bcD7K0%3d&risl=&pid=ImgRaw&r=0"
                height="80"
                width="80"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">MySQL</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-5/12 p-3 m-5 border border-white othersCard h-fit rounded-xl">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold">Tools</h1>
          </div>
          <div className="flex flex-wrap items-center justify-center p-3">
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                className="m-2 rounded-xl"
                src="https://logospng.org/wp-content/uploads/git.png"
                height="80"
                width="80"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">Git</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                className="m-2 rounded-2xl"
                src="https://static.vecteezy.com/system/resources/previews/017/119/660/original/github-logo-git-hub-icon-with-text-on-white-and-black-background-free-vector.jpg"
                height="80"
                width="80"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">GitHub</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                className="m-2 rounded-2xl"
                src="https://i.pinimg.com/originals/24/42/f8/2442f8e6dbd772f0cf1dad8d803399bc.png"
                height="80"
                width="80"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">VSCode</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                className="m-2 rounded-2xl"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzvj2vQpI7zpAiI01wm0qj1_tbUOrhnjwSyw&s"
                height="80"
                width="80"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">Netlify</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                className="m-2 rounded-2xl"
                src="https://mms.businesswire.com/media/20241112181390/en/2301437/22/Render_logo_-_Black.jpg"
                height="100"
                width="100"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">Render</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-5/12 p-3 m-5 border border-white backendCard h-fit rounded-xl">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold">CS Fundementals</h1>
          </div>
          <div className="flex flex-wrap items-center justify-center p-3">
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                className="m-2 rounded-xl"
                src="https://logodix.com/logo/1164574.png"
                height="80"
                width="80"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">DBMS</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                className="m-2 rounded-xl"
                src="https://www.ddesignerr.com/wp-content/uploads/2013/05/Windows-Vs-Apple-HD-Wallpaper.jpg"
                height="80"
                width="80"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">Operating Systems</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                autoPlay
                loop
                className="m-2 rounded-2xl"
                src="https://di3xp7dfi3cq.cloudfront.net/media/magefan_blog/10-applications-of-object-oriented-programming.jpeg"
                height="80"
                width="80"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">OOPS</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                className="m-2 rounded-xl"
                src="https://3.bp.blogspot.com/-sr5nrVMP8gQ/WrPUIcvWWHI/AAAAAAAALIE/apHAJwImTkkE3Ey4-TF4IkO8iItWBfMGQCLcBGAs/s1600/dccn.png"
                height="80"
                width="80"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">Computer Networks</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
