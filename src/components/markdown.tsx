import { useEffect, useState } from "react";
import { getMarkdownContent } from "../lib/markdown";

// const sample = `
// # 見出し１のテスト
// これは、マークダウンの表示のテストです！

// ## マークダウンのサンプルです！

// これは、p タグとして表示されます！

// 下記は箇条書きです：
// - あああ
// - いいい
// - ううう

// **どうでしょうか？**
// 表示確認！
// `;

const Markdown = () => {
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    let active = true;

    (async () => {
      setIsLoading(true);
      setError(null);

      try {
        const content = await getMarkdownContent();
        if (active) {
          setContent(content);
        }
      } catch (error) {
        console.error("Failed to fetch quote:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  return (
    <div
      className="prose dark:prose-invert w-full mx-auto py-24"
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
};

export default Markdown;
