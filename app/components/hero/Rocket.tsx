import * as React from "react"
import styles from './rocket.module.css'

const Rocket = () => (
  <svg className={styles.rocketImg} width="100%" height="100%" viewBox="0 0 313 313" version="1.1" xmlns="http://www.w3.org/2000/svg">
		<g className={styles.rocket}>
			<path className={styles.topWing}
				d="M127.251,162.358c-6.597,-7.486 -14.691,-13.799 -24.927,-18.432c23.545,-15.219 41.602,-22.217 52.607,-18.655c-11.789,11.975 -21.197,24.31 -27.68,37.087Z"
				style={{
        fill: "none",
        strokeWidth: "2.08px",
      }} />
			<path className={styles.bottomWing}
				d="M163.76,195.132c8.025,5.93 13.85,12.682 19.346,22.483c13.14,-24.766 18.562,-43.357 14.068,-54.015c-10.918,12.773 -21.24,23.976 -33.414,31.532Z"
				style={{
        fill: "none",
        strokeWidth: "2.08px",
      }} />
			<g className={styles.rocketBody}>
				<path
					d="M113.894,188.155l25.126,22.865c54.413,-30.099 83.97,-74.349 82.568,-118.261c-45.83,4.265 -79.925,35.324 -107.694,95.396Z"
					style={{
        fill: "none",
        strokeWidth: "2.08px",
      }} />
				<path d="M181.637,104.815c16.619,4.171 28.917,15.526 32.135,29.371"
					style={{
        fill: "none",
        strokeWidth: "2.08px",
      }} />
			</g>
			<g className={styles.windows}>
				<ellipse cx="174.25" cy="146.101" rx="13.744" ry="13.803"
					style={{
        fill: "none",
        strokeWidth: "2.08px",
      }} />
				<ellipse cx="152.356" cy="170.543" rx="8.15" ry="8.185"
					style={{
        fill: "none",
        strokeWidth: "2.08px",
      }} />
			</g>
			<g className={styles.flames}>
				<path className={styles.outerFlames}
					d="M67.783,256.186c10.355,-13.696 19.13,-31.073 23.234,-41.632c4.572,-11.767 20.573,-21.883 34.34,-15.967c7.677,8.459 7.666,22.736 -4.356,33.648c-8.884,8.062 -34.766,16.279 -44.174,31.759"
					style={{
        fill: "none",
        strokeWidth: "2.08px",
      }} />
				<g className={styles.flameLines}>
					<path className={styles.flameLineT}
						d="M122.532,200.777c-10.225,-1.107 -21.7,3.946 -25.159,10.243c-6.025,12.789 -13.446,29.489 -25.045,45.894"
						style={{
        fill: "none",
        strokeWidth: "2.08px",
      }} />
					<path className={styles.flameLineB}
						d="M125.422,203.667c1.107,10.225 -2.718,23.294 -9.015,26.753c-18.794,7.301 -30.953,18.606 -41.034,28.862"
						style={{
        fill: "none",
        strokeWidth: "2.08px",
      }} />
				</g>
			</g>
			<g className={styles.rocketLines}>
				<path className={styles.rocketLineT}
					d="M221.635,88.874c-24.304,1.997 -49.201,9.47 -68.677,30.627c-19.89,1.541 -40.131,8.563 -57.189,23.857c10.796,6.51 22.358,14.695 25.792,20.625l-12.505,22.139"
					style={{
        fill: "none",
        strokeWidth: "2.08px",
      }} />
				<path className={styles.rocketLineB}
					d="M225.898,92.759c-1.199,19.783 1.269,35.546 -22.665,70.773c0.939,15.842 -4.592,42.996 -19.836,61.85c-6.51,-10.796 -14.011,-21.452 -19.941,-24.885l-22.14,12.504"
					style={{
        fill: "none",
        strokeWidth: "2.08px",
      }} />
			</g>
		</g>
		<ellipse className={styles.circleStarBl} cx="274.489" cy="219.117" rx="5.795" ry="5.82"
			style={{
        fill: "none",
        strokeWidth: "2.08px",
      }} />
		<ellipse className={styles.circleStarTl} cx="101.613" cy="101.615" rx="5.795" ry="5.82"
			style={{
        fill: "none",
        strokeWidth: "2.08px",
      }} />
		<ellipse className={styles.circleStarTs} cx="124.003" cy="38.806" rx="3.649" ry="3.613"
			style={{
        fill: "none",
        strokeWidth: "2.08px",
      }} />
		<ellipse className={styles.circleStarBs} cx="159.899" cy="271.132" rx="3.649" ry="3.613"
			style={{
        fill: "none",
        strokeWidth: "2.08px",
      }} />
		<g className={styles.plusStarTl}>
			<path d="M30.38,69.519l-0.04,13.523" style={{
        fill: "none",
        strokeWidth: "2.08px",
      }} />
			<path d="M23.917,76.28l12.926,0" style={{
        fill: "none",
        strokeWidth: "2.08px",
      }} />
		</g>
		<g className={styles.plusStarTs}>
			<path d="M50.09,176.49l-0.028,9.299" style={{
        fill: "none",
        strokeWidth: "2.08px",
      }} />
			<path d="M45.646,181.139l8.888,0" style={{
        fill: "none",
        strokeWidth: "2.08px",
      }} />
		</g>
		<g className={styles.plusStarBs}>
			<path d="M270.045,151.601l-0.028,9.298" style={{
        fill: "none",
        strokeWidth: "2.08px",
      }} />
			<path d="M265.601,156.25l8.888,0" style={{
        fill: "none",
        strokeWidth: "2.08px",
      }} />
		</g>
		<g className={styles.plusStarBl}>
			<path d="M214.406,267.983l-0.041,13.523" style={{
        fill: "none",
        strokeWidth: "2.08px",
      }} />
			<path d="M207.943,274.744l12.926,0" style={{
        fill: "none",
        strokeWidth: "2.08px",
      }} />
		</g>
	</svg>
)
export default Rocket
