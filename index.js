
var params = {
    lines: [
        {
            background: '#00f',
            updateTime: 1000,
            elements: [
                {
                    background: '#f00',
                    width: 25
                },
                {
                    background: '#0f0',
                    width: 30
                },
                {
                    background: '#0f0',
                    width: 20
                },
                {
                    background: '#303',
                    width: 25
                }
            ]
        },
        {
            background: '#00f',
            updateTime: 3000,
            elements: [
                {
                    background: '#f00',
                    width: 75
                },
                {
                    background: '#0f0',
                    width: 25
                }
            ]
        },
        {
            background: '#00f',
            updateTime: 2000,
            elements: [
                {
                    background: '#f00',
                    width: 25
                },
                {
                    background: '#0f0',
                    width: 50
                }
            ]
        },
        {
            background: '#00f',
            updateTime: 3000,
            elements: [
                {
                    background: '#f00',
                    width: 25
                },
                {
                    background: '#0f0',
                    width: 75
                }
            ]
        },
        {
            background: '#00f',
            updateTime: 2000,
            elements: [
                {
                    background: '#f00',
                    width: 10
                },
                {
                    background: '#0f0',
                    width: 10
                }
            ]
        }
    ]
};

function LineElement(lineObj, lineHeight) {

    var parentDiv = document.createElement("div");
    parentDiv.style.display = 'flex';
    parentDiv.style.height = parseInt(lineHeight) + 'px';
    parentDiv.style.background = lineObj.background;

    for (var y = 0; y < lineObj.elements.length; y++) {
        parentDiv.appendChild(ChildElement(lineObj.elements[y], lineHeight, lineObj.updateTime))
    }

    changeColor(parentDiv, lineObj.updateTime);
    return parentDiv;
}

function ChildElement(elementsObj, lineHeight, timeout) {

    var div = document.createElement("div");
    div.style.width = parseInt(elementsObj.width) + '%';
    div.style.height = parseInt(lineHeight) + 'px';
    div.style.background = elementsObj.background;

    changeColor(div, timeout);
    return div;
}

function changeColor(element, timeout) {
    setInterval(function() {
        element.style.background = generateRandomColor();
    }, timeout)
}

function generateRandomColor() {
    var charsArray = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    var hexColor = "#";
    for (var i = 0; i < 6; i++) {
        var randomIndex = Math.floor(Math.random()*16);
        hexColor += charsArray[randomIndex];
    }
    return hexColor;
}

function getElementHeight(inputParams) {
    var numOfEls = inputParams.lines.length;
    return window.innerHeight/numOfEls;
}

window.onload = function() {
    var elHeight = getElementHeight(params);

    for (var i = 0; i < params.lines.length; i++ ) {
        document.body.appendChild(LineElement(params.lines[i], elHeight));
    }
};
