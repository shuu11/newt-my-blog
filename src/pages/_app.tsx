import React, { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript' // Language
import 'prismjs/themes/prism-tomorrow.css' // Theme
import 'styles/globals.css'

export default function MyApp({ Component, pageProps }) {
	useEffect(() => {
		Prism.highlightAll()
	}, [])

	return <Component {...pageProps} />
}
