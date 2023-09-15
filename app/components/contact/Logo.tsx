import * as React from "react"
import styles from './logo.module.css'

const Logo = () => (

	<svg
	className={styles.logoImg}
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 1.5,
    }}
    viewBox="0 0 313 313"
  >
    <path
	className={styles.logo}
      d="m54.208 91.441.016 25.347 63.67.361c3.751 5.164 3.482 11.024 0 17.441H87.081v-5.738l-33.133-.048.006 4.619v28.581h8.262v27.06h24.913v-30.015l22.344.022 29.351 30.295h16.261l-28.199-31.087c9.977-2.827 17.064-9.37 19.708-21.624v-21.491c-2.507-13.899-11.031-22.109-26.221-24.016h-11.486L89.16 109.994h-5.077l17.673-18.508-47.548-.045ZM189.545 149.797l.017 36.458 2.73 2.231c-17.562-.093-27.55-8.426-30.702-24.196v-48.345c3.512-17.089 13.958-23.992 29.316-23.68l-1.275 2.625v35.169l35.73-32.328-14.854-6.583h48.045l-3.026 13.03-38.212 36.079 37.312 34.856 3.898 14.253h-40.501l3.837-5.61h5.796l-38.111-33.959Z"
      style={{
        fill: "none",
        strokeWidth: "1.04px",
      }}
    />
  </svg>)
export default Logo
