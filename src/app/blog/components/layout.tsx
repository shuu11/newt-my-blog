import { AppMeta } from 'newt-client-js'
import { PropsWithChildren } from 'react'
import styles from '@a/features/styles/Layout.module.css'
import { Badge } from './badge'
import { Footer } from './footer'
import { Header } from './header'

export function Layout({
	app,
	children,
}: PropsWithChildren<{
	app: AppMeta
}>) {
	return (
		<div className={styles.Wrapper}>
			<Header app={app} />
			{children}
			<Footer app={app} />
			<Badge />
		</div>
	)
}
