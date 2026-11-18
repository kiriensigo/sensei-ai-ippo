import { getCollection } from 'astro:content';
import { SECTIONS } from '../config/site';

const visible = ({ data }: { data: { draft: boolean } }) => import.meta.env.DEV || !data.draft;

export async function getGuide() {
  const all = (await getCollection('guide')).filter(visible);
  return all.sort((a, b) => a.data.order - b.data.order);
}

export async function getGuideBySection() {
  const all = await getGuide();
  return SECTIONS.map((s) => ({ ...s, pages: all.filter((p) => p.data.section === s.slug) }));
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Tokyo' });
