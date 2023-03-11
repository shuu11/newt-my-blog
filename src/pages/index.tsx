import {
	fetchApp,
	fetchArchives,
	fetchArticles,
	fetchAuthors,
	fetchTags,
} from '@a/features/lib/api'
import { Home, HomeProps } from '@a/components/home'

export default function TopPage(props: HomeProps) {
	return <Home {...props} />
}

export async function getStaticProps(): Promise<{ props: HomeProps }> {
	const app = await fetchApp()
	const { tags } = await fetchTags()
	const { authors } = await fetchAuthors()
	const { archives } = await fetchArchives()
	const { articles, total } = await fetchArticles()
	return {
		props: {
			app,
			tags,
			authors,
			archives,
			articles,
			total,
		},
	}
}
