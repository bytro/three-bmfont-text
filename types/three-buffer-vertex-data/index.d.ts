declare module 'three-buffer-vertex-data' {
    import { BufferGeometry } from 'three';

    export function index(
        geometry: BufferGeometry,
        data: ArrayLike<number>,
        itemSize: number,
        type: string
    ): void;
    export function attr(
        geometry: BufferGeometry,
        key: string,
        data: ArrayLike<number>,
        itemSize: number,
        type?: string
    ): void;
}
