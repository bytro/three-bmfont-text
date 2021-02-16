/// <reference path="./layout-bmfont-text.d.ts" />
import { Glyph, TextLayout, TextOptions } from 'layout-bmfont-text';
import { BufferGeometry } from 'three';
export * from 'layout-bmfont-text';
export interface TextGeometryOptions extends TextOptions {
    /** whether the texture will be Y-flipped (default true) */
    flipY?: boolean;
    /** whether to construct this geometry with an extra buffer containing page IDs. This is necessary for multi-texture fonts (default false) */
    multipage?: boolean;
}
/**
 * Port of https://github.com/Jam3/three-bmfont-text/
 */
export declare class TextGeometry extends BufferGeometry {
    readonly options: TextGeometryOptions;
    layout: TextLayout;
    visibleGlyphs: Glyph[];
    constructor(opt: TextGeometryOptions);
    update(opt: TextGeometryOptions): void;
    computeBoundingSphere(): void;
    computeBoundingBox(): void;
}
