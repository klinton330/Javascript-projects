const outputElement = document.querySelector('#output');
const btnCopy = document.querySelector('#btncopy');
const numbersElement = document.querySelector('#number');
const capitalLettersElement = document.querySelector('#capitalletters');
const smallLettersElement = document.querySelector('#smallletters');
const symbolsElement = document.querySelector('#symbols');
const formElement = document.querySelector('#frm');
const passwordLength = document.querySelector('#passwordLength');


//Button click to copy password

btnCopy.addEventListener('click', async () => {
    const pass = outputElement.value;
    if (pass) {
        await navigator.clipboard.writeText(pass)
        alert("copied to clipboard")
    }
    else {
        alert("There is no password to copy")
    }
})

function generateRandomChar(min, max)//min 65 max 90
{
    //fromCharCode-converts the number to ASCII VALUE
    /*Math.random()*limit->it generate value from 1 to 26 
    limit=90-65+1=26*/
    const limit = max - min + 1;
    return String.fromCharCode(Math.floor(Math.random() * limit) + min)
}

function capitalValue() {
    return generateRandomChar(65, 98)
}

function smallValue() {
    return generateRandomChar(97, 122)
}

function numberValue() {
    return generateRandomChar(48, 57)
}

function symbolValue() {
    const symbols = "!@#$%^&*(){}[]<>?~"
    return symbols[Math.floor(Math.random() * symbols.length)]
}

const functionArray = [
    {
        element: numbersElement,
        fun: numberValue
    },
    {
        element: capitalLettersElement,
        fun: capitalValue
    },
    {
        element: smallLettersElement,
        fun: smallValue
    },
    {
        element: symbolsElement,
        fun: symbolValue
    },

]

formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const limit = passwordLength.value;//8
    const funArray = functionArray.filter(({ element }) => element.checked)
    console.log(funArray)
    var generatedPassword = '';
    for (var i = 0; i < limit; i++) {
        const index = Math.floor(Math.random() * funArray.length)//Any value between 1 to  4
        const letter = funArray[index].fun();
        generatedPassword += letter
    }
    outputElement.value = generatedPassword;
});

