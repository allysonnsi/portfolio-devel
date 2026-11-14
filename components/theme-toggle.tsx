'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    let saved: string | null = null;
    try { saved = localStorage.getItem('theme'); } catch { /* Theme remains usable when storage is unavailable. */ }
    const enabled = saved ? saved === 'dark' : true;
    setDark(enabled);
    document.documentElement.classList.toggle('dark', enabled);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch { /* Apply the theme for this visit. */ }
    document.documentElement.classList.toggle('dark', next);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="focus-ring relative inline-flex h-8 w-16 items-center rounded-full bg-slate-200 transition-colors dark:bg-neutral-800"
      aria-pressed={dark}
      aria-label={dark ? 'Ativar modo claro' : 'Ativar modo escuro'}
    >
      <span className={`absolute left-1 flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 text-white transition-transform dark:bg-white dark:text-slate-950 ${dark ? 'translate-x-8' : ''}`}>
        {dark ? <Sun aria-hidden="true" size={14} /> : <Moon aria-hidden="true" size={14} />}
      </span>
    </button>
  );
}
