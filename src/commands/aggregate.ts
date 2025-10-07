import { parseRSSFeed } from 'src/lib/rss';

export async function handlerAgg(_: string) {
  const feedURL = 'https://www.wagslane.dev/index.xml';

  const feedData = await parseRSSFeed(feedURL);
  const feedDataStr = JSON.stringify(feedData, null, 2);
  console.log(feedDataStr);
}
