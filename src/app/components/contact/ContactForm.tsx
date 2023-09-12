"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./contactForm.module.css";
import { heading, text } from "@/styles/fonts";
import { TSignUpSchema, signUpSchema } from "@/lib/formSchema";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignUpSchema>({
	resolver: zodResolver(signUpSchema)
  });

  const onSubmit = async(data: TSignUpSchema) => {
	reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
      <input
        {...register("name")}
        className={text.className + " " + styles.contactName}
        type="text"
        placeholder="Name"
      />
	  {errors.name && (
		<p className={styles.error}>{`${errors.name.message}`}</p>
	  )}
      <input
        {...register("email")}
        className={text.className + " " + styles.contactEmail}
        type="email"
        placeholder="Email"
      />
	{errors.email && (
		<p className={styles.error}>{`${errors.email.message}`}</p>
	  )}
      <textarea
        {...register("message")}
        className={text.className + " " + styles.contactMessage}
        rows={4}
        placeholder="Message..."
      />
	  	  {errors.message && (
		<p className={styles.error}>{`${errors.message.message}`}</p>
	  )}
      <button
        className={heading.className + " " + styles.contactSubmit}
        type="submit"
		disabled = {isSubmitting}
      >
		Send
	  </button>
    </form>
  );
}
