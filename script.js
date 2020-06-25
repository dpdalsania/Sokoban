document.onkeydown = logKey;
let startI, startJ, nextI, nextJ, nextNextI, nextNextJ;

String.prototype.replaceAt = function (index, char) {
    var a = this.split("");
    a[index] = char;
    return a.join("");
}

let map = [
    "  WWWWW ",
    "WWW   W ",
    "WOSB  W ",
    "WWW BOW ",
    "WOWWB W ",
    "W W O WW",
    "WB XBBOW",
    "W   O  W",
    "WWWWWWWW"
];

function displayArray () {
    let table = document.createElement('table');
    for (let i = 0; i < map.length; i++) {
        let tableRow = document.createElement('tr');
        let innerElement = map[i].split('');
        for (let j = 0; j < innerElement.length; j++) {
            let tableData = document.createElement('td');
            if (innerElement[j] === ' ') {
            }
            if (innerElement[j] === 'W') {
                tableData.classList.add("wall");
            }
            if (innerElement[j] === 'O') {
                tableData.innerHTML = '<div class="empty">';
            }
            if (innerElement[j] === 'S') {
                tableData.innerHTML = '<div class="start">';
            }
            if (innerElement[j] === 'X') {
                tableData.classList.add("darkBox");
            }
            if (innerElement[j] === 'B') {
                tableData.classList.add("Box");
            }
            tableRow.appendChild(tableData);
        }
        table.appendChild(tableRow);
    }
    document.getElementById('mainTable').appendChild(table)
    if (isWin()) {
        console.log('WOOOOOOOONNNNN!!')
        document.getElementById('result').classList.remove('result');
    }
}

function clearArray () {
    document.getElementById('mainTable').innerHTML = '';
}

displayArray()

