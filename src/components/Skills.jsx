import React from "react";
import reactSvg from "../assets/react.svg";
import "./Skills.css";
import vscode from "../imgs/vdcode.gif";
const Skills = () => {
  return (
    <div className="flex flex-col text-white" id="Projects">
      <div className="flex flex-col items-center">
        <h1 className="p-2 m-3 mt-16 text-5xl font-bold">Skills</h1>
        <h4 className="p-2 text-2xl text-center">
          Here are some of my skills on which I have been working on for the
          past 1 year
        </h4>
      </div>
      <div className="flex flex-wrap items-center justify-center cardsDiv responsiveDiv">
        <div className="flex flex-col w-5/12 p-3 m-5 border border-white androidCard h-fit rounded-xl ">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold">Android</h1>
          </div>
          <div className="flex flex-wrap items-center justify-center p-3">
            <div className="flex items-center m-2 border border-white rounded-lg w-fit responsiveDiv">
              <img
                className="m-2 rounded-xl"
                src="https://img.icons8.com/?size=96&id=GPfHz0SM85FX&format=gif"
                height="40"
                width="40"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">Java</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <video
                loop
                autoPlay
                className="m-2 rounded-xl"
                src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/kotlin-programming-language-6543310-5401030.mp4"
                height="40"
                width="40"
              ></video>
              <h1 className="m-2 text-xs md:text-xl">Kotlin</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                autoPlay
                loop
                className="m-2 rounded-2xl"
                src="https://img.icons8.com/?size=96&id=QsO1qiXCL8H2&format=gif"
                height="40"
                width="40"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">XML</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <video
                loop
                autoPlay
                className="m-2 rounded-xl"
                src="https://cdnl.iconscout.com/lottie/free/thumb/free-android-4740777-3938339.mp4"
                height="40"
                width="40"
              ></video>
              <h1 className="m-2 text-xs md:text-xl">Android Studio</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-5/12 p-3 m-5 border border-white backendCard h-fit rounded-xl">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold">Backend</h1>
          </div>
          <div className="flex flex-wrap items-center justify-center p-3">
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                className="m-2 rounded-xl"
                src="https://media.licdn.com/dms/image/D4D12AQGPsMj05z71VA/article-cover_image-shrink_600_2000/0/1693836846985?e=2147483647&v=beta&t=eqxVcd9LGvamjnWIcEXGZ8tYqUnShccB3vm07aQ1kHc"
                height="40"
                width="40"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">Node JS</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                className="m-2 rounded-xl"
                src="https://assets-v2.lottiefiles.com/a/2a2a499e-116d-11ee-8f41-7f82227ba589/MIgBtJS610.gif"
                height="40"
                width="40"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">MongoDB</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                autoPlay
                loop
                className="m-2 rounded-2xl"
                src="https://cdn.icon-icons.com/icons2/3914/PNG/512/express_logo_icon_248911.png"
                height="40"
                width="40"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">Express JS</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                className="m-2 rounded-xl"
                src="https://user-images.githubusercontent.com/74038190/238200431-3c16d4f2-b757-4c70-8f42-43d5dddd2c36.gif"
                height="40"
                width="40"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">FireBase</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                loop
                autoPlay
                className="m-2 rounded-xl"
                src="https://logowik.com/content/uploads/images/mysql8604.logowik.com.webp"
                height="45"
                width="45"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">MySQL</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-5/12 p-3 m-5 border border-white frontendCard h-fit rounded-xl">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold">Frontend</h1>
          </div>
          <div className="flex flex-wrap items-center justify-center p-3">
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                className="m-2 rounded-xl"
                src="https://media0.giphy.com/media/RJzm826vu7WbJvBtxX/giphy.gif?cid=6c09b952yjk2uq411my528ma3yooscpt3sj4j7nxfpvkarlm&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
                height="40"
                width="40"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">React JS</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                className="m-2 rounded-xl"
                src="https://img.icons8.com/?size=96&id=tGvHBPJaKqEd&format=gif"
                height="40"
                width="40"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">JavaScript</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <video
                autoPlay
                loop
                className="m-2 rounded-2xl"
                src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/css-8654540-6897446.mp4"
                height="40"
                width="40"
              ></video>
              <h1 className="m-2 text-xs md:text-xl">CSS</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                className="m-2 rounded-xl"
                src="https://img.icons8.com/?size=96&id=Lb0GijAhiD3r&format=gif"
                height="40"
                width="40"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">HTML</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                loop
                autoPlay
                className="m-2 rounded-2xl"
                src="https://purecode.ai/blogs/wp-content/uploads/2023/12/giphy-6.gif"
                height="40"
                width="40"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">Bootstrap</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <video
                loop
                autoPlay
                className="m-2 rounded-2xl"
                src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/tailwind-css-10875167-8814761.mp4"
                height="40"
                width="40"
              ></video>
              <h1 className="m-2 text-xs md:text-xl">Tailwind</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                className="m-2"
                src="https://img.icons8.com/?size=160&id=3VGtaw5gCc8T&format=png"
                height="40"
                width="40"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">Redux</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                className="m-2"
                src="https://static-00.iconduck.com/assets.00/material-ui-icon-2048x1626-on580ia9.png"
                height="40"
                width="40"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">Material UI</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <video
                autoPlay
                loop
                className="m-2 rounded-2xl"
                src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/flutter-logo-6103073-5073422.mp4"
                height="40"
                width="40"
              ></video>
              <h1 className="m-2 text-xs md:text-xl">Flutter</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-5/12 p-3 m-5 border border-white othersCard h-fit rounded-xl">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold">Others</h1>
          </div>
          <div className="flex flex-wrap items-center justify-center p-3">
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                className="m-2 rounded-xl"
                src="https://media.tenor.com/F_aIpdp3hEwAAAAi/git-github.gif"
                height="60"
                width="60"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">Git</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                className="m-2 rounded-2xl"
                src="https://cdn.dribbble.com/users/1144208/screenshots/2655434/week6---git-scared.gif"
                height="50"
                width="50"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">Github</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                autoPlay
                loop
                className="m-2 rounded-2xl"
                src="https://ayushmanbh.netlify.app/static/media/netlify.c779369f.svg"
                height="40"
                width="40"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">Netlify</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                className="m-2 rounded-lg"
                src={vscode}
                height="40"
                width="40"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">VS Code</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                loop
                autoPlay
                className="m-2 rounded-2xl"
                src="https://miro.medium.com/v2/resize:fit:679/0*3UD56f1LXF3Q8IrO.gif"
                height="45"
                width="45"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">C++</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <img
                loop
                autoPlay
                className="m-2 rounded-2xl"
                src="https://www.newus.in/static/media/Core-python-at-newus-Dharmsala.0fc3b7c72cdea81baba4.gif"
                height="40"
                width="40"
              ></img>
              <h1 className="m-2 text-xs md:text-xl">Python</h1>
            </div>
            <div className="flex items-center m-2 border border-white rounded-lg w-fit">
              <video
                autoPlay
                loop
                className="m-2 rounded-2xl"
                src="https://cdnl.iconscout.com/lottie/premium/thumb/atom-3647730-3053406.mp4"
                height="45"
                width="45"
              ></video>
              <h1 className="m-2 text-xs md:text-xl">Atom</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
