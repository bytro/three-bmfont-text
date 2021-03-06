import { default as createLayout, Glyph, TextLayout, TextOptions } from 'layout-bmfont-text';
import createQuadElements from 'quad-indices';
import { Box3, BufferAttribute, BufferGeometry, Sphere } from 'three';

import { computeBox, computeSphere } from './lib/utils';
import { computePositions, computeUvs } from './lib/vertices';

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
export class TextGeometry extends BufferGeometry {
    public readonly options: TextGeometryOptions;
    public layout: TextLayout;
    public visibleGlyphs: Glyph[];

    constructor(opt: TextGeometryOptions) {
        super();

        // use these as default values for any subsequent calls to update()
        this.options = { ...opt };

        this.update(opt);
    }

    update(opt: TextGeometryOptions) {
        // use constructor defaults
        opt = { ...this.options, ...opt };

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
        const glyphs = this.layout.glyphs.filter(({ data }) => data.width * data.height > 0);

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
        this.setIndex(new BufferAttribute(indices, 1));
        this.setAttribute('position', new BufferAttribute(positions, 2))
        this.setAttribute('uv', new BufferAttribute(uvs, 2))

        // update multipage data
        if ('page' in this.attributes) {
            // disable multipage rendering
            this.deleteAttribute('page');
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
