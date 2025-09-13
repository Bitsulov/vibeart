import type { RootState } from "app/store/index.js";

export const selectSearchText = (state: RootState) => state.headerForm.searchText;
