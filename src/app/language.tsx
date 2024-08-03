"use client";
import { create } from 'zustand'
import { useEffect } from "react"
import { Dictionary } from "./dictionary"

type Language = {
  iso6391: string;
  name: string;
  setLanguage: (language: string) => void;
}

const useLanguageStore = create<Language>((set) => ({
  iso6391: "en",
  name: "English",
  setLanguage: (language: string) => {
    set((_state) => ({
      iso6391: language,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      name: Dictionary[language],
    }))
  },
}));

export default function LanguageLoader(): void {
  const [language, setLanguage] = useLanguageStore((state) => [state.iso6391, state.setLanguage])

  useEffect(() => {
    if (!language) {
      setLanguage("en")
    }
  }, [language, setLanguage])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])
}

export function LanguageSpan(): JSX.Element {
  const [language, setLanguage] = useLanguageStore((state) => [state.iso6391, state.setLanguage])

  return <span className="hidden">{language}</span>;
}

