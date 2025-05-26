"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function WelcomePage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/register");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to PopX</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className={styles.buttonContainer}>
          <Link href="/register" className={styles.primaryButton}>
            Create Account
          </Link>
          <Link href="/login" className={styles.secondaryButton}>
            Already Registered? Login
          </Link>
        </div>

        <div className={styles.navigationContainer}>
          <button 
            onClick={handleGetStarted}
            className={styles.navigationButton}
          >
            Click To View My Task →
          </button>
        </div>
      </div>
    </div>
  );
}