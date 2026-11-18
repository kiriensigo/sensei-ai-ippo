// ============================================================
// サイト全体の設定。ここを書き換えれば全ページに反映されます。
// ============================================================

export const SITE = {
  // ★ 仮の名前です。決まったら変更してください
  name: '先生のためのAIはじめの一歩',
  shortName: 'AIはじめの一歩',
  tagline: '登録だけでOK。今日から使えるAIのきほんとコツ',
  description:
    '小学校の先生向けに、AIの使い方のきほん・約束・コツ・場面別の例を、初心者にもわかる形でまとめたガイドです。',
  // ★ 公開URLが決まったら変更
  url: 'https://sensei-ai-ippo.pages.dev',
  lang: 'ja',
  operatorLabel: '元小学校教師が運営しています',
  // Cloudflare Web Analyticsのトークン（任意）。空なら読み込みません
  cfAnalyticsToken: '',
};

// ガイドの章立て。order順に並びます
export const SECTIONS = [
  { slug: 'basic', name: 'きほん', desc: 'まずはここから。約束とツールの選び方' },
  { slug: 'tips', name: '5つのコツ', desc: 'うまく頼むためのコツ' },
  { slug: 'scenes', name: '場面別にやってみる', desc: 'そのまま試せるプロンプト付き' },
  { slug: 'more', name: 'もっと知りたい', desc: '苦手なこと・子どもとAI・プロンプト集' },
] as const;

export type SectionSlug = (typeof SECTIONS)[number]['slug'];