function logKey (e) {
    getCurrentPosition();
    getNextPosition(e);
    getNextNextPosition(e);
    //console.log('startI', startI);
    //console.log('startJ', startJ);
    //console.log('nextI', nextI);
    //console.log('nextJ', nextJ);
    if (e.keyCode == '38') {
        //  console.log('up arrow')
        if (getNextElementValue() === 'W') {

        } else if (getNextElementValue() === 'B') {
            if (getNextNextElementValue() === 'W' || getNextNextElementValue() === 'B') {

            } else {
                let temp = map[startI - 1].replaceAt(startJ, 'S');
                map[startI - 1] = temp;
                if (isZero(startI, startJ)) {
                    console.log('isZero');
                    let temp1 = map[startI].replaceAt(startJ, 'O');
                    map[startI] = temp1;
                } else {
                    let temp1 = map[startI].replaceAt(startJ, ' ');
                    map[startI] = temp1;
                }
                if (getNextNextElementValue() === 'O') {
                    let temp2 = map[nextI - 1].replaceAt(nextJ, 'X');
                    map[nextI - 1] = temp2;
                } else {
                    let temp2 = map[nextI - 1].replaceAt(nextJ, 'B');
                    map[nextI - 1] = temp2;
                }
            }
        } else if (getNextElementValue() === 'X') {
            if (getNextNextElementValue() === 'W' || getNextNextElementValue() === 'B') {

            } else {
                let temp = map[startI - 1].replaceAt(startJ, 'S');
                map[startI - 1] = temp;
                if (isZero(startI, startJ)) {
                    console.log('isZero');
                    let temp1 = map[startI].replaceAt(startJ, 'O');
                    map[startI] = temp1;
                } else {
                    let temp1 = map[startI].replaceAt(startJ, ' ');
                    map[startI] = temp1;
                }
                if (getNextNextElementValue() === 'O') {
                    let temp2 = map[nextI - 1].replaceAt(nextJ, 'X');
                    map[nextI - 1] = temp2;
                } else {
                    let temp2 = map[nextI - 1].replaceAt(nextJ, 'B');
                    map[nextI - 1] = temp2;
                }
            }
        } else {
            let temp = map[startI - 1].replaceAt(startJ, 'S');
            map[startI - 1] = temp;
            if (isZero(startI, startJ)) {
                console.log('isZero');
                let temp1 = map[startI].replaceAt(startJ, 'O');
                map[startI] = temp1;
            } else {
                let temp1 = map[startI].replaceAt(startJ, ' ');
                map[startI] = temp1;
            }
        }
    }
    else if (e.keyCode == '40') {
        //console.log('down arrow')
        if (getNextElementValue() === 'W') {

        } else if (getNextElementValue() === 'B') {
            if (getNextNextElementValue() === 'W' || getNextNextElementValue() === 'B') {

            } else {
                let temp = map[startI + 1].replaceAt(startJ, 'S');
                map[startI + 1] = temp;
                if (isZero(startI, startJ)) {
                    console.log('isZero');
                    let temp1 = map[startI].replaceAt(startJ, 'O');
                    map[startI] = temp1;
                } else {
                    let temp1 = map[startI].replaceAt(startJ, ' ');
                    map[startI] = temp1;
                }
                if (getNextNextElementValue() === 'O') {
                    let temp2 = map[nextI + 1].replaceAt(nextJ, 'X');
                    map[nextI + 1] = temp2;
                } else {
                    let temp2 = map[nextI + 1].replaceAt(nextJ, 'B');
                    map[nextI + 1] = temp2;
                }
            }
        } else if (getNextElementValue() === 'X') {
            if (getNextNextElementValue() === 'W' || getNextNextElementValue() === 'B') {

            } else {
                let temp = map[startI + 1].replaceAt(startJ, 'S');
                map[startI + 1] = temp;
                if (isZero(startI, startJ)) {
                    console.log('isZero');
                    let temp1 = map[startI].replaceAt(startJ, 'O');
                    map[startI] = temp1;
                } else {
                    let temp1 = map[startI].replaceAt(startJ, ' ');
                    map[startI] = temp1;
                }
                if (getNextNextElementValue() === 'O') {
                    let temp2 = map[nextI + 1].replaceAt(nextJ, 'X');
                    map[nextI + 1] = temp2;
                } else {
                    let temp2 = map[nextI + 1].replaceAt(nextJ, 'B');
                    map[nextI + 1] = temp2;
                }
            }
        } else {
            let temp = map[startI + 1].replaceAt(startJ, 'S');
            map[startI + 1] = temp;
            if (isZero(startI, startJ)) {
                console.log('isZero');
                let temp1 = map[startI].replaceAt(startJ, 'O');
                map[startI] = temp1;
            } else {
                let temp1 = map[startI].replaceAt(startJ, ' ');
                map[startI] = temp1;
            }
        }
    }
    else if (e.keyCode == '37') {
        // console.log('left arrow')
        if (getNextElementValue() === 'W') {

        } else if (getNextElementValue() === 'B') {
            if (getNextNextElementValue() === 'W' || getNextNextElementValue() === 'B') {

            } else {
                let temp = map[startI].replaceAt(startJ - 1, 'S');
                map[startI] = temp;
                if (isZero(startI, startJ)) {
                    console.log('isZero');
                    let temp1 = map[startI].replaceAt(startJ, 'O');
                    map[startI] = temp1;
                } else {
                    let temp1 = map[startI].replaceAt(startJ, ' ');
                    map[startI] = temp1;
                }
                if (getNextNextElementValue() === 'O') {
                    let temp2 = map[nextI].replaceAt(nextJ - 1, 'X');
                    map[startI] = temp2;
                } else {
                    let temp2 = map[nextI].replaceAt(nextJ - 1, 'B');
                    map[startI] = temp2;
                }
            }
        } else if (getNextElementValue() === 'X') {
            if (getNextNextElementValue() === 'W' || getNextNextElementValue() === 'B') {

            } else {
                let temp = map[startI].replaceAt(startJ - 1, 'S');
                map[startI] = temp;
                if (isZero(startI, startJ)) {
                    console.log('isZero');
                    let temp1 = map[startI].replaceAt(startJ, 'O');
                    map[startI] = temp1;
                } else {
                    let temp1 = map[startI].replaceAt(startJ, ' ');
                    map[startI] = temp1;
                }
                if (getNextNextElementValue() === 'O') {
                    let temp2 = map[nextI].replaceAt(nextJ - 1, 'X');
                    map[startI] = temp2;
                } else {
                    let temp2 = map[nextI].replaceAt(nextJ - 1, 'B');
                    map[startI] = temp2;
                }
            }
        } else {
            let temp = map[startI].replaceAt(startJ - 1, 'S');
            map[startI] = temp;
            if (isZero(startI, startJ)) {
                console.log('isZero');
                let temp1 = map[startI].replaceAt(startJ, 'O');
                map[startI] = temp1;
            } else {
                let temp1 = map[startI].replaceAt(startJ, ' ');
                map[startI] = temp1;
            }
        }
    }
    else if (e.keyCode == '39') {
        // console.log('right arrow')
        if (getNextElementValue() === 'W') {

        } else if (getNextElementValue() === 'B') {
            if (getNextNextElementValue() === 'W' || getNextNextElementValue() === 'B') {

            } else {
                let temp = map[startI].replaceAt(startJ + 1, 'S');
                map[startI] = temp;
                if (isZero(startI, startJ)) {
                    console.log('isZero');
                    let temp1 = map[startI].replaceAt(startJ, 'O');
                    map[startI] = temp1;
                } else {
                    let temp1 = map[startI].replaceAt(startJ, ' ');
                    map[startI] = temp1;
                }
                if (getNextNextElementValue() === 'O') {
                    let temp2 = map[nextI].replaceAt(nextJ + 1, 'X');
                    map[startI] = temp2;
                } else {
                    let temp2 = map[nextI].replaceAt(nextJ + 1, 'B');
                    map[startI] = temp2;
                }
            }
        } else if (getNextElementValue() === 'X') {
            if (getNextNextElementValue() === 'W' || getNextNextElementValue() === 'B') {

            } else {
                let temp = map[startI].replaceAt(startJ + 1, 'S');
                map[startI] = temp;
                if (isZero(startI, startJ)) {
                    console.log('isZero');
                    let temp1 = map[startI].replaceAt(startJ, 'O');
                    map[startI] = temp1;
                } else {
                    let temp1 = map[startI].replaceAt(startJ, ' ');
                    map[startI] = temp1;
                }
                if (getNextNextElementValue() === 'O') {
                    let temp2 = map[nextI].replaceAt(nextJ + 1, 'X');
                    map[startI] = temp2;
                } else {
                    let temp2 = map[nextI].replaceAt(nextJ + 1, 'B');
                    map[startI] = temp2;
                }
            }
        } else {
            let temp = map[startI].replaceAt(startJ + 1, 'S');
            map[startI] = temp;
            if (isZero(startI, startJ)) {
                console.log('isZero');
                let temp1 = map[startI].replaceAt(startJ, 'O');
                map[startI] = temp1;
            } else {
                let temp1 = map[startI].replaceAt(startJ, ' ');
                map[startI] = temp1;
            }
        }
    }
    clearArray();
    displayArray();
}

