'use strict';

import Dimensions from 'Dimensions';
const SCREEN_WIDTH = Dimensions.get('window').width;

const smallFontSize = {
    D1: 53,
    D2: 34,
    D3: 24,
    H1: 22,
    H2: 20,
    H3: 18,
    T1: 16,
    T2: 14,
    T3: 12,
    T4: 10,
};

const normalFontSize = {
    D1: 55,
    D2: 35,
    D3: 25,
    H1: 23,
    H2: 21,
    H3: 19,
    T1: 17,
    T2: 14,
    T3: 13,
    T4: 10,
};
const bitFontSize = {
    D1: 61,
    D2: 39,
    D3: 27,
    H1: 25,
    H2: 23,
    H3: 20,
    T1: 18,
    T2: 17,
    T3: 14,
    T4: 11,
};

let Font;
if (SCREEN_WIDTH < 375) {
    Font = smallFontSize;
} else if (SCREEN_WIDTH < 414) {
    Font = normalFontSize;
} else {
    Font = bitFontSize;
}

let FontWeight = {
    D1: '300',
    D2: '300',
    D3: '300',
    H1: '300',
    H2: 'normal',
    H3: '300',
    T1: '300',
    T2: 'normal',
    T3: 'normal',
    T4: 'normal',
};

let Grid = {
	A: SCREEN_WIDTH/12,
    a: SCREEN_WIDTH/60,
};

module.exports = {
	Font,
	FontWeight,
	Grid,
};