import { create } from "zustand";
interface TutorialState {
  curTutorial: string;
  changeTutorial: (newTutorial: string) => void;
}
interface CodeState {
  curCode: string;
  changeCode: (newCode: string) => void;
}

interface MessagesArrayState {
  messArr: Array<any>;
  setMessArr: (newMessArr: string[]) => void;
}

interface PidState {
  curPid: string;
  setCurPid: (newPid: string) => void;
}

export const useTutorialStore = create<TutorialState>()((set) => ({
  curTutorial: "GET Request",
  //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  //   removeAllBears: () => set({ bears: 0 }),
  changeTutorial: (newTutorial) => set({ curTutorial: newTutorial }),
}));

export const useCodeStore = create<CodeState>()((set) => ({
  curCode: "",
  changeCode: (newCode) => set({ curCode: newCode }),
}));

export const useMessagesArrayStore = create<MessagesArrayState>()((set) => ({
  messArr: [],
  setMessArr: (newMessArr) => set({ messArr: newMessArr }),
}));

export const usePidStore = create<PidState>()((set) => ({
  curPid: "",
  setCurPid: (newPid) => set({ curPid: newPid }),
}));
