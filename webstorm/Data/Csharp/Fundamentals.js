//variabelen
// link
//https://docs.microsoft.com/en-us/users/dotnet/collections/yz26f8y64n7k07


const goeieLinks = [
    {
        name: 'microsoft_dotnet',
        beschrijving: 'microsoft website voor het leren van dotnet',
        url: 'https://docs.microsoft.com/en-us/users/dotnet/collections/yz26f8y64n7k07',
        reference: ['dotnet', 'Csharp' ],
    }
];
const uilegWoorden = [
    {
        name: 'Initialiseren: ',
        uileg: 'is een opslagmedium voorbereiden voor nieuwe gegevens',
    },

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
];
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
];
const domiDataTypes = {
        getallen: [
            {
                type: 'int',
                omschrijving: 'geheel getal',
                groteBytes: 4,
                groteBit: 32,
                groteVisueel: '10 getallen (-2’147’483’648 tot 2’147’483’647)',
                voorbeeld: `int myNum = 100000;`,
                convertfuncties: '.ToInt32',
                parseMethod: 'int.'
            },
            {
                type: 'long',
                omschrijving: 'geheel getal ',
                groteBytes: 8,
                groteBit: 64,
                groteVisueel: '19 getallen (-9’223’372’036’854’775’808 tot 9’223’372’036’854’775’807)',
                voorbeeld: `long myNum = 15000000000L  //er moet een L achter staan`,
                convertfuncties: '.ToInt64',
                parseMethod: 'long.'

            }
        ],
        kommagetallen: [
            {
                type: 'float',
                omschrijving: 'komma getal',
                groteBytes: 4,
                groteBit: 32,
                groteVisueel: 'max 7 getalen voor + na komma ',
                voorbeeld: `float myNum = 5.75f;  //moet altijd een F/f achter het getal`,
                convertfuncties: '',
                parseMethod: 'float.'
            },
            {
                type: 'double',
                omschrijving: 'komma getal',
                groteBytes: 8,
                groteBit: 64,
                groteVisueel: 'max 15 getalen voor + na komma',
                voorbeeld: `double myNum = 19.99;  //er mag een D achter het getal staan`,
                convertfuncties: '.ToDouble',
                parseMethod: 'double.'
            },
            {
                type: 'decimal',
                omschrijving: 'meestal voor currency (geld)',
                groteBytes: 16,
                groteBit: 128,
                groteVisueel: '28-29 getalen voor + na komma',
                voorbeeld: `decimal myNum = 19.99M;   // er moet een M achter staan`,
                convertfuncties: '.ToDecimal',
                parseMethod: 'decimal.'
            },
          /*  {
                type: 'NOTE',
                omschrijving: 'Een komma getal kan ook een wetenschappelijk getal zijn met een "e"/”E” om de macht van 10 aan te geven',
                groteBytes: '',
                groteBit: '',
                groteVisueel: '',
                voorbeeld: `float f1 = 35e3F;   double d1 = 12E4D; `,
                convertfuncties: '',
                parseMethod: ''
            },*/
        ],
        truefalse: [
            {
                type: 'bool',
                omschrijving: 'kan alleen de waarden true of false hebben',
                groteBytes: 0.125,
                groteBit: 1,
                groteVisueel: '',
                voorbeeld: `bool isCSharpFun = true;`,
                convertfuncties: '.ToBoolean',
                parseMethod: ''
            },
        ],
        Karakters:[
            {
                type: 'char',
                omschrijving: 'één karakter, één letter, één getal zoals \'A\' , \'7\' of \'@\'',
                groteBytes: 2,
                groteBit: 16,
                groteVisueel: '',
                voorbeeld: `char myGrade = 'B';`,
                convertfuncties: '.ToChar',
                parseMethod: ''
            },
            {
                type: 'string',
                omschrijving: 'tekst',
                groteBytes: 2,
                groteBit: 16,
                groteVisueel: '',
                voorbeeld: `string greeting = "Hello World";`,
                convertfuncties: '.ToSingle',
                parseMethod: ''
            }
        ]};
const domiViewdate_time = {
            title: 'Date en Time ',
            namespaces: 'System',
            declareren: 'DateTime naamVariabelen = DateTime.Now; <br> TxtNaam.Text = Convert.ToString(naamVariabelen);',
            decDateTime :[
                {code: 'DateTime.Today', uitput: '8/11/2021 0:00:00'},
                {code: 'DateTime.Now', uitput: '8/11/2021 17:30:45'},
                {code: 'new DateTime(yyyy, m, d, u, min, sec)', uitput: ''},
            ],
            outDateTime : [
                {code: '.ToShortDateString', uitput: '8/11/2021' },
                {code: '.ToLongDateString', uitput: 'maandag 8 november 2021' },
                {code: '.ToShortTimeString', uitput: '17:24' },
                {code: '.ToLongTimeString', uitput: '17:24:58' },
                {code: '.Date', uitput: '8/11/2021 0:00:00' },
                {code: '.Day', uitput: '8' },
                {code: '.TimeOfDay', uitput: '17/30/455040363' },
                {code: '.DayOfWeek', uitput: 'Mondey' },
                {code: '.DayOfYear', uitput: '312' },

            ],};
