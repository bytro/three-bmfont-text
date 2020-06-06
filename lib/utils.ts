import { Box3, Sphere } from 'three';

const itemSize = 2;

function bounds(positions: ArrayLike<number>) {
    const count = positions.length / itemSize;
    const box = { min: [positions[0], positions[1]], max: [positions[0], positions[1]] };

    for (let i = 0; i < count; i++) {
        const x = positions[i * itemSize + 0];
        const y = positions[i * itemSize + 1];
        box.min[0] = Math.min(x, box.min[0]);
        box.min[1] = Math.min(y, box.min[1]);
        box.max[0] = Math.max(x, box.max[0]);
        box.max[1] = Math.max(y, box.max[1]);
    }

    return box;
}

export function computeBox(positions: ArrayLike<number>, output: Box3): void {
    const box = bounds(positions);
    output.min.set(box.min[0], box.min[1], 0);
    output.max.set(box.max[0], box.max[1], 0);
}

export function computeSphere(positions: ArrayLike<number>, output: Sphere): void {
    const box = bounds(positions);
    const minX = box.min[0];
    const minY = box.min[1];
    const maxX = box.max[0];
    const maxY = box.max[1];
    const width = maxX - minX;
    const height = maxY - minY;
    const length = Math.sqrt(width * width + height * height);
    output.center.set(minX + width / 2, minY + height / 2, 0);
    output.radius = length / 2;
}
