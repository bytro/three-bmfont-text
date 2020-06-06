declare module 'quad-indices' {
    interface QuadOptions {
        clockwise: boolean;
        type: string;
        count: number;
    }
    function createQuadElements(opt: QuadOptions): number[];
    export = createQuadElements;
}
