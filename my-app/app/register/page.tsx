"use client";
import { useState } from "react";
import type React from "react";

import Link from "next/link";
import PageNavigation from "@/components/page-navigation";
import styles from "./register.module.css";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "yes",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      isAgency: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Create your PopX account</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="fullName" className={styles.label}>
              Full Name*
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Marry Doe"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="phoneNumber" className={styles.label}>
              Phone number*
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Marry Doe"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Marry Doe"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              Password*
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Marry Doe"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="companyName" className={styles.label}>
              Company name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Marry Doe"
              className={styles.input}
            />
          </div>

          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>Are you an Agency?*</label>
            <div className={styles.radioOptions}>
              <label className={styles.radioOption}>
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === "yes"}
                  onChange={() => handleRadioChange("yes")}
                  className={styles.radioInput}
                />
                <span className={styles.radioText}>Yes</span>
              </label>
              <label className={styles.radioOption}>
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === "no"}
                  onChange={() => handleRadioChange("no")}
                  className={styles.radioInput}
                />
                <span className={styles.radioText}>No</span>
              </label>
            </div>
          </div>

          <button type="submit" className={styles.createButton}>
            Create Account
          </button>
        </form>

        <div className={styles.footer}>
          <Link href="/login" className={styles.backLink}>
            Already have an account? Login
          </Link>
        </div>
      </div>

      <PageNavigation
        currentPage="register"
        previousPage={{
          href: "/",
          label: "Welcome",
        }}
        nextPage={{
          href: "/login",
          label: "Login",
        }}
      />
    </div>
  );
}
