import React, { useState } from "react";

// import styled component
import styled from "styled-components";

import { MainLayout, InnerLayout, ButtonStyled } from "../styles/Layout";
import Title from "../components/Title";
import ContactItem from "../components/ContactItem";
import { GitHub, LinkedIn, Mail, Phone, Instagram } from "@material-ui/icons";
import { currYear } from "../data/DataImageSection";
import { db } from "../firebase";
import { Timestamp, addDoc, collection } from "firebase/firestore";

import { motion } from "framer-motion";
import { fade } from "../animation/animation";
import { useScroll } from "../animation/useScroll";

import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

const ContactPage = () => {
    const phone = <Phone />;
    const github = <GitHub />;
    const linkedIn = <LinkedIn />;
    const mail = <Mail />;
    const instagram = <Instagram />;
    const pageName = "contact";

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [textareaText, settextareaText] = useState("");
    const [open, setOpen] = useState(false);

    const handleNameText = (e) => {
        setName(() => e.target.value);
    };
    const handleEmailText = (e) => {
        setEmail(() => e.target.value);
    };
    const handleTextAreaText = (e) => {
        settextareaText(() => e.target.value);
    };

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    const pushDetails = async () => {
        // pushing detials entered to the db for the firebase
        await addDoc(collection(db, "query"), {
            name: name,
            email: email,
            textareaText: textareaText,
            timestamp: Timestamp.fromDate(new Date()),
        });

        handleClick();
        setName("");
        setEmail("");
        settextareaText("");
    };

    const handleSubmitDetails = (e) => {
        e.preventDefault();

        if (name && email && textareaText) pushDetails();
        else {
            alert("Input Fields are missing");
        }
    };

    const [ref, controls] = useScroll(0.25);

    return (
        <>
            <MainLayout id="contact" ref={ref}>
                <Title title={pageName} />
                <ContactPageStyled
                    variants={fade}
                    initial="hidden"
                    exit="exit"
                    animate={controls}
                >
                    <InnerLayout className={"contact-section"}>
                        <div className="left-content">
                            <div className="contact-title">
                                <div>
                                    <span>Get In Touch</span> 😄
                                </div>
                            </div>
                            <form className="form">
                                <div className="form-field">
                                    <label htmlFor="name">Enter your name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={handleNameText}
                                    />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="email">Enter your email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={handleEmailText}
                                    />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="text-area">Enter your Message</label>
                                    <textarea
                                        id="text-area"
                                        cols="20"
                                        rows="4"
                                        value={textareaText}
                                        onChange={handleTextAreaText}
                                    ></textarea>
                                </div>
                                <div className="form-field">
                                    <ButtonStyled type="submit" onClick={handleSubmitDetails}>
                                        Send Message
                                    </ButtonStyled>
                                </div>
                            </form>
                        </div>
                        <div className="right-content">
                            <ContactItem
                                phone={phone}
                                title="Phone"
                                contact="+91-8890992278"
                                email="samyak.mehta11@gmail.com"
                                github={github}
                                linkedIn={linkedIn}
                                mail={mail}
                                instagram={instagram}
                            />
                        </div>
                    </InnerLayout>
                </ContactPageStyled>
            </MainLayout>
            <FooterStyled>
                <p>
                    &copy;{currYear}
                    <b> Samyak Mehta</b>
                </p>
            </FooterStyled>

            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Your Detail's are submitted!
                </Alert>
            </Snackbar>
        </>
    );
};

const ContactPageStyled = styled(motion.section)`
  min-height: 80vh;
  @media screen and (max-width: 1200px) {
    min-height: 60vh;
  }
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 850px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .right-content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .contact-title {
      div {
        color: var(--white-color);
        font-size: 1.2rem;
        font-weight: 600;
        padding: 1rem 0;
      }
    }
    .form {
      width: 100%;
      font-size: 1rem;
      .form-field {
        position: relative;
        width: 100%;
        margin: 1rem 0;
        label {
          position: absolute;
          left: 20px;
          top: -4px;
          display: inline-block;
          padding: 0 0.2rem;
          background-color: var(--background-dark-color);
          color: inherit;
          z-index: 10;
          font-size: 1rem;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          width: 100%;
          border-radius: 0.5rem;
          padding: 0.75rem;
          color: inherit;
          margin: 0.5rem 0;
          font-family: inherit;
          @media screen and (max-width: 600px) {
            height: 40px;
          }
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          border-radius: 0.5rem;
          padding: 0.75rem;
          width: 100%;
        }
      }
    }
  }
`;

const FooterStyled = styled.div`
  position: absolute;
  bottom: 0;
  border-top: 3px solid var(--border-color);
  width: 100%;
  p {
    padding: 0.75rem 0;
    text-align: center;
    font-weight: 700;
    b {
      font-weight: 700;
    }
  }
`;

export default ContactPage;
