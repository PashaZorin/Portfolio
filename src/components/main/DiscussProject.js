import { Formik, Form, Field, FastField } from "formik";
import React, { useRef } from "react";
import * as Yup from "yup";
import "../../styles/discussProject.scss";
import PhoneCall from "../../images/discussProject/PhoneCall.png";
import PostpaidMobile from "../../images/discussProject/PostpaidMobile.png";
import emailjs from "emailjs-com";
import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const DiscussProject = () => {
  const initialValues = {
    name: "",
    phone: "",
    email: "",
  };
  const [loading, setLoading] = useState(false);
  const [messegeForUser, setMessegeForUser] = useState({
    show: false,
    text: "",
  });

  const formElem = useRef();

  const onSubmit = (value, { resetForm }) => {
    try {
      setLoading(true);
      emailjs
        .sendForm(
          "service_zxx06uq",
          "template_5sa8ndr",
          formElem.current,
          "crPhTs9u8Da1XGbYe"
        )
        .then(
          (result) => {
            resetForm();
            setLoading(false);
            toggleMessege("Спасибо за отклик");
          },
          (error) => {
            console.error(error.text);
            setLoading(false);
            toggleMessege("Что-то пошло не так(");
          }
        );
    } catch (error) {
      console.error(error, "err");
      setLoading(false);
      toggleMessege("Что-то пошло не так(");
    }
  };
  const toggleMessege = (text) => {
    setMessegeForUser({ show: true, text });
    setTimeout(() => {
      setMessegeForUser({ show: false });
    }, 2000);
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("The field is required")
      .matches(/[A-Za-zА-Яа-я]/, "only letters,"),
    phone: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(10)
      .required("The field is required"),
    email: Yup.string("not correct")
      .email("not correct")
      .required("This field is requried"),
  });

  return (
    <section className="discuss" id="discuss">
      <div
        className={` discuss__messege ${messegeForUser.show ? "show" : ""}  `}
      >
        <p>{messegeForUser.text}</p>
      </div>
      <div className=" discuss__conteiner ">
        <h2 className="title">Обсудить проект</h2>
        <h3 className=" discuss__subtitle">
          Расскажите о своих бизнес-целях и мы поможем вам в их достижении
        </h3>
        <div className="discuss__content">
          <Formik
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            initialValues={initialValues}
          >
            <Form className="discuss__form" ref={formElem}>
              <FastField name="name">
                {({ field, meta }) => {
                  return (
                    <Field
                      className={`discuss__form-input ${
                        meta.error && meta.touched ? "discuss__form-error" : ""
                      } `}
                      placeholder={`Имя ${
                        meta.error && meta.touched ? ":" + meta.error : ""
                      } `}
                      {...field}
                    />
                  );
                }}
              </FastField>
              <FastField name="phone">
                {({ field, meta }) => {
                  return (
                    <Field
                      className={`discuss__form-input ${
                        meta.error && meta.touched ? "discuss__form-error" : ""
                      } `}
                      placeholder={`Telegram/Viber ${
                        meta.error && meta.touched ? ":" + meta.error : ""
                      } `}
                      {...field}
                    />
                  );
                }}
              </FastField>
              <FastField name="email">
                {({ field, meta }) => {
                  return (
                    <Field
                      className={`discuss__form-input ${
                        meta.error && meta.touched ? "discuss__form-error" : ""
                      } `}
                      placeholder={`Email ${
                        meta.error && meta.touched ? ":" + meta.error : ""
                      } `}
                      {...field}
                    />
                  );
                }}
              </FastField>
              <button type="submit" className="button discuss__form-button">
                {!loading ? "Отправить" : <BeatLoader color="#fff" />}
              </button>
            </Form>
          </Formik>
        </div>
        <div className="discuss__image-conteiner">
          <img
            className="discuss__image-desktop"
            src={PhoneCall}
            alt="PhoneCall"
          />
          <img
            className="discuss__image-mobile"
            src={PostpaidMobile}
            alt="PostpaidMobile"
          />
        </div>
      </div>
    </section>
  );
};

export default DiscussProject;
