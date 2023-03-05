import React from "react";
import NewsList from "../components/news-list";
import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";

async function HomePage() {
	const news: NewsResponse = await fetchNews(categories.join(","));

	return (
		<div>
			<NewsList news={news} />
		</div>
	);
}

export default HomePage;
