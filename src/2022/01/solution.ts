import { readFileSync } from 'fs';

const calorieItemsList = readFileSync('src/2022/1/input.txt').toString();

function parseItems(items: string) {
    return items.split('\n').map(s => parseInt(s, 10));
}

const calorieItemsPerElf = calorieItemsList.split('\n\n').map(parseItems);

function sum(prev: number, current: number) {
    return prev + current;
}

const totalCaloriesPerElf = calorieItemsPerElf.map(calorieItems => calorieItems.reduce(sum, 0)).sort();

const topThree = totalCaloriesPerElf.slice(-3).reduce(sum, 0);

console.log('highest calories', topThree);
