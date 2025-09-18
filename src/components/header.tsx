import { FileText, Hash } from "lucide-react";
import Icons from "./icons";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 container mx-auto w-full">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <a href="/" className="flex items-center space-x-4">
            <span className="font-bold text-xl md:text-2xl tracking-tight flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                <Hash className="w-5 h-5 text-indigo-50" />
              </div>
              b13oもくもくLIVE 🫐🌿🎧
            </span>
          </a>
        </div>
        <div className="flex items-center gap-8">
          <a
            href="https://github.com/b13o/TIL"
            target="_blank"
            className="flex text-lg items-center hover:opacity-60"
          >
            <Icons.gitHub className="h-4 w-4 mr-2" />
            GitHub
          </a>
          <a
            href="/#:~:text=b13o%20もくもく%20LIVE"
            className="flex text-lg items-center hover:opacity-60"
          >
            <FileText className="h-4 w-4 mr-2" />
            README
          </a>
        </div>
      </div>
    </header>
  );
}
