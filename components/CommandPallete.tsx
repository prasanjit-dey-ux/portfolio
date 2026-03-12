import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Home, User, BookOpen, FileText, Palette, Clock } from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  theme: "light" | "dark";
}

export function CommandPalette({ isOpen, onClose, theme }: CommandPaletteProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, onClose]);

  const pages = [
    { icon: Home, label: "Home", href: "#" },
    { icon: User, label: "About", href: "#about" },
    { icon: BookOpen, label: "Bookshelf", href: "#bookshelf" },
  ];

  const info = [
    { icon: FileText, label: "Notes", href: "#notes" },
    { icon: Palette, label: "Colophon", href: "#colophon" },
    { icon: Clock, label: "Now", href: "#now" },
  ];

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    const displayHours = hours % 12 || 12;
    return `${displayHours}:${minutes.toString().padStart(2, "0")}${ampm}`;
  };

  const isDark = theme === "dark";
  const lightsOn = isDark;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-0 z-50 ${
              isDark ? "bg-black/80" : "bg-black/40"
            } backdrop-blur-sm`}
            onClick={onClose}
          />

          {/* Command Palette */}
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden ${
                isDark
                  ? "bg-[#1a1a1a] border border-[#333]"
                  : "bg-white border border-gray-200"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Info Bar */}
              <div
                className={`px-5 py-3 flex items-center justify-between text-xs ${
                  isDark
                    ? "text-[#999] border-b border-[#333]"
                    : "text-gray-600 border-b border-gray-200"
                }`}
              >
                <span>Glasgow, {getCurrentTime()}</span>
                <div className="flex items-center gap-2">
                  <span>Lights {lightsOn ? "on" : "off"}</span>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      lightsOn ? "bg-emerald-500" : "bg-gray-400"
                    }`}
                  ></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Pages Section */}
                <div className="mb-6">
                  <div
                    className={`px-0 py-1.5 text-xs ${
                      isDark ? "text-[#666]" : "text-gray-500"
                    }`}
                  >
                    Pages
                  </div>
                  <div className="space-y-1">
                    {pages.map((page) => (
                      <button
                        key={page.label}
                        onClick={() => {
                          window.location.href = page.href;
                          onClose();
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                          isDark
                            ? "text-white hover:bg-[#252525]"
                            : "text-gray-900 hover:bg-gray-100"
                        }`}
                      >
                        <page.icon
                          className={`w-4 h-4 ${
                            isDark ? "text-[#999]" : "text-gray-500"
                          }`}
                        />
                        <span>{page.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Info Section */}
                <div className="mb-4">
                  <div
                    className={`px-0 py-1.5 text-xs ${
                      isDark ? "text-[#666]" : "text-gray-500"
                    }`}
                  >
                    Info
                  </div>
                  <div className="space-y-1">
                    {info.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => {
                          window.location.href = item.href;
                          onClose();
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                          isDark
                            ? "text-white hover:bg-[#252525]"
                            : "text-gray-900 hover:bg-gray-100"
                        }`}
                      >
                        <item.icon
                          className={`w-4 h-4 ${
                            isDark ? "text-[#999]" : "text-gray-500"
                          }`}
                        />
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div
                className={`px-5 py-4 flex items-center justify-between ${
                  isDark
                    ? "border-t border-[#333]"
                    : "border-t border-gray-200"
                }`}
              >
                <a
                  href="mailto:hello@cassandratang.com"
                  className={`text-sm transition-colors ${
                    isDark
                      ? "text-[#999] hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  hello@cassandratang.com
                </a>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs ${
                      isDark ? "text-[#666]" : "text-gray-500"
                    }`}
                  >
                    Close
                  </span>
                  <kbd
                    className={`px-2 py-1 rounded text-xs font-mono ${
                      isDark
                        ? "bg-[#252525] border border-[#333] text-[#999]"
                        : "bg-gray-100 border border-gray-300 text-gray-600"
                    }`}
                  >
                    ESC
                  </kbd>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
