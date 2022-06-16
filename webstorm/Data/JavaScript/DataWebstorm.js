
const keyWoords = [
    {
        "id": 1,
        "keywoords" : ["message","alert","prompt"],
        "imgSourse" : ""
    },
]

const codeSnippers =  [
    {
        "id": 0,
        "title": 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, nobis.' +
            '<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, sint?',
        "snippers": [
            {
                "snipper_id": 1,
                "snipper":'lorem20  '
            },
            {
                "snipper_id": 2,
                "snipper": "let naam = prompt(\"Gelieve uw naam in te vullen\", \"Type hier uw naam\"); <br> alert(\`Welkom ${naam}\`);"
            },
            {
                "snipper_id": 3,
                "snipper": "let min = prompt(\"Geef een minimum getal in.\", \"Type hier uw getal\"); <br> min = parseInt(min);" +
                    "<br>let max = parseInt(prompt(\"Geef een maximum getal in.\", \"Type hier uw getal\"));" +
                    "<br>let random = Math.floor(Math.random() * (max - min + 1) + min);" +
                    "<br>let getal = parseInt(prompt(`Geef een getal van ${min} tot en met ${max} in`, \"Type hier uw getal\"));" +
                    "<br>alert((getal === random) ? \"Uw heeft het getal goed geraden!\" : \"Helaas, uw heeft het getal niet geraden.\");"
            },
            {
                "snipper_id": 4,
                "snipper": "let naam = prompt(\"Geef uw naam in.\", \"Type hier uw naam\");" +
                    "<br>naam = naam.trim();" +
                    "<br>alert((naam === \"Type hier uw naam\" || naam === \"\") ? \"U heeft niets ingevuld\" : naam);"
            }
        ],
    },
    {
        "id": 1,
        "title": 'Input van gebruiker vragen via prompt(message , placeholder)' +
            '<br>Message naar de gebruiker via alert(\'mess\')',
        "snippers": [
            {
                "snipper_id": 1,
            "snipper":'alert("Hallo, Dit is een alert");'
            },
            {
                "snipper_id": 2,
            "snipper": "let naam = prompt(\"Gelieve uw naam in te vullen\", \"Type hier uw naam\"); <br> alert(\`Welkom ${naam}\`);"
            },
            {
                "snipper_id": 3,
                "snipper": "let min = prompt(\"Geef een minimum getal in.\", \"Type hier uw getal\"); <br> min = parseInt(min);" +
                    "<br>let max = parseInt(prompt(\"Geef een maximum getal in.\", \"Type hier uw getal\"));" +
                    "<br>let random = Math.floor(Math.random() * (max - min + 1) + min);" +
                    "<br>let getal = parseInt(prompt(`Geef een getal van ${min} tot en met ${max} in`, \"Type hier uw getal\"));" +
                    "<br>alert((getal === random) ? \"Uw heeft het getal goed geraden!\" : \"Helaas, uw heeft het getal niet geraden.\");"
            },
            {
                "snipper_id": 4,
                "snipper": "let naam = prompt(\"Geef uw naam in.\", \"Type hier uw naam\");" +
                    "<br>naam = naam.trim();" +
                    "<br>alert((naam === \"Type hier uw naam\" || naam === \"\") ? \"U heeft niets ingevuld\" : naam);"
            }
        ],
    },
    {
        "id": 2,
        "title": 'werken met strings',
        "snippers": [
            {
            "snipper_id": 1,
            "snipper":'let string  = \'aBcDe\'' +
                '<br>string.toLowerCase()' +
                '<br>string.toUpperCase()'
            },
            {
                "snipper_id": 2,
                "snipper":"let getal_string = \'3\'" +
                "<br>let getal = parseInt(getal_string);"

            },
            {
                "snipper_id": 3,
                "snipper": "let zin = 'Dit is een zin'" +
                    "<br>zin.indexOf(\" \", 1);   // zegt op welke viewClassLibraryCsharp de EERSTE specie staat" +
                    "<br>zin.indexOf(\"is\", 1);   // zegt op welke viewClassLibraryCsharp de EERSTE 'is' staat"
            },
            {
                "snipper_id": 4,
                "snipper": "let zin = \"Ik wil een koekje.\";" +
                "<br>document.getElementById(\"outputJs1\").innerHTML = zin;" +
                "<br>console.log(zin.charAt(0));" +
                "<br>console.log(zin.charAt(3));" +
                "<br>console.log(zin.lastIndexOf(\"k\"));" +
                "<br>console.log(zin.lastIndexOf(\"e\"));" +
                "<br>console.log(zin.length);"
            },

        ],
    },




]
