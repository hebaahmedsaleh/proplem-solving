/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const makeMap = (key) => {
    let map = new Map();
    let result = key.replace(/\s/g, '').split('');
    result = [...new Set(result)];
    result.forEach((elem, i) => {
        const charI =  alphabet[i]
        map.set(elem, charI)
    });
    return map;
}

const getKeyValue = (map, letter) => {
    return map.get(letter);
    }

var decodeMessage = function(key, message) {
    let arr=[];
    let ourMap = makeMap(key);
    for(let i=0; i< message.length; i++){
        arr.push(getKeyValue(ourMap, message[i]) || ' ');
    }
    return arr.join('');
};
