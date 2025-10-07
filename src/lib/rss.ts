import { XMLParser } from 'fast-xml-parser';

type RSSFeed = {
  channel: {
    title: string;
    link: string;
    description: string;
    item: RSSItem[];
  };
};

type RSSItem = {
  title: string;
  link: string;
  description: string;
  pubDate: string;
};

export async function parseRSSFeed(feedUrl: string): Promise<RSSFeed> {
  const response = await fetch(feedUrl, { headers: { 'User-Agent': 'gator' } });
  if (!response.ok) {
    throw new Error(`Failed to fetch RSS feed: ${response.statusText}`);
  }
  const data = await response.text();
  const parser = new XMLParser();
  const parsedData = parser.parse(data);

  if (!parsedData.rss.channel) {
    throw new Error('Invalid RSS feed format');
  }

  const channel = parsedData.rss.channel;
  if (!channel.title || !channel.link || !channel.description) {
    throw new Error('Missing required RSS feed fields');
  }

  if (Array.isArray(channel.item) && channel.item.length > 0) {
    channel.item = channel.item.map((item: RSSItem) => ({
      title: item.title,
      link: item.link,
      description: item.description,
      pubDate: item.pubDate,
    }));
  } else {
    channel.item = [];
  }

  return {
    channel: {
      title: channel.title,
      link: channel.link,
      description: channel.description,
      item: channel.item,
    },
  };
}
