import type { RootState } from "app/store/index.js";

export const selectIsLoaded = (state: RootState) => state.pageStats.isLoaded;
