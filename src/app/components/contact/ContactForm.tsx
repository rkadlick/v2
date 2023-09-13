"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./contactForm.module.css";
import { heading, text } from "@/styles/fonts";
import { TSignUpSchema, signUpSchema } from "@/lib/formSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    setError,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: TSignUpSchema) => {
    // console.log(JSON.stringify(data));
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    console.log(response);

    if (!response.ok) {
      // response status is not 2xx
      alert("Submitting form failed!");
      return;
    }
    const responseData = await response.json();
    // console.log(responseData);
    if (responseData.errors) {
      const errors = responseData.errors;

      if (errors.name) {
        setError("name", {
          type: "server",
          message: errors.name,
        });
      } else if (errors.email) {
        setError("email", {
          type: "server",
          message: errors.email,
        });
      } else if (errors.message) {
        setError("message", {
          type: "server",
          message: errors.message,
        });
      } else {
        alert("Something went wrong!");
      }
    }

    // reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
      <input
        {...register("name")}
		id="name"
        className={text.className + " " + styles.contactName}
        type="text"
        placeholder="Name"
		disabled={isSubmitSuccessful || isSubmitting}
      />
      {errors.name && (
        <p className={styles.error}>{`${errors.name.message}`}</p>
      )}
      <input
        {...register("email")}
		id="email"
        className={text.className + " " + styles.contactEmail}
        type="email"
        placeholder="Email"
		disabled={isSubmitSuccessful || isSubmitting}
      />
      {errors.email && (
        <p className={styles.error}>{`${errors.email.message}`}</p>
      )}
      <textarea
        {...register("message")}
		id="message"
        className={text.className + " " + styles.contactMessage}
        rows={4}
        placeholder="Message..."
		disabled={isSubmitSuccessful || isSubmitting}
      />
      {errors.message && (
        <p className={styles.error}>{`${errors.message.message}`}</p>
      )}
      {isSubmitting ? (
        <button
          className={heading.className + " " + styles.contactSending}
          type="submit"
          disabled
        >
          Sending...
        </button>
      ) : isSubmitSuccessful ? (
        <button
          className={heading.className + " " + styles.contactSent}
          type="submit"
          disabled
        >
          Message Sent <FontAwesomeIcon icon={faCheck} />
        </button>
      ) : (
        <button
          className={heading.className + " " + styles.contactSubmit}
          type="submit"
          disabled={isSubmitting}
        >
          Send
        </button>
      )}
    </form>
  );
}
