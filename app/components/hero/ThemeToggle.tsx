import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import SunIcon from '../../images/SunIcon'
import MoonIcon from '../../images/MoonIcon'
import styles from './themeToggle.module.css'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme;


  function toggleTheme() {
    return currentTheme === "light" ? setTheme("dark") : setTheme("light");
  }

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
  <div className={styles.themeToggle}>
    <button className={styles.themeButton} onClick={toggleTheme}>
      {currentTheme === "light" ? <SunIcon /> : <MoonIcon />}
    </button>
    
  </div>

  )
}

export default ThemeSwitch;