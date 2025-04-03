function toCamelCase(str) {
    let chars = str.toLowerCase().split(/[\s_]/);
    for (let i = 1; i < chars.length; i++) {
        chars[i] = chars[i].charAt(0).toUpperCase() + chars[i].slice(1);
    }
    return chars.join('');
}

function toPascalCase(str) {
    let chars = str.toLowerCase().split(/[\s_]+/);
    for (let i = 0; i < chars.length; i++) {
        chars[i] = chars[i].charAt(0).toUpperCase() + chars[i].slice(1);
    }
    return chars.join('');
}

function toSnakeCase(str) {
    let chars = str.toLowerCase().split(/[\s_]+/).join('_');

    return chars
}
function tokebabCase(str) {
    return str.toLowerCase().split(/[\s_]+/).join('-');
}
function toWithoutSpace(str) {
    return str.toLowerCase().split(/[\s_]+/).join('').trim();
}

document.getElementById('str').addEventListener('keyup', function () {
    const str = document.getElementById('str').value;

    document.getElementById('upperCase').innerText = str.toUpperCase();
    document.getElementById('lowerCase').innerText = str.toLowerCase();
    document.getElementById('camelCase').innerText = toCamelCase(str);
    document.getElementById('PascalCase').innerText = toPascalCase(str);
    document.getElementById('snakeCase').innerText = toSnakeCase(str);
    document.getElementById('kebabCase').innerText = tokebabCase(str);
    document.getElementById('trim').innerText = toWithoutSpace(str);
});
