import type { Glyph } from 'layout-bmfont-text';
export declare function computePositions(glyphs: Glyph[]): ArrayLike<number>;
export declare function computeUvs(glyphs: Glyph[], texWidth: number, texHeight: number, flipY: boolean): ArrayLike<number>;
