let n = 5

if (n > 0 && n < 10) {
    let nn = parseIntInt(`${n}${n}`);
    let nnn = parseIntInt(`${n}${n}${n}`);
    let sum = n + nn + nnn;
}

console.log(`${n} + ${nn} + ${nnn} = ${sum}`)
