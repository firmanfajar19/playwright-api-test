import fs from 'fs';
import path from 'path';

const sharedPath = path.resolve(__dirname, '../test-data/product.json');
const sharedPathUpdated = path.resolve(__dirname, '../test-data/product_updated.json');

export function saveProductId(id: number) {
    fs.writeFileSync(sharedPath, JSON.stringify({ id }));
}

export function readProductId(): number {
    const data = JSON.parse(fs.readFileSync(sharedPath, 'utf-8'));
    return data.id;
}

export function saveProductUpdated(id: number, price: number) {
    fs.writeFileSync(sharedPathUpdated, JSON.stringify({ id, price }));
}

export function readProductUpdated(): { id: number; price: number } {
    const data = JSON.parse(fs.readFileSync(sharedPathUpdated, 'utf-8'));
    return { id: data.id, price: data.price };
}