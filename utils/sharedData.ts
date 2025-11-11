import fs from 'fs';
import path from 'path';

const testDataDir = path.resolve(__dirname, '../test-data');
const sharedPath = path.resolve(testDataDir, 'product.json');
const sharedPathUpdated = path.resolve(testDataDir, 'product_updated.json');

function verifyTestDataDir() {
    if (!fs.existsSync(testDataDir)) {
        fs.mkdirSync(testDataDir, { recursive: true });
    }
}

export function saveProductId(id: number) {
    verifyTestDataDir();
    fs.writeFileSync(sharedPath, JSON.stringify({ id }));
}

export function readProductId(): number {
    const data = JSON.parse(fs.readFileSync(sharedPath, 'utf-8'));
    return data.id;
}

export function saveProductUpdated(id: number, price: number) {
    verifyTestDataDir();
    fs.writeFileSync(sharedPathUpdated, JSON.stringify({ id, price }));
}

export function readProductUpdated(): { id: number; price: number } {
    const data = JSON.parse(fs.readFileSync(sharedPathUpdated, 'utf-8'));
    return { id: data.id, price: data.price };
}