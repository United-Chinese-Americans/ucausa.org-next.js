"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import styles from "./Contact.module.css";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzL9Nk2En1GPV4GpsqY3NCl7ZSxjeBfoaCRtjtGQRdyAkwwbK6VtR6F6rEkeKwe52hZ/exec";

type Status = "idle" | "submitting" | "success" | "error";

export default function FeedbackForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");

    const data = new URLSearchParams();
    for (const [key, value] of new FormData(form)) {
      data.append(key, value as string);
    }

    try {
      await fetch(SCRIPT_URL, { method: "POST", body: data, mode: "no-cors" });
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Error!", error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required />
      </div>
      <button type="submit" className={styles.submitBtn} disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Submit"}
      </button>
      <div
        className={`${styles.formStatus} ${
          status === "success" ? styles.statusSuccess : status === "error" ? styles.statusError : ""
        }`}
      >
        {status === "success" && "Thank you! Your feedback has been submitted."}
        {status === "error" && "Error submitting feedback. Please try again."}
      </div>
    </form>
  );
}
