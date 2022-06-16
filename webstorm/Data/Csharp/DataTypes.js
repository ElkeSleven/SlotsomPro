//variabelen


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

