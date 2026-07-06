import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const notes = (await getCollection('notes', ({ data }) => !data.draft)).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: '罗澜 — Notes',
    description: 'Working thoughts on research, systems, learning, and becoming.',
    site: context.site,
    items: notes.map(note => ({ title: note.data.title, description: note.data.description, pubDate: note.data.date, link: `/notes/${note.id}/`, categories: [note.data.category, ...note.data.tags] })),
    customData: '<language>en-us</language>'
  });
}
