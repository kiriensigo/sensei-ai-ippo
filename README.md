# 先生のためのAIはじめの一歩（仮）

先生向けAI活用ガイドの静的サイト（Astro）。ホスティング費用0円（Cloudflare Pages）で運用する想定です。

## まずここを書き換える
`src/config/site.ts`
- `name` / `shortName` / `tagline`：サイト名（今は仮）
- `url`：公開URL（Cloudflare Pagesの初期URLなど）
- `cfAnalyticsToken`：Cloudflare Web Analyticsのトークン（任意）

## 開発
```
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に静的ファイルを出力
```

## ページを増やす・直す
`src/content/guide/` のMarkdownを編集します。先頭の設定（frontmatter）：
- `section`：basic（きほん）/ tips（コツ）/ scenes（場面別）/ more（もっと）
- `order`：並び順（目次・前後ナビはこの順）
- `summary`：ページ冒頭の「このページのポイント」（研修スライドの要点にも使える）
- `checkedAt`：最終確認日
プロンプトは ``` で囲むと、自動で「コピー」ボタンが付きます。

## 公開（Cloudflare Pages・無料）
1. このフォルダをGitHubのリポジトリにpush
2. Cloudflare → Workers & Pages → Create → Pages → Connect to Git
3. Build command: `npm run build` / Build output directory: `dist`
4. 公開後、`src/config/site.ts` の `url` を実際のURLに更新して再デプロイ

## 構成
- `src/pages/` ページ（トップ・ガイド目次・ガイド各ページ・このサイトについて）
- `src/content/guide/` ガイド本文（draft: true は本番に出ない）
- `src/components/` `src/layouts/` 共通部品
- `src/styles/global.css` デザイン（色は先頭の変数で変更）
