import { Montserrat, Cabin, Fira_Code } from 'next/font/google'
 
// define your variable fonts

// headings
const heading = Montserrat({ subsets: ['latin'], weight: ["600"]})

//sub-headings
const subheading = Montserrat({subsets: ['latin'], weight: ["500"]})

// text
const text = Cabin({ subsets: ['latin'] })

// mono
const monospace = Fira_Code({ subsets: ['latin'], weight: ["400"]})


export { heading, subheading, text, monospace }