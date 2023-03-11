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

export async function getStaticProps({
	params,
}: {
	params: { slug: string }
}): Promise<{ props: HomeProps }> {
	const { slug } = params
	const app = await fetchApp()
	const { tags } = await fetchTags()
	const { authors } = await fetchAuthors()
	const { archives } = await fetchArchives()

	const author = authors.find((author) => author.slug === slug)
	const { articles, total } = author
		? await fetchArticles({
				author: author._id,
		  })
		: { articles: [], total: 0 }

	return {
		props: {
			app,
			tags,
			authors,
			archives,
			articles,
			total,
			authorSlug: slug,
		},
	}
}

export async function getStaticPaths() {
	const { authors } = await fetchAuthors()
	return {
		paths: authors.map((author) => ({
			params: {
				slug: author.slug,
			},
		})),
		fallback: 'blocking',
	}
}
