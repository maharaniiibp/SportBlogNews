import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";
import classes from "../../styles/footer.module.css";
import Link from "next/link";
import img from '../../../public/photo/Logo11.png'



const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      
            <div className={`${classes.footer_copyright}`}>
              <p>
                &copy; Copyright {year} by ciwi-ciwi{" "}
              </p>
            </div>
          
    </footer>
  );
};

export default Footer;

