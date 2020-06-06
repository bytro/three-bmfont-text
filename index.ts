import createLayout from 'layout-bmfont-text';
import type { Glyph, TextLayout, TextOptions } from 'layout-bmfont-text-types';
import createQuadElements from 'quad-indices';
import { Box3, BufferGeometry, Sphere } from 'three';
import { attr, index } from 'three-buffer-vertex-data';

import { computeBox, computeSphere } from './lib/utils';
import { computePositions, computeUvs } from './lib/vertices';

/**
 * Port of https://github.com/Jam3/three-bmfont-text/
 */
export class TextGeometry extends BufferGeometry {
    public layout: TextLayout;
    public visibleGlyphs: Glyph[];

    constructor(opt: TextOptions) {
        super();
        this.update(opt);
    }

    update(opt: TextOptions): void {
        if (!opt.font) {
            throw new TypeError('must specify a { font } in options');
        }
        this.layout = createLayout(opt);

        // get vec2 texcoords
        const flipY = opt.flipY !== false;

        // the desired BMFont data
        const { font } = opt;

        // determine texture size from font file
        const texWidth = font.common.scaleW;
        const texHeight = font.common.scaleH;

        // get visible glyphs
        const glyphs = this.layout.glyphs.filter(glyph => {
            const bitmap = glyph.data;
            return bitmap.width * bitmap.height > 0;
        });

        // provide visible glyphs for convenience
        this.visibleGlyphs = glyphs;

        // get common vertex data
        const positions = computePositions(glyphs);
        const uvs = computeUvs(glyphs, texWidth, texHeight, flipY);
        const indices = createQuadElements({
            clockwise: true,
            type: 'uint16',
            count: glyphs.length,
        });

        // update vertex data
        index(this, indices, 1, 'uint16');
        attr(this, 'position', positions, 2);
        attr(this, 'uv', uvs, 2);

        // update multipage data
        if ('page' in this.attributes) {
            // disable multipage rendering
            this.removeAttribute('page');
        }
    }

    computeBoundingSphere() {
        if (!this.boundingSphere) {
            this.boundingSphere = new Sphere();
        }
        const positions = this.attributes.position.array;
        const { itemSize } = this.attributes.position;
        if (!positions || !itemSize || positions.length < 2) {
            this.boundingSphere.radius = 0;
            this.boundingSphere.center.set(0, 0, 0);
            return;
        }
        computeSphere(positions, this.boundingSphere);
    }

    computeBoundingBox() {
        if (!this.boundingBox) {
            this.boundingBox = new Box3();
        }
        const positions = this.attributes.position.array;
        const { itemSize } = this.attributes.position;
        if (!positions || !itemSize || positions.length < 2) {
            this.boundingBox.makeEmpty();
            return;
        }
        computeBox(positions, this.boundingBox);
    }
}
