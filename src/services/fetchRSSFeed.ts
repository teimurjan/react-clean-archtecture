import { fetchOneGraph } from '../lib/fetchOneGraph';

export const fetchRSSFeed = async (variables: { url: string; }) => {
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

  const results = await fetchOneGraph(GET_FEEDS_QUERY, {
    variables: variables,
  });

  return results;
};
