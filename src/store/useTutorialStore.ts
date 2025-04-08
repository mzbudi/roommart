import { create } from "zustand";

interface TutorialStore {
  hasSeenTutorial: boolean;
  setHasSeenTutorial: (value: boolean) => void;
}

export const useTutorialStore = create<TutorialStore>((set) => ({
  hasSeenTutorial: localStorage.getItem("hasSeenTutorial") === "true",
  setHasSeenTutorial: (value) => {
    localStorage.setItem("hasSeenTutorial", String(value));
    set({ hasSeenTutorial: value });
  },
}));
