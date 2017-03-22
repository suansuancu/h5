import * as types from './actionTypes';

export function addPage(page) {
    return {
        type: types.PAGE_ADD,
        page,
    };
}

export function delPage(key) {
    return {
        type: types.PAGE_DELETE,
        key,
    };
}

export function addWord(word) {
    return {
        type: types.WORD_ADD,
        word,
    };
}

export function delWord(key) {
    return {
        type: types.WORD_DELETE,
        key,
    };
}