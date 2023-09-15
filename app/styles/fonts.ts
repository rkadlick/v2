import { Montserrat, Cabin, Fira_Code, Ubuntu, Overpass, Overpass_Mono } from 'next/font/google'
 
// define your variable fonts

// headings
const heading = Montserrat({ subsets: ['latin'], weight: ["600"]})

//sub-headings
const subheading = Montserrat({subsets: ['latin'], weight: ["500"]})

// text
const text = Overpass({ subsets: ['latin'], weight: ["300"] })

// mono
const monospace = Overpass_Mono({ subsets: ['latin'], weight: ["400"]})


export { heading, subheading, text, monospace }