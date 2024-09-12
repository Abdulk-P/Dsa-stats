import { create } from "zustand";

interface Theme {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  quinary: string;
  text: string;
}

interface CodolioStats {
  totalQuestions: number;
  totalContests: number;
  awards: number;
  username: string;
}

interface StoreState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resultData: CodolioStats | null;
  setResultData: (data: CodolioStats) => void;
}

const useStore = create<StoreState>((set) => ({
  theme: {
    primary: "#ff8c00",
    secondary: "#ffa500",
    tertiary: "#ffb732",
    quaternary: "#ffcc66",
    quinary: "#ffe0b3",
    text: "#ffffff",
  },
  setTheme: (theme) => set({ theme }),
  resultData: null,
  setResultData: (data) => set({ resultData: data }),
}));

export default useStore;
