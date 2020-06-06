declare module 'layout-bmfont-text-types' {
    interface Common {
        scaleW: number;
        scaleH: number;
    }
    interface Font {
        common: Common;
    }
    export interface TextOptions {
        font: Font;
        text: string;
        flipY: boolean;
    }
    interface Bitmap {
        x: number;
        y: number;
        width: number;
        height: number;
        xoffset: number;
        yoffset: number;
    }
    export interface Glyph {
        data: Bitmap;
        position: number[];
    }
    export interface TextLayout {
        glyphs: Glyph[];
    }
}

declare module 'layout-bmfont-text' {
    import { TextOptions, TextLayout } from 'layout-bmfont-text-types';

    function createLayout(opt: TextOptions): TextLayout;
    export = createLayout;
}
