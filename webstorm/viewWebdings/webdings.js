

const alfabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
]
const lowerAlfa = [];
alfabet.forEach(l => {
    lowerAlfa.push(l.toLowerCase())
})
const getallen = ['1','2','3','4','5','6','7','8','9','0',
    '/',
    '*',
    '-',
    '+',]
const karakters = [
    '²',  // toprow
    '&',
    '"',
    '\'',
    '(',
    '§',
    '!',
    'ç',
    ')',


    '^',  // rechts
    '$',
    'µ',
    ',',
    ';',
    ':',
    '=',
    '<',


]
const karaktersMetShift = [
    // met SHIFT
    '³', //toprow
    '°',
    '_',

    '¨',// rechts
    '%',
    '£',
    '?',
    '.',
    '/',
    '<',
]
const karaktersMetAltGr = [
    // met AltGr
    '|', // top
    '@',
    '#',
    '^',
    '{',
    '}',

    '[', // rechts met AltGR
    ']',
    '´',
    '`',
    '~',
    '\\',


    '€',  // e
    '®',  // r
    '™',  // t
    '©',  // c


]
const klinkers = [
    'â',
    'ê',
    'û',
    'î',
    'ô',

    'ä',
    'ë',
    'ü',
    'ï',
    'ö',

    'à',
    'è',
    'ù',
    'ì',
    'ò',

    'á',
    'é',
    'ú',
    'í',
    'ó',
]

let index1= ''
let index2 = ''
let index3= ''
let index4=''
let index5 =''
let index6 = ''
let index7 = ''

setIndexes();
function setIndexes(){
    alfabet.forEach(char => {
        index1 +=  `<div>${char}</div>`
    })
    lowerAlfa.forEach(char => {
        index2 += `<div>${char}</div>`
    })
    getallen.forEach(char => {
        index3 += `<div>${char}</div>`
    })
    karakters.forEach(char => {
        index4 +=  `<div>${char}</div>`
    })
    karaktersMetShift.forEach(char => {
        index5 +=   `<div>${char}</div>`
    })
    karaktersMetAltGr.forEach(char => {
        index6 +=   `<div>${char}</div>`
    })
    klinkers.forEach(char => {
        index7 +=  `<div>${char}</div>`
    })

    document.getElementById('al').innerHTML = index1
    document.getElementById('alweb').innerHTML = index1
    document.getElementById('alwin').innerHTML = index1
    document.getElementById('alwin2').innerHTML = index1
    document.getElementById('alwin3').innerHTML = index1

    document.getElementById('alL').innerHTML = index2
    document.getElementById('alLweb').innerHTML = index2
    document.getElementById('alLwin').innerHTML = index2
    document.getElementById('alLwin2').innerHTML = index2
    document.getElementById('alLwin3').innerHTML = index2


    document.getElementById('g').innerHTML = index3
    document.getElementById('gweb').innerHTML = index3
    document.getElementById('gwin').innerHTML = index3
    document.getElementById('gwin2').innerHTML = index3
    document.getElementById('gwin3').innerHTML = index3


    document.getElementById('c').innerHTML = index4
    document.getElementById('cweb').innerHTML = index4
    document.getElementById('cwin').innerHTML = index4
    document.getElementById('cwin2').innerHTML = index4
    document.getElementById('cwin3').innerHTML = index4


    document.getElementById('s').innerHTML = index5
    document.getElementById('sweb').innerHTML = index5
    document.getElementById('swin').innerHTML = index5
    document.getElementById('swin2').innerHTML = index5
    document.getElementById('swin3').innerHTML = index5

    document.getElementById('ag').innerHTML = index6
    document.getElementById('agweb').innerHTML = index6
    document.getElementById('agwin').innerHTML = index6
    document.getElementById('agwin2').innerHTML = index6
    document.getElementById('agwin3').innerHTML = index6

    document.getElementById('k').innerHTML = index7
    document.getElementById('kweb').innerHTML = index7
    document.getElementById('kwin').innerHTML = index7
    document.getElementById('kwin2').innerHTML = index7
    document.getElementById('kwin3').innerHTML = index7
}