const statemens = [
    {
        name : 'if-statement ',
        gebruik: 'De if-statement: om een blok C#-code op te geven dat moet worden uitgevoerd als de voorwaarde True is.',
        syntax: ['if (condition)', '{','// block of code to be executed if the condition is True', '}',],
    }
    ,
    {
        name : 'else-statement ',
        gebruik: 'De else-statement: om een C#-code op te geven dat moet worden uitgevoerd als de voorwaarde False is.',
        syntax: ['if (condition)', '{','// block of code to be executed if the condition is True', '}','else','{','// block of code to be executed if the condition is False','}',],
    }
    ,
    {
        name : 'else if-statement ',
        gebruik: 'De else if-statement: om een nieuwe voorwaarde op te geven als de eerste 2 voorwaarde False zijn',
        syntax: ['if (condition1)', '{', '// block of code to be executed if condition1 is True', '}',
            'else if (condition2)', '{', '// block of code to be executed if condition1 is False and condition2 is True', '}',
            'else', '{','// block of code to be executed if condition1 is False and condition2 is False','}',],
    }
    ,
    {
        name : 'switch-statement ',
        gebruik: 'C# Switch-statements: om een van de vele codeblokken te selecteren die moeten worden uitgevoerd.',
        syntax: ['switch(expression)',
        '{', 'case x', '// code block', 'break;', 'case y:',
        '// code block','break;','default: //The default keyword is optional and specifies some code to run if  there is no case match',
        '// code block', 'break;', '}',],
    }
];
const loops = [
    {
        name : 'for-loop ',
        gebruik: 'De for-loop: vaste hoeveelheid herhalingen ',
        syntax: ['for (statement 1; statement 2; statement 3)', '{', '// code block to be executed', '}',],
        uitlegSyntax: [
            {
                name:'Statement 1:',
                beschrijving:'wordt (eenmalig) uitgevoerd voordat het codeblok wordt uitgevoerd.'
            },
            {
                name:'Statement 2:',
                beschrijving:'definieert de voorwaarde voor het uitvoeren van het codeblok.'
            },
            {
                name:'Statement 3:',
                beschrijving:'wordt (iedere keer) uitgevoerd nadat het codeblok is uitgevoerd.'
            },
        ]
    },
    {
        name : 'while-loop ',
        gebruik: 'De while-loop: herhalen onder voorwaarde ',
        syntax: ['while (condition)','{','// code block to be executed','}'],
    },
    {
        name : 'do while-loop ',
        gebruik: 'De do while-loop: herhalen onder voorwaarde, maar eerst uitvoeren dan controleren',
        syntax: ['do','{','// code block to be executed','}','while (condition)'],
    }
];
const methods = [
    {VolegordeVanBewerking: [
            {
                title: 'private: privé',
                uitleg : 'kan alleen worden gebruikt binnen de class waar het deel van uitmaakt.'
            },
            {
                title: 'public: openbaar',
                uitleg : 'overal toegankelijk kan worden opgeroepen vanuit een andere class'
            },
            {
                title: 'Static',
                uitleg : 'static methodes kunnen enkel door andere static methodes worden opgeroepen'
            },
            {
                title:'Void', uitleg: 'geeft geen waarde terug'},
            {
                title:'method met return value' ,
                uitleg:'geeft waarde terug dit kan int , string , dubbel ,… zijn'
            },
            {
                title:'naam van de method ',
                uitleg:'nodig om de method op te roepen / gebruiken'
            },
            {
                title: 'parameters (type naamVariabele)',
                uitleg: 'meegegeven variabelen, kunnen meerderen zijn gescheiden door een komma'
            }
        ]},
    {syntaxVoorbeeld: [
                'namespace ConsoleApp_met_method  // naam van project ', '{',
                'class Program', '{', '// main method is de hoofd method',
                '// hier begint de code',
                'static void Main(string[] args)', '{',
                '// vraag gebruiker om naam',
                'Console.WriteLine("geef je naam");',
                '// call the method',
                'SayHi(Console.ReadLine());',
                'Console.ReadLine();', '}', '// method SayHi',
                'private static void SayHi(string name)', '{', 'Console.WriteLine("Hallo " + name);', '}', '}', '}'
            ]},
    {Main_methode:'is het beginpunt van een C#-toepassing. Wanneer de toepassing wordt gestart, is de methode Main de eerste methode die wordt uitgevoerd. Er kan maar één Main-methode in C# zijn. De C# Main-methode kan echter van het type void of int,string,… zijn.'}
]







//what a class is ¯\_(ツ)_/¯
//  oop,
// syntax,  classes,