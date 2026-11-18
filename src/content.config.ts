import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const guide = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/guide' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.enum(['basic', 'tips', 'scenes', 'more']),
    order: z.number(),
    // ページ冒頭の「このページのポイント」。研修スライドの要点にもなる
    summary: z.array(z.string()).min(1).max(5),
    // 最終確認日（AIの画面・無料枠などを確認した日）
    checkedAt: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { guide };
