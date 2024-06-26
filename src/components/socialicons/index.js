import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook}>
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialprofils.fiver && (
          <li>
            <a className=" text-decoration-none" href={socialprofils.fiver}>
              <h5>Fiverr</h5>
            </a>
          </li>
        )}
        {socialprofils.upwork && (
          <li>
            <a className=" text-decoration-none" href={socialprofils.upwork}>
              <h6>UpWork</h6>
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
