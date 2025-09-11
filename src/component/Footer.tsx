import React from 'react'
import { FaFacebook, FaGit, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa6';

export default function Footer() {
  return (
    <div id="footer" style={{gap:"1%"}}>

      <a href="#">
        <FaFacebook
          className="social-icon facebook"
          style={{
            border: "1px solid white",
            borderRadius: "50%",
            padding: "20%",
            
          }}
        />
      </a>

      <a href="#">
        <FaTwitter
          className="social-icon twitter"
          style={{
            border: "1px solid white",
            borderRadius: "50%",
            padding: "20%",
          }}
        />
      </a>

      <a href="#">
        <FaGoogle
          className="social-icon google"
          style={{
            border: "1px solid white",
            borderRadius: "50%",
            padding: "20%",
          }}
        />
      </a>

      <a href="#">
        <FaInstagram
          className="social-icon instagram"
          style={{
            border: "1px solid white",
            borderRadius: "50%",
            padding: "20%",
          }}
        />
      </a>

      <a href="#">
        <FaLinkedin
          className="social-icon instagram"
          style={{
            border: "1px solid white",
            borderRadius: "50%",
            padding: "20%",
          }}
        />
      </a>

      <a href="#">
        <FaGithub
          className="social-icon instagram"
          style={{
            border: "1px solid white",
            borderRadius: "50%",
            padding: "20%",
          }}
        />
      </a>
    </div>
  );
}
