import React from "react";
import "./TestEx.css";
const TestEx = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-wrap items-center justify-center gap-2 m-4">
        <ul className="flex flex-wrap footerIcons">
        <li>
        <a href="mailto:sathwikradarapu@gmail.com?subject=Your Subject Here&body=Your message here.">
          <i class="fas fa-envelope icon"></i>
        </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sathwik-radarapu-b9111a273/">
              <i class="fab fa-linkedin-in icon"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/sathwikradarapu">
            <i class="fab fa-github icon"></i>
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/u/Sathwik_Radarapu2933/">
            <i class="fas fa-code icon"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TestEx;
