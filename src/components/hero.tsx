import { ChevronRight, LucideExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 relative container mx-auto">
      {/* 背景装飾 */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500 opacity-20 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-500 opacity-20 rounded-full blur-3xl -z-10" />

      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl leading-tight font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl ">
                初心者向け
                <br />
                <span className="text-indigo-600">React 作業ライブ。</span>
                <br />
                一緒に学ぼう！
              </h1>
            </div>
            <div className="flex flex-col gap-6 min-[400px]:flex-row">
              <a
                href="/#:~:text=b13o%20もくもく%20LIVE"
                className="h-16 px-12! flex items-center justify-center gap-2 rounded-xl text-white text-lg font-semibold bg-indigo-600 hover:bg-indigo-700"
              >
                概要へ
                <ChevronRight />
              </a>
              <a
                target="_blank"
                href="https://beginner-react.connpass.com/"
                className="h-16 px-12! flex items-center justify-center gap-2 rounded-xl text-indigo-900 border border-gray-200 text-lg font-semibold hover:bg-indigo-50"
              >
                イベントを確認
                <LucideExternalLink />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden border border-gray-200 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-500 opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5/6 h-4/5 bg-white rounded-lg shadow-lg p-4 overflow-hidden">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div className="flex-1 overflow-hidden font-mono text- p-2">
                      <pre className="text-primary py-4">
                        <code className="whitespace-pre-wrap">{`# はじめに；）

❶「やること」を宣言しよう！
❷自由に作業を開始！
  - 見るだけ/質問/相談/雑談etcも大歓迎！
❸最後に「やったこと」を共有しよう🍵

この勉強会用のハッシュタグも作りました！
X でのアウトプットや交流用にどうぞ:
#b13oもくもくLIVE`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
