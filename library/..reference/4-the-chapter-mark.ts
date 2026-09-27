const shelves: Record<string, string> = {
    sq12: '9ff977eecff33ffcee77f66f',
    sq10: '37ece667ce738ff1766e1ff8',
    pr12: '9ff60fff99ff6ff9ff9966ffff66fff0',
    pr10: '6f9966f9999f6ff0666f9f990ff699f699f9f999ff600ff906ff9f669ff0f666',
    rp12: '3ff37ee7eeeefccfe77ef33fcffc7777',
    rp10: 'f44fe33eceecf88fc77c7667f22ff11f37738ff83ee37cc76ee61ff16776e66e',
    de12: '33ffffcceef37feccf7737fe',
    de11: '7fccfee86ef333fecf76177f',
    de10: '137f177efec87ee8',
    de9: '137e37cc077733ec7ec8eee0',
    do12: '3feeff33ccffcef777fcef73',
    do11: 'ccf767fc8eefef333fe6f771',
    do10: '8ee7f7318cefe771',
    do9: '0eee7770e731cc73ce338ce7',
};

function factors(n: number): number[] {
    const found: number[] = [];
    let rest = n;
    for (let p = 2; p * p <= rest; p++) while (rest % p === 0) { found.push(p); rest /= p; }
    if (rest > 1) found.push(rest);

    return found;
}

function shelfOf(n: number): string {
    const primes = factors(n);
    const largest = primes.length === 0 ? 1 : primes[primes.length - 1];
    const full = largest % 4 === 1;
    const root = Math.round(Math.sqrt(n));
    if (root * root === n) return full ? 'sq12' : 'sq10';
    if (primes.length === 1) return full ? 'pr12' : 'pr10';
    if (new Set(primes).size < primes.length) return full ? 'rp12' : 'rp10';
    const light = primes.length === 2 ? (full ? 12 : 11) : primes.length === 3 ? 10 : 9;

    return (n % 2 === 0 ? 'de' : 'do') + light;
}

function seatOf(n: number): number {
    const shelf = shelfOf(n);
    let seat = 0;
    for (let m = 1; m < n; m++) if (shelfOf(m) === shelf) seat++;

    return seat;
}

export function glyph(n: number): boolean[] {
    const shelf = shelves[shelfOf(Math.max(1, Math.floor(n)))];
    const start = (seatOf(Math.max(1, Math.floor(n))) % (shelf.length / 4)) * 4;
    const figure = parseInt(shelf.slice(start, start + 4), 16);
    const cells: boolean[] = [];
    for (let at = 0; at < 16; at++) cells.push(((figure >> at) & 1) === 1);

    return cells;
}
