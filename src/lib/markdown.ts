import { remark } from "remark";
import html from "remark-html";

// 今回使用するコンテンツのリポジトリ
const REPO_OWNER = "b13o";
const REPO_NAME = "TIL";

// GitHub API URL
const RAW_CONTENT_URL = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/main`;

// ファイルの内容を取得する
export async function fetchFileContent(path: string) {
  const response = await fetch(`${RAW_CONTENT_URL}/${path}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch file: ${response.status}`);
  }

  return await response.text();
}

// Markdownから不要な要素を除去する関数
function cleanMarkdownContent(markdown: string): string {
  let cleanedMarkdown = markdown;

  // HTMLの<img>タグを含む行を除去
  cleanedMarkdown = cleanedMarkdown
    .split("\n")
    .filter((line) => !line.includes("<img"))
    .join("\n");

  // <p>タグで囲まれた画像ブロックを除去
  cleanedMarkdown = cleanedMarkdown.replace(
    /<p[^>]*>[\s\S]*?<img[\s\S]*?<\/p>/gi,
    ""
  );

  // Markdownの画像記法を除去 ![alt](url)
  cleanedMarkdown = cleanedMarkdown.replace(/!\[[^\]]*\]\([^)]*\)/g, "");

  // Markdownのリンク付き画像記法を除去 [![alt](url)][link]
  cleanedMarkdown = cleanedMarkdown.replace(
    /\[!\[[^\]]*\]\([^)]*\)\]\[[^\]]*\]/g,
    ""
  );

  // GitHub特有の記法を除去
  // [!IMPORTANT], [!NOTE], [!WARNING], [!TIP], [!CAUTION] など
  cleanedMarkdown = cleanedMarkdown.replace(
    /\[!(IMPORTANT|NOTE|WARNING|TIP|CAUTION)\]/gi,
    ""
  );

  return cleanedMarkdown;
}

// Markdownをパースして、フロントマターとHTML化した内容を返す
export async function parseMarkdown(markdown: string) {
  // テキストレベルで不要な要素を除去
  const cleanedMarkdown = cleanMarkdownContent(markdown);

  // remarkでMarkdownをHTMLに変換
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(cleanedMarkdown);

  return processedContent.toString();
}

export const getMarkdownContent = async () => {
  const content = await fetchFileContent("README.md");
  return parseMarkdown(content);
};
