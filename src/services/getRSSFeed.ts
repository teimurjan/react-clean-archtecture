import { fetchData } from '../lib/fetchData';

export const getRSSFeed = async (variables: { url: string; }) => {
  const GET_FEEDS_QUERY = `
  query GetFeeds($url: string) {
    rss {
      rss2Feed(url: $url) {
        items {
          title
          description
          link
          pubDate
        }
      }
    }
  }
`;

  const results = await fetchData(GET_FEEDS_QUERY, {
    variables: variables,
  });

  return results;
};
