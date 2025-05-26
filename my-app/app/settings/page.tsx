import Link from "next/link";
import PageNavigation from "@/components/page-navigation";
import styles from "./settings.module.css";

export default function SettingsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Account Settings</h1>

        <div className={styles.profileSection}>
          <div className={styles.profileHeader}>
            <div className={styles.avatarContainer}>
              <img
                src="/placeholder.svg?height=60&width=60"
                alt="Profile"
                className={styles.avatar}
              />
              <div className={styles.verificationBadge}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="#7c3aed" />
                  <path
                    d="M6 10l2 2 6-6"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className={styles.profileInfo}>
              <h2 className={styles.profileName}>Marry Doe</h2>
              <p className={styles.profileEmail}>Marry@Gmail.Com</p>
            </div>
          </div>

          <div className={styles.profileDescription}>
            <p>
              Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>
          </div>
        </div>

        <div className={styles.footer}>
          <Link href="/" className={styles.backLink}>
            Back to Home
          </Link>
        </div>
      </div>

      <PageNavigation
        currentPage="settings"
        previousPage={{
          href: "/login",
          label: "Login",
        }}
      />
    </div>
  );
}
