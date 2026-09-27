// WAITING FOR A PLATE TO BE DRAWN, WHICH IS ONE RULE AND HAD THREE HOMES.
//
// A plate is written into the page with no colour at all and the browser fills it in once it has
// hydrated, so there is a window — measured at between 1.4 and 2.2 seconds on a warm reload — in
// which every cell is white and the plate is not wrong, merely absent. Three probes counted to a
// fixed number of milliseconds before reading one, and two of them counted too few: one reported a
// working plate as broken, and the other invented a persistence failure, "144 of 144 cells differ
// after reloading", about a plate that persists perfectly.
//
// The number was never the problem. Counting was. Anything reading a plate waits for it here.

export const untilThePlateIsDrawn = (page, within = 20000) => page.waitForFunction(() => {
    const plate = document.querySelector('.pd-infobox [role="img"]');
    return plate !== null && [...plate.children].some(cell => getComputedStyle(cell).backgroundColor !== 'rgb(255, 255, 255)');
}, { timeout: within });
