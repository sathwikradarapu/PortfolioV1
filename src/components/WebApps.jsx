import React from "react";
import pfBg from "../imgs/pfBg.jpg";
import restaurantProPic from "../imgs/restaurant.png";
import "./WebApps.css";
import speechtotxt from "../imgs/speechtotxt.png";
import todolist from "../imgs/todolist.png";
import bubbles from "../imgs/bubbles.png";
import videoChat from "../imgs/videoChat.png";
const WebApps = () => {
  return (
    <div className="flex flex-wrap items-center justify-center w-4/5 text-white">
      {/* card1 */}
      <div className="flex flex-col p-2 m-4 text-white border border-white card rounded-2xl cardHeight">
        <div className="imgDiv h-2/4 ">
          <img className="p-2 rounded-2xl" src={restaurantProPic}></img>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 font-semibold">
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            React JS
          </div>
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            HTML
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            CSS
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Javascript
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Redux
          </div>
        </div>
        <div className="p-2 text-2xl font-semibold ">
          <h1>Restaurant Web App</h1>
        </div>
        <div className="p-2 ">
          <p>
            Developed a dynamic restaurant website utilizing React.js for
            seamless front-end UI. Implemented user-friendly features enabling
            online ordering and table reservations. Enhanced functionality by
            integrating an orders section for streamlined management and
            tracking
          </p>
        </div>
        <div className="flex items-center justify-center buttonsDiv">
          <a href="https://github.com/SaiPrakash-voldemort/RestaurantWebAppV1">
            {" "}
            <button>Code</button>
          </a>
          <a href="https://superb-lebkuchen-ef1ddd.netlify.app/">
            <button onClick="">Live</button>
          </a>
        </div>
      </div>
      {/* card1 end */}
      <div className="flex flex-col p-2 m-4 text-white border border-white card rounded-2xl">
        <div className="imgDiv h-2/4 ">
          <img className="p-2 rounded-2xl" src={speechtotxt}></img>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 font-semibold">
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            React JS
          </div>
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            HTML
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Tailwind CSS
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Javascript
          </div>
        </div>
        <div className="p-2 text-2xl font-semibold ">
          <h1>Speech To Text</h1>
        </div>
        <div className="p-2 ">
          <p>
            Engineered a React web application facilitating speech-to-text
            conversion, employing React.js for robust functionality. Leveraged
            Tailwind CSS for polished UI design, enhancing user experience and
            accessibility.
          </p>
        </div>
        <div className="flex items-center justify-center buttonsDiv">
          <a href="https://github.com/SaiPrakash-voldemort/SpeechToText">
            <button>Code</button>
          </a>
          <a href="https://saiprakash-voldemort.github.io/SpeechToText/">
            <button>Live</button>
          </a>
        </div>
      </div>
      <div className="flex flex-col p-2 m-4 text-white border border-white card rounded-2xl">
        <div className="imgDiv h-2/4 ">
          <img className="p-2 rounded-2xl" src={todolist}></img>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 font-semibold">
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            React JS
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Tailwind CSS
          </div>{" "}
        </div>
        <div className="p-2 text-2xl font-semibold ">
          <h1>Checklist</h1>
        </div>
        <div className="p-2 ">
          <p>
            Designed and developed a dynamic To-Do List web application using
            React.js, enabling users to efficiently manage tasks and priorities.
            Utilized state management libraries and modular components to ensure
            scalability and maintainability of the application
          </p>
        </div>
        <div className="flex items-center justify-center buttonsDiv">
          <a href="https://github.com/SaiPrakash-voldemort/ToDoListV1">
            {" "}
            <button>Code</button>
          </a>
          <a href="https://saiprakash-voldemort.github.io/ToDoListV1/">
            <button onClick="">Live</button>
          </a>
        </div>
      </div>
      <div className="flex flex-col p-2 m-4 text-white border border-white card rounded-2xl">
        <div className="imgDiv h-2/4 ">
          <img className="p-2 rounded-2xl" src={bubbles}></img>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 font-semibold">
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            HTML
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            CSS
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Javascript
          </div>{" "}
        </div>
        <div className="p-2 text-2xl font-semibold ">
          <h1>Bubble Shooter</h1>
        </div>
        <div className="p-2 ">
          <p>
            Created an engaging Bubble Shooter game featuring stunning UI
            design. Players aim to hit the correct bubble to earn points,
            enhancing both entertainment and user experience.
          </p>
        </div>
        <div className="flex items-center justify-center buttonsDiv">
          <a href="https://github.com/SaiPrakash-voldemort/Bubble-Game">
            {" "}
            <button>Code</button>
          </a>
          <a href=" https://saiprakash-voldemort.github.io/Bubble-Game/">
            <button onClick="">Live</button>
          </a>
        </div>
      </div>
      <div className="flex flex-col p-2 m-4 text-white border border-white card rounded-2xl">
        <div className="imgDiv h-2/4 ">
          <img className="p-2 rounded-2xl" src={videoChat}></img>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 font-semibold">
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            React JS
          </div>
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            HTML
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            CSS
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Javascript
          </div>{" "}
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Node JS
          </div>
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Socket.io
          </div>
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Web-RTC
          </div>
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Express
          </div>
        </div>
        <div className="p-2 text-2xl font-semibold ">
          <h1>Video Chat App</h1>
        </div>
        <div className="p-2 ">
          <p>
            Crafted a cutting-edge video chat application leveraging React.js
            for seamless UI integration and Socket.IO for establishing real-time
            connections between users. Employed Node.js for backend
            functionality, enhancing scalability and performance. Integrated
          </p>
        </div>
        <div className="flex items-center justify-center buttonsDiv">
          <a href="https://github.com/SaiPrakash-voldemort/VideoChatAppTest">
            {" "}
            <button>Code</button>
          </a>
          <a href="https://videochatappsai.netlify.app/">
            <button onClick="">Live</button>
          </a>
        </div>
      </div>
      <div className="flex flex-col p-2 m-4 text-white border border-white card rounded-2xl">
        <div className="imgDiv h-2/4 ">
          <img
            className="p-2 rounded-2xl"
            src="https://m.media-amazon.com/images/I/71y50-KHLoL.png"
          ></img>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 font-semibold">
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Android
          </div>
          <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
            Java
          </div>{" "}
        </div>
        <div className="p-2 text-2xl font-semibold ">
          <h1>JNTUH R22-GPA-Calculator</h1>
        </div>
        <div className="p-2 ">
          <p>
            Developed an Android application for calculating CGPA specifically
            tailored for R22 JNTUH students. Provided support for students
            across eleven different branches to calculate their CGPA easily.
          </p>
        </div>
        <div className="flex items-center justify-center buttonsDiv">
          <a href="https://github.com/SaiPrakash-voldemort/JNTUHR22-GPA-Calculator">
            {" "}
            <button>Code</button>
          </a>
          <a href="https://www.amazon.com/gp/product/B0CSJZ5YTG">
            <button onClick="">Live</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebApps;
<div className="flex flex-col p-2 m-4 text-white border border-white card rounded-2xl">
  <div className="imgDiv h-2/4 ">
    <img className="p-2 rounded-2xl" src={restaurantProPic}></img>
  </div>
  <div className="flex flex-wrap items-center justify-center gap-2 p-2 ">
    <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
      React JS
    </div>
    <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
      HTML
    </div>{" "}
    <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
      CSS
    </div>{" "}
    <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
      Javascript
    </div>{" "}
    <div className="p-2 text-xs text-white border border-white rounded-2xl skillsUsed">
      Redux
    </div>
  </div>
  <div className="p-2 text-2xl font-semibold ">
    <h1>Restaurant Web App</h1>
  </div>
  <div className="p-2 ">
    <p>
      Developed a dynamic restaurant website utilizing React.js for seamless
      front-end UI. Implemented user-friendly features enabling online ordering
      and table reservations. Enhanced functionality by integrating an orders
      section for streamlined management and tracking
    </p>
  </div>
  <div className="flex items-center justify-center buttonsDiv">
    <a href="https://github.com/SaiPrakash-voldemort/RestaurantWebAppV1">
      {" "}
      <button>Code</button>
    </a>
    <a href="https://superb-lebkuchen-ef1ddd.netlify.app/">
      <button onClick="">Live</button>
    </a>
  </div>
</div>;
