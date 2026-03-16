"use client"

import { useState, useEffect } from "react";
import { CommandPalette } from "@/components/CommandPallete";
import { Sun, Moon } from "lucide-react";

export default function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [workFilter, setWorkFilter] = useState<"all" | "articles" | "components">("all");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for Shift + K
      if (e.shiftKey && e.key === "K") {
        e.preventDefault();
        setIsCommandPaletteOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const isDark = theme === "dark";

  return (
    <div className={`min-h-screen ${isDark ? "bg-[#1a1a1a] text-white" : "bg-[#f5f5f5] text-gray-900"}`}>
      <CommandPalette 
        isOpen={isCommandPaletteOpen} 
        onClose={() => setIsCommandPaletteOpen(false)}
        theme={theme}
      />

      {/* Header */}
      <header className="px-6 py-8">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="text-sm font-mono">NK</div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded transition-colors ${
                isDark
                  ? "bg-[#252525] border border-[#333] hover:bg-[#2a2a2a]"
                  : "bg-white border border-gray-300 hover:bg-gray-50"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-[#999]" />
              ) : (
                <Moon className="w-4 h-4 text-gray-600" />
              )}
            </button>
            <button
              onClick={() => setIsCommandPaletteOpen(true)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors ${
                isDark
                  ? "bg-[#252525] border border-[#333] hover:bg-[#2a2a2a]"
                  : "bg-white border border-gray-300 hover:bg-gray-50"
              }`}
            >
              <span className={`text-xs font-mono ${isDark ? "text-[#999]" : "text-gray-600"}`}>⇧K</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-20">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Profile Header */}
          <div className="flex items-start gap-4">
            <img
              src="https://images.unsplash.com/photo-1771072428050-1492abb58f4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGRlc2lnbmVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczMzEyOTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Profile"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h1 className="text-base">Prasanjit Dey</h1>
              <p className={`text-sm ${isDark ? "text-[#999]" : "text-gray-600"}`}>Design Engineer @Remote</p>
            </div>
          </div>

          {/* Status */}
          <div className="inline-block">
            <div className={`rounded px-4 py-2 text-xs font-mono ${
              isDark 
                ? "bg-[#252525] border border-[#333] text-[#999]"
                : "bg-white border border-gray-300 text-gray-600"
            }`}>
              1 week ago - On holiday in Japan and Hong Kong
            </div>
          </div>

          {/* Profile Section */}
          <section>
            <h2 className={`text-xs font-mono mb-4 uppercase tracking-wider ${isDark ? "text-[#999]" : "text-gray-600"}`}>Profile</h2>
            <div className={`space-y-4 text-sm leading-relaxed ${isDark ? "text-[#ccc]" : "text-gray-700"}`}>
              <p>
                A full stack designer based in Glasgow, working remotely. I shape mess into simple,
                meaningful experiences.
              </p>
              <p>
                When Im offline, Im usually busy with Ashtanga yoga, horses and my Frenchie.
              </p>
              <p>CV and latest portfolio of work available upon request.</p>
            </div>
          </section>

          {/* Articles & Components Section */}
          <section>
            <h2 className="text-2xl mb-6">Work</h2>
            
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 mb-6">
              <button
                onClick={() => setWorkFilter("all")}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  workFilter === "all"
                    ? isDark
                      ? "bg-white text-black"
                      : "bg-black text-white"
                    : isDark
                    ? "bg-[#252525] text-[#999] hover:bg-[#2a2a2a]"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setWorkFilter("articles")}
                className={`px-4 py-2 rounded-full text-sm flex items-center gap-2 transition-colors ${
                  workFilter === "articles"
                    ? isDark
                      ? "bg-white text-black"
                      : "bg-black text-white"
                    : isDark
                    ? "bg-[#252525] text-[#999] hover:bg-[#2a2a2a]"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Articles
              </button>
              <button
                onClick={() => setWorkFilter("components")}
                className={`px-4 py-2 rounded-full text-sm flex items-center gap-2 transition-colors ${
                  workFilter === "components"
                    ? isDark
                      ? "bg-white text-black"
                      : "bg-black text-white"
                    : isDark
                    ? "bg-[#252525] text-[#999] hover:bg-[#2a2a2a]"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                Components
              </button>
            </div>

            {/* Articles List */}
            <div className="space-y-4">
              {[
                { title: "Details That Make Interfaces Feel Better", date: "Mar 10, 2026", type: "article" },
                { title: "Using Gestures in Motion", date: "Feb 11, 2026", type: "article" },
                { title: "Drag Gestures on the Web", date: "Jan 27, 2026", type: "article" },
                { title: "Using AI as a Design Engineer", date: "Jan 14, 2026", type: "article" },
                { title: "Will Change in CSS", date: "Dec 15, 2025", type: "article" },
                { title: "Infinite Card Stack", date: "Dec 9, 2025", type: "component" },
                { title: "Clip Path Buttons", date: "Dec 1, 2025", type: "component" },
                { title: "Shader Playground", date: "Nov 25, 2025", type: "component" },
              ]
                .filter((item) => {
                  if (workFilter === "all") return true;
                  if (workFilter === "articles") return item.type === "article";
                  if (workFilter === "components") return item.type === "component";
                  return true;
                })
                .map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`flex items-start gap-4 p-3 rounded-lg transition-colors ${
                      isDark ? "hover:bg-[#252525]" : "hover:bg-gray-100"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded flex items-center justify-center flex-shrink-0 ${
                      isDark ? "bg-[#252525]" : "bg-gray-200"
                    }`}>
                      {item.type === "article" ? (
                        <svg className={`w-5 h-5 ${isDark ? "text-[#999]" : "text-gray-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      ) : (
                        <svg className={`w-5 h-5 ${isDark ? "text-[#999]" : "text-gray-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base mb-1">{item.title}</h3>
                      <p className={`text-sm ${isDark ? "text-[#999]" : "text-gray-600"}`}>{item.date}</p>
                    </div>
                  </a>
                ))}
            </div>
          </section>

          {/* Elsewhere Section */}
          <section>
            <h2 className={`text-xs font-mono mb-2 uppercase tracking-wider ${isDark ? "text-[#999]" : "text-gray-600"}`}>
              Elsewhere
            </h2>
            <p className="text-sm mb-6">Where to find me online</p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <span className={`w-28 ${isDark ? "text-[#999]" : "text-gray-600"}`}>Mail</span>
                <a href="mailto:hello@cassandratang.com" className={`transition-colors ${
                  isDark ? "text-white hover:text-[#999]" : "text-gray-900 hover:text-gray-600"
                }`}>
                  hello@cassandratang.com
                </a>
              </div>
              <div className="flex items-center">
                <span className={`w-28 ${isDark ? "text-[#999]" : "text-gray-600"}`}>LinkedIn</span>
                <a href="https://linkedin.com/in/cassandra-tang" className={`transition-colors ${
                  isDark ? "text-white hover:text-[#999]" : "text-gray-900 hover:text-gray-600"
                }`}>
                  cassandra-tang
                </a>
              </div>
              <div className="flex items-center">
                <span className={`w-28 ${isDark ? "text-[#999]" : "text-gray-600"}`}>Instagram</span>
                <a href="https://instagram.com/typecass" className={`transition-colors ${
                  isDark ? "text-white hover:text-[#999]" : "text-gray-900 hover:text-gray-600"
                }`}>
                  @typecass
                </a>
              </div>
              <div className="flex items-center">
                <span className={`w-28 ${isDark ? "text-[#999]" : "text-gray-600"}`}>Newsletter</span>
                <a href="#" className={`transition-colors ${
                  isDark ? "text-white hover:text-[#999]" : "text-gray-900 hover:text-gray-600"
                }`}>
                  Change, Logged
                </a>
              </div>
            </div>
          </section>

          {/* Last Played Section */}
          <section>
            <h2 className={`text-xs font-mono mb-6 uppercase tracking-wider ${isDark ? "text-[#999]" : "text-gray-600"}`}>
              Last played (2 weeks ago)
            </h2>
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=120&h=120&fit=crop"
                alt="Album artwork"
                className="w-12 h-12 rounded object-cover"
              />
              <div>
                <h3 className="text-sm mb-0.5">Deja</h3>
                <p className={`text-sm ${isDark ? "text-[#999]" : "text-gray-600"}`}>Smile High, Teddy Roxpin</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className={`px-6 py-12 border-t ${isDark ? "border-[#333]" : "border-gray-300"}`}>
        <div className={`max-w-3xl mx-auto flex justify-between items-center text-sm ${isDark ? "text-[#999]" : "text-gray-600"}`}>
          <p>© 2026 Cassandra Tang</p>
          <p>When in doubt, minimise.</p>
        </div>
      </footer>
    </div>
  );
}
