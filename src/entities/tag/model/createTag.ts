import type { TagType } from "./types.js";

export function createTag({ id = Date.now(), name }: TagType) {
    return { id, name };
}
