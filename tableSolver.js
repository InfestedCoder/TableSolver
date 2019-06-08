function solve(table) {
    if (table.length === 0)
        return 0;

    let sums = [];

    table.forEach((subTable, y, table) => {
        subTable.forEach((cell, x) => {
            visit(x, y, table, sums);
        })
    });

    return sums[table.length - 1][table[0].length - 1];
}

function visit(x, y, table, sums) {
    if (sums[y] === undefined)
        sums[y] = [];

    const left = x > 0 ? sums[y][x - 1] : 0;
    const top = y > 0 ? sums[y - 1][x] : 0;

    sums[y][x] = Math.max(left, top) + table[y][x];
}

export {solve};