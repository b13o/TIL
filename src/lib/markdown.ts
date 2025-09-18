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

// Markdownをパースして、フロントマターとHTML化した内容を返す
export async function parseMarkdown(markdown: string) {
  // remarkでMarkdownをHTMLに変換
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(markdown);

  return processedContent.toString();
}

export const getMarkdownContent = async () => {
  const content = await fetchFileContent("README.md");
  return parseMarkdown(content);
};
