import { create } from "zustand";
interface TutorialState {
  curTutorial: string;
  changeTutorial: (newTutorial: string) => void;
}
interface CodeState {
  curCode: string;
  changeCode: (newCode: string) => void;
}
export const useTutorialStore = create<TutorialState>()((set) => ({
  curTutorial: "get",
  //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  //   removeAllBears: () => set({ bears: 0 }),
  changeTutorial: (newTutorial) => set({ curTutorial: newTutorial }),
}));

export const useCodeStore = create<CodeState>()((set) => ({
  curCode: "",
  changeCode: (newCode) => set({ curCode: newCode }),
}));
