import { create } from "zustand";

interface IProjectStoreState {
  projectId: string | null;
  setProjectId: (projectId: string | null) => void;
}

export const useProjectStore = create<IProjectStoreState>()((set) => ({
  projectId: null,
  setProjectId: (projectId: string | null) => set({ projectId })
}));
