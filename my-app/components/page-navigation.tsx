import Link from "next/link"
import styles from "./page-navigation.module.css"

interface PageNavigationProps {
  previousPage?: {
    href: string
    label: string
  }
  nextPage?: {
    href: string
    label: string
  }
  currentPage: string
}

export default function PageNavigation({ previousPage, nextPage, currentPage }: PageNavigationProps) {
  return (
    <div className={styles.navigation}>
      <div className={styles.navButton}>
        {previousPage ? (
          <Link href={previousPage.href} className={styles.navLink}>
            <div className={styles.arrow}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className={styles.navText}>{previousPage.label}</span>
          </Link>
        ) : (
          <div className={styles.navPlaceholder}></div>
        )}
      </div>

      <div className={styles.pageIndicator}>
        <div className={styles.dots}>
          <div className={`${styles.dot} ${currentPage === "welcome" ? styles.active : ""}`}></div>
          <div className={`${styles.dot} ${currentPage === "register" ? styles.active : ""}`}></div>
          <div className={`${styles.dot} ${currentPage === "login" ? styles.active : ""}`}></div>
          <div className={`${styles.dot} ${currentPage === "settings" ? styles.active : ""}`}></div>
        </div>
      </div>

      <div className={styles.navButton}>
        {nextPage ? (
          <Link href={nextPage.href} className={styles.navLink}>
            <span className={styles.navText}>{nextPage.label}</span>
            <div className={styles.arrow}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18l6-6-6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        ) : (
          <div className={styles.navPlaceholder}></div>
        )}
      </div>
    </div>
  )
}