declare module 'layout-bmfont-text' {
    export interface BMFontChar {
        /** UTF-16 code of character */
        id: number;
        x: number;
        y: number;
        width: number;
        height: number;
        xoffset: number;
        yoffset: number;
        xadvance: number;
    }

    export interface BMFontKerning {
        first: number;
        second: number;
        amount: number;
    }

    export interface BMFontInfo {
        face: string;
        size: number;
        bold: number;
        italic: number;
        charset: string;
        unicode: number;
        stretchH: number;
        smooth: number;
        aa: number;
        padding: [number, number, number, number];
        spacing: [number, number];
    }

    export interface BMFontCommon {
        lineHeight: number;
        base: number;
        scaleW: number;
        scaleH: number;
    }

    export interface BMFont {
        chars: BMFontChar[];
        kernings: BMFontKerning[];
        info: BMFontInfo;
        common: BMFontCommon;
    }

    export interface Glyph {
        data: BMFontChar;
        position: [number, number]; // x, y
        index: number;
        line: number;
    }

    export interface TextOptions {
        /** the BMFont definition which holds chars, kernings, etc */
        font: BMFont;
        /** the text to layout. Newline characters (\n) will cause line breaks */
        text: string;
        /** the desired width of the text box, causes word-wrapping and clipping in "pre" mode. Leave as undefined to remove word-wrapping (default behaviour) */
        width?: number;
        /** a mode for word-wrapper; can be 'pre' (maintain spacing), or 'nowrap' (collapse whitespace but only break on newline characters), otherwise assumes normal word-wrap behaviour (collapse whitespace, break at width or newlines) */
        mode?: 'pre' | 'nowrap';
        /** can be "left", "center" or "right" (default: left) */
        align?: 'left' | 'center' | 'right';
        /** the letter spacing in pixels (default: 0) */
        letterSpacing?: number;
        /** the line height in pixels (default to font.common.lineHeight) */
        lineHeight?: number;
        /** the number of spaces to use in a single tab (default 4) */
        tabSize?: number;
        /** the starting index into the text to layout (default 0) */
        start?: number;
        /** the ending index (exclusive) into the text to layout (default text.length) */
        end?: number;
    }

    export class TextLayout {
        /** An array of laid out glyphs that can be used for rendering. */
        readonly glyphs: Glyph[];
        /** The width of the text box, or the width provided in constructor. */
        readonly width: number;
        /** The height of the text box; from baseline to the top of the ascender. */
        readonly height: number;
        /** The metric from baseline to the bottom of the descenders (like the bottom of a lowercase "g"). */
        readonly descender: number;
        /** The metric for ascenders; typically from the top of x-height to the top of the glyph height. */
        readonly ascender: number;
        /** The x-height metric; the height of a lowercase character. Uses the first available height of the common lowercase Latin "x-chars", such as 'x', 'u', 'v', 'w', 'z'. */
        readonly xHeight: number;
        /** The baseline metric: measures top of text layout to the baseline of the first line. */
        readonly baseline: number;
        /** The cap height metric; the height of a flat uppercase letter like 'H' or 'I'. Uses the frist available height of common uppercase Latin flat capitals, such as 'H', 'I', 'E', 'T', 'K'. */
        readonly capHeight: number;
        /** The line height; the height from one baseline to the next. This is what was passed as opt.lineHeight, or defaults to the font.common.lineHeight. */
        readonly lineHeight: number;
        /** Creates a new layout with the given options. */
        constructor(opt: TextOptions);
        /** Updates the layout, all options are the same as in constructor. */
        update(opt: TextOptions): void;
        /** Compute metrics for the given text. */
        computeMetrics(text: string, start: number, end: number): { start: number; end: number; width: number };
    }

    function createLayout(opt: TextOptions): TextLayout;
    export default createLayout;
}
