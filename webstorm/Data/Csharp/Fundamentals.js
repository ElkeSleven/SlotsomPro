//variabelen
// link
//https://docs.microsoft.com/en-us/users/dotnet/collections/yz26f8y64n7k07


const microsoft_dotnet = [
    {
        beschrijving: 'microsoft website voor het leren van dotnet',
        url: 'https://docs.microsoft.com/en-us/users/dotnet/collections/yz26f8y64n7k07',
        reference:['dotnet', 'Csharp' ],
    }
]



const belangerijksteDataTypes = [
    {"type" : 'string' , "uitleg" : 'Testinformatie' , 'Convertfuncties': 'Convert.ToString(...)'},
    {"type" : 'char' , "uitleg" : 'één karakter', 'Convertfuncties': 'Convert.ToChar(...)'},
    {"type" : 'int' , "uitleg" : 'geheel getal', 'Convertfuncties': 'Convert.ToInt32(...)'},
    {"type" : 'bool' , "uitleg" : 'true / false', 'Convertfuncties': 'Convert.ToBoolean(...)'},
    {"type" : 'double' , "uitleg" : 'komma getal' , 'Convertfuncties': 'Convert.ToDouble(...)'},
    {"type" : 'decimal' , "uitleg" : 'currency (is precies als double','Convertfuncties': 'Convert.ToDecimal(...)'},

    {"type" : 'datatype[]' , "uitleg" : 'array van datatype\'s'},
    {"type" : 'list<\'datatype>' , "uitleg" : 'list van datatype\'s'},
]
const listVSarray = [
    {'list<\'datatype>' : {
            Length:'Length varies',
            Usage:'	Frequent insertion and deletion',
            Resize:	'Resize List is dynamic in nature',
        },
    },
    {'datatype[]' : {
            Length:'Fixed size length',
            Usage:'Frequent element access',
            Resize:'Resizing arrays is expensive',
        },
    },
]

const domiDataTypes = [{
    domiDataTypes: {
        getallen: [
            {
                type: 'int',
                omschrijving: 'geheel getal',
                groteBytes: 4,
                groteBit: 32,
                groteVisueel: '',
                voorbeeld: ``,
            },
            {
                type: 'long',
                omschrijving: 'geheel getal',
                groteBytes: 8,
                groteBit: 64,
                groteVisueel: '',
                voorbeeld: ``,
            }
        ],
        kommagetallen: [
            {
                type: 'float',
                omschrijving: 'komma getal',
                groteBytes: 4,
                groteBit: 32,
                groteVisueel: '',
                voorbeeld: ``,
            },
            {
                type: 'double',
                omschrijving: 'komma getal',
                groteBytes: 8,
                groteBit: 64,
                groteVisueel: '',
                voorbeeld: ``,
            },
            {
                type: 'decimal',
                omschrijving: 'meestal voor currency (geld)',
                groteBytes: 16,
                groteBit: 128,
                groteVisueel: '',
                voorbeeld: ``,
            },
            {
                type: 'NOTE',
                omschrijving: 'Een komma getal kan ook een wetenschappelijk getal zijn met een "e"/”E” om de macht van 10 aan te geven',
                voorbeeld: ``,
            },
        ],
        true_false: [
            {
                type: 'bool',
                omschrijving: 'kan alleen de waarden true of false hebben',
                groteBytes: 0.125,
                groteBit: 1,
                groteVisueel: '',
                voorbeeld: ``,
            },
        ],
        Karakters:[
            {
                type: 'char',
                omschrijving: 'één karakter, één letter, één getal',
                groteBytes: 2,
                groteBit: 16,
                groteVisueel: '',
                voorbeeld: ``,
            },
            {
                type: 'string',
                omschrijving: 'tekst',
                groteBytes: 2,
                groteBit: 16,
                groteVisueel: ' ',
                voorbeeld: ``,
            },
        ]
    }


}]




const dataTypeDateTime = [

]

const loop_for = []
const loop_while = []
const loop_do = []
const loop_forEach = []
const check_if = []
const check_switch = []

//what a class is ¯\_(ツ)_/¯
// primitive types, oop, methods, loops
//probably variables and types.
// syntax, variables, types, classes, methods...