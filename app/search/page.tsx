import React from "react";
import NewsList from "../../components/news-list";
import fetchNews from "../../lib/fetchNews";

type Props = {
	searchParams?: { term: string };
};

async function SearchPage({ searchParams }: Props) {
	const news: NewsResponse = await fetchNews("general", searchParams?.term, true);
	await new Promise((resolve) => setTimeout(resolve, 3000));

	return (
		<div>
			<h1 className="headerTitle">Search Results for: {searchParams?.term}</h1>
			<NewsList news={news} />
		</div>
	);
}

export default SearchPage;
