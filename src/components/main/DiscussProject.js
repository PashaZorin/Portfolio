import { Formik, Form, Field, FastField } from "formik";
import React from "react";
import * as Yup from "yup";
import "../../styles/discussProject.scss";
import PhoneCall from "../../images/discussProject/PhoneCall.png";
import PostpaidMobile from "../../images/discussProject/PostpaidMobile.png";

import Button from "../Button";
const DiscussProject = () => {
  const initialValues = {
    name: "",
    phone: "",
    email: "",
  };
  const onSubmit = (value, { resetForm }) => {
    console.log(value);
    resetForm();
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
    <section className="discuss">
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
            <Form className="discuss__form">
              <FastField name="name">
                {({ field, meta }) => {
                  console.log(meta);
                  return (
                    <Field
                      className={`discuss__form-input ${
                        meta.error && meta.touched ? "discuss__form-error" : ""
                      } `}
                      placeholder={"Имя"}
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
                      placeholder={"Telegram/Viber"}
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
                      placeholder={"Email"}
                      {...field}
                    />
                  );
                }}
              </FastField>
              <Button
                text="Отправить"
                type="submit"
                className="discuss__form-button"
              />
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
