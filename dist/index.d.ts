/// <reference types="layout-bmfont-text" />
import type { Glyph, TextLayout, TextOptions } from 'layout-bmfont-text-types';
import { BufferGeometry } from 'three';
/**
 * Port of https://github.com/Jam3/three-bmfont-text/
 */
export declare class TextGeometry extends BufferGeometry {
    layout: TextLayout;
    visibleGlyphs: Glyph[];
    constructor(opt: TextOptions);
    update(opt: TextOptions): void;
    computeBoundingSphere(): void;
    computeBoundingBox(): void;
}
