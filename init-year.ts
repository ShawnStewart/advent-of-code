import { existsSync, mkdir, mkdirSync, writeFile, writeFileSync } from 'fs';

const yearArg = parseInt(process.argv[2]);
const year = !isNaN(yearArg) ? yearArg : new Date().getFullYear();

const yearDir = `src/${year}`;

if (!existsSync(yearDir)) mkdirSync(yearDir);

const getDefaultFileContents = (day: number) => `console.log('==== Advent of Code (Day ${day}) ====')`;

for (let day = 1; day <= 25; day++) {
    const dayDir = day.toString().padStart(2, '0');

    const dir = `${yearDir}/${dayDir}`;

    if (!existsSync(dir)) mkdirSync(dir);

    const solutionFile = `${dir}/solution.ts`;

    if (!existsSync(solutionFile)) writeFileSync(solutionFile, getDefaultFileContents(day));
}
