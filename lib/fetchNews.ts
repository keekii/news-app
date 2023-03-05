import { categories } from "./../constants";
import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (category?: Category | string, keywords?: string, isDynamic?: boolean) => {
	const query = gql`
		query MyQuery($keywords: String, $access_key: String!, $categories: String!) {
			myQuery(access_key: $access_key, countries: "gb", keywords: $keywords, categories: $categories) {
				data {
					author
					category
					description
					country
					language
					image
					published_at
					source
					title
					url
				}
				pagination {
					count
					limit
					total
					offset
				}
			}
		}
	`;

	let headers: any = {};

	headers["Content-Type"] = "application/json";

	headers["Authorization"] =
		"apikey fernpark::stepzen.io+1000::ee7f4c39108b790bf23da5fe5cdb989fbd2c8a6545468963ce83ac36c24c2dfc";

	let requestOptions: any = {
		method: "POST",
		headers: headers,
		cache: isDynamic ? "no-cache" : "default",
		next: isDynamic ? { revalidate: 0 } : { revalidate: 60 },
		body: JSON.stringify({
			query,
			variables: {
				access_key: "0267386dfd63cc1284b95504bde90502",
				categories: category,
				keywords: keywords, // provide the keywords variable here
			},
		}),
	};

	const res = await fetch("https://fernpark.stepzen.net/api/mortal-quokka/__graphql", requestOptions);

	const newResponse = await res.json();

	const news = sortNewsByImage(newResponse.data.myQuery);

	return news;
};

export default fetchNews;
