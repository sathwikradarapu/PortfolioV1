import React from "react";
import "./TestEx.css";
const TestEx = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-wrap items-center justify-center gap-2 m-4">
        <ul className="flex flex-wrap footerIcons">
          <li>
            <a href="https://www.facebook.com/saiprakashsunkari.sunkari">
              <i class="fab fa-facebook-f icon"></i>{" "}
            </a>
          </li>
          <li>
            <a href="https://twitter.com/SaiPrakashSunk1">
              <i class="fab fa-twitter icon"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/saiprakash-sunkari-2211371ba/">
              <i class="fab fa-linkedin-in icon"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/saiprakash.uzumaki/">
              <i class="fab fa-instagram icon"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TestEx;