function getCurrentPosition () {
    for (let i = 0; i < map.length; i++) {
        let innerElement = map[i].split('');
        for (let j = 0; j < innerElement.length; j++) {
            if (innerElement[j] === 'S') {
                startI = i,
                    startJ = j;
            }
        }
    }
}

function isZero (i, j) {
    let k = '' + i + j;
    if (k === '21' || k === '35' || k === '41' || k === '54' || k === '66' || k === '63' || k === '74') {
        return true;
    }
    return false;
}

function isWin () {
    if (map[2].split('')[1] === 'X' && map[3].split('')[5] === 'X' && map[4].split('')[1] === 'X'
        && map[5].split('')[4] === 'X' && map[6].split('')[6] === 'X' && map[6].split('')[3] === 'X'
        && map[7].split('')[4] === 'X') {
        return true;
    }
    return false;
}

function getNextElementValue () {
    let innerElement = map[nextI].split('');
    return innerElement[nextJ];
}

function getNextNextElementValue () {
    let innerElement = map[nextNextI].split('');
    return innerElement[nextNextJ];
}

function getNextPosition (e) {
    if (e.keyCode == '38') {
        nextI = startI - 1;
        nextJ = startJ;
    }
    if (e.keyCode == '40') {
        nextI = startI + 1;
        nextJ = startJ;
    }
    if (e.keyCode == '37') {
        nextI = startI;
        nextJ = startJ - 1;
    }
    if (e.keyCode == '39') {
        nextI = startI;
        nextJ = startJ + 1;
    }
}

function getNextNextPosition (e) {
    if (e.keyCode == '38') {
        nextNextI = nextI - 1;
        nextNextJ = nextJ;
    }
    if (e.keyCode == '40') {
        nextNextI = nextI + 1;
        nextNextJ = nextJ;
    }
    if (e.keyCode == '37') {
        nextNextI = nextI;
        nextNextJ = nextJ - 1;
    }
    if (e.keyCode == '39') {
        nextNextI = nextI;
        nextNextJ = nextJ + 1;
    }
}
