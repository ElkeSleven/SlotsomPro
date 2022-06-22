


const codeSnipersCsharp =  [

    {
        oplSem: 'pro1sem1',
        reference:['timer','DispatcherTimer','TimeSpan'],
        explanation: 'DispatcherTimer timer',
        comment:'wpf app',
        language: 'Csharp',
            code: `
//declareer variable die we nodig hebben',
private int increment = 0;
private DispatcherTimer timer;
//timer Start Button
private void btnStart_Click(object sender, RoutedEventArgs e)
{
    StartTimer();
}
// timer die optelt of aftelt 
private void StartTimer()
{
    timer = new DispatcherTimer();
    timer.Interval = new TimeSpan(0, 0, 1);
    timer.Tick += timer_Tick;
    timer.Start();
}
// timer verschijnt op scherm
private void timer_Tick(object sender, EventArgs e)
{
    increment++;
    TxtOpXaml.Text = increment.ToString();
}

`,

    },
    {
            oplSem: 'pro1sem1',
            reference: ['Window_Closing', 'closing', 'xaml', 'switch'],
            explanation: 'Window_Closing event met switch',
            comment:'wpf app',
            language: 'Csharp',
            code: `
//Window_Closing event met switch
private void Window_Closing(object sender, System.ComponentModel.CancelEventArgs e)
{
    MessageBoxResult result = MessageBox.Show("bent u zeker", "afsluiten", MessageBoxButton.YesNo);
    switch (result)
    {
        case MessageBoxResult.Yes: break;
        default:e.Cancel = true; break;
    }

}
`
    },
    {
            oplSem: 'Pro1Sem1',
            reference: ['Window_Closing', 'closing', 'xaml', 'if-statement', 'if'],
            explanation: 'Window_Closing event met if-statement\n',
            comment:'wpf app',
            language: 'Csharp',
            code: `
//Window_Closing event met if-statement
private void Window_Closing(object sender, System.ComponentModel.CancelEventArgs e)
{
    MessageBoxResult result = MessageBox.Show("ben je zeker", "afsluiten", MessageBoxButton.YesNo, MessageBoxImage.Question);
    if (result != MessageBoxResult.Yes) { e.Cancel = true; }
}



`
    },
    {
            oplSem: 'Pro1Sem1',
            reference: ['MessageBox',],
            explanation: 'Messagebox ',
            comment:'wpf app',
            language: 'Csharp',
            code: `
//Messagebox
MessageBox.Show("bericht aan gebruiker ");

// Messagebox met title
MessageBox.Show("bericht aan gebruiker ", "dit is de title");
           `},
    {
        oplSem: 'Pro1Sem1',
        reference: ['MessageBox','MessageBoxResult', 'MessageBoxButton'],
        explanation: 'Messagebox met Yes No input',
        comment:'wpf app',
        language: 'Csharp',
        code: `
MessageBoxResult result;
result = MessageBox.Show("Is Brussel de hoofdstad van Belgie ?", "Quiz", MessageBoxButton.YesNo);
if (result == MessageBoxResult.Yes)
{
    MessageBox.Show("Ja - correct!", "Oplossing");
}
else
{
    MessageBox.Show("Sorry: verkeerd", "Oplossing");
}
            
`
    },
    {
        oplSem: 'Pro1Sem1',
        reference: ['MessageBox','MessageBoxImage', 'MessageBoxButton'],
        explanation: 'Messagebox met tekening ',
        comment:'wpf app',
        language: 'Csharp',
        code:
`MessageBox.Show("Message", "Title", MessageBoxButton.OKCancel, MessageBoxImage.Information);

 MessageBox.Show("Message", "Title", MessageBoxButton.OKCancel, MessageBoxImage.Question);

 MessageBox.Show("Message", "Title", MessageBoxButton.OKCancel, MessageBoxImage.Warning);

 MessageBox.Show("Message", "Title", MessageBoxButton.OKCancel, MessageBoxImage.Exclamation);

 MessageBox.Show("Message", "Title", MessageBoxButton.OKCancel, MessageBoxImage.Error);
`
    },
    {

        oplSem: 'Pro1Sem2',
        reference: ['OpenFileDialog','ShowDialog', 'Gebruiker kan file kiezen'],
        explanation: 'OpenFileDialog : laat de gebruiker een file kiezen ',
        comment: 'Wpf app',
        language: 'Csharp',
        code: `
// declareren van variable die we nodig hebben
private string currentFile;
private string currentFolder;
// laat de gebruiker een folder keizen
private void browseButton_Click(object sender, RoutedEventArgs e)
{
    currentFolder = Environment.GetFolderPath(Environment.SpecialFolder.DesktopDirectory);
    OpenFileDialog dialog = new OpenFileDialog();
    dialog.InitialDirectory = currentFolder;
    if (dialog.ShowDialog() == true)
    {
        currentFile = dialog.FileName;
        currentFolder = Directory.GetParent(currentFile).ToString();
        fileTextBox.Text = currentFile;
    }
}
`,
    },
    {
        vak: ['Csharp'],
        oplSem: 'Pro1Sem2',
        reference: ['OpenFileDialog','ShowDialog','Pro1Sem2', 'Gebruiker kan file kiezen', 'Environment', 'SpecialFolder', 'SaveFileDialog'],
        explanation: 'open de verkenner op verschillende locaties',
        comment: 'wpf app',
        language: 'Csharp',
        code: `
OpenFileDialog dialog = new OpenFileDialog();    // or SaveFileDialog dialog = new SaveFileDialog();
           
// openent verkenner in Deze pc
dialog.InitialDirectory = Environment.GetFolderPath(Environment.SpecialFolder.MyComputer);
           
 // openent verkenner in Deze Mijn documenten
dialog.InitialDirectory = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);
           
 // openent verkenner in Mijn afbeeldingen
dialog.InitialDirectory = Environment.GetFolderPath(Environment.SpecialFolder.MyPictures);
           
 // openent verkenner in Mijn muziek
dialog.InitialDirectory = Environment.GetFolderPath(Environment.SpecialFolder.MyMusic);
           
if (dialog.ShowDialog() == true)  // User clicks Open/Save
{
    MessageBox.Show(dialog.FileName);
}
`,
    },
]
const codeSnipersJS = [
    {
        oplSem: 'Pro1Sem2',
        reference:['prompt','alert','message','Input'],
        explanation: 'Input van gebruiker vragen via prompt(message , placeholder)<br>' +
            'Message naar gebruiker via alert(message)',
        comment:'',
        language: 'javascript',
        code: `
let naamVanGebruiker = prompt("Gelieve uw naam in te vullen", "Type hier uw naam");
alert(\`Welkom \${naamVanGebruiker}\`); 
                
let naam = prompt("Geef uw naam in.", "Type hier uw naam");
naam = naam.trim();
alert((naam === "Type hier uw naam" || naam === "") ? "U heeft niets ingevuld" : naam);`,
    },
    {
        oplSem: 'Pro1Sem2',
        reference:['string',''],
        explanation: 'werken met strings ',
        comment: '',
        language: 'javascript',
        code: `
let myString  = 'aBcDe';
console.log(  myString.toLowerCase() );    // output: 'abcde'
console.log(  myString.toUpperCase() );    // output: 'ABCDE'
        
let getal_string = '3';
let myGetal = parseInt(getal_string);   // net de string om naar een getal
console.log(myGetal);                   // output : 3
        
        
let zin = 'Dit is een zin';
console.log(  zin.indexOf("e") );     // zegt op welke index de EERSTE 'e' staat
                                      // output : 7
        
console.log(  zin.indexOf(" ", 4) );  // zegt op welke index de EERSTE specie staat vanaf index 4
                                      // output: 6
                                                
let zin = "Ik wil een koekje";
console.log(zin.length);                  // output: 17
console.log(zin.charAt(0));               // output: I
console.log(zin.charAt(11));              // output: k
console.log(zin.substring(11, 15));       // output: koek
 
console.log(zin.lastIndexOf(" "));      // output: 10
console.log(zin.lastIndexOf("e"));      // output: 16
console.log(zin.substring(10, 17));     // output: koekje
       
        
let indexLaatsteSpace = zin.lastIndexOf(" ");                              // output: 10
let laatsteLetter = zin.slice(zin.length - 1);                             // output: e
let indexLaatsteLetter = zin.lastIndexOf(laatsteLetter);                   // output: 17
console.log(zin.substring(indexLaatsteSpace, indexLaatsteLetter + 1));     // output: koekje2222`,
    },
    {
        oplSem: 'Pro1Sem2',
        reference:['tijd','datum',],
        explanation: 'laat de gebruiker zien hoelaaat het is  ',
        comment: '',
        language: 'javascript',
        code: `
let datum = new Date();
let uren = datum.getHours();
uren = (uren < 10 ) ? \`0\${uren}\` : uren;
let minuten = datum.getMinutes();
minuten = (minuten < 10 ) ? \`0\${minuten}\` : minuten;
let seconden = datum.getSeconds();
seconden = (seconden < 10 ) ? \`0\${seconden}\` : seconden;
let tijd = \`\${uren}u\${minuten}m\${seconden}s\`;

// Indien uren kleiner is dan 10, dan is uren een string geworden i.p.v. een nummer. bv "02".
// Om zeker te zijn dat uren altijd een nummer is, voer ik een parseInt uit.
uren = parseInt(uren);

let tekst;

switch (true) {
    case (uren > 7 && uren < 12):
        tekst = "Goedemorgen het is nu";
        break;
    case(uren >= 12 && uren < 18):
        tekst = "Goede dag het is nu";
        break;
    default:
        tekst = "Goede avond het is nu";
}

console.log(tekst,' ', tijd)`,
    },
    {
        oplSem: 'Pro1Sem2',
        reference:['tijd','datum','date','time',],
        explanation: 'date en time',
        comment: '',
        language: 'javascript',
        code: `
const currentDate = new Date()  // datum van vandaag 

const currentYear = new Date().getFullYear();
//2022
const currentMonth = new Date().getMonth()
// 4   <-- index van maand : 0 = Januari , 1 = Februari
const currentDay = new Date().getDay();
// 2   <-- index van dag : 1 = maandag , 2 = dinsdag , ...

const currentHour = new Date().getHours();
// 21
const currentMinutes = new Date().getMinutes();
// 53
const currentSeconds = new Date().getSeconds();
// 19 `,
    },

]
const ConsoleLogJS = [
    {
        oplSem: 'Pro1Sem2',
        reference:['console','table', 'obj'],
        explanation: 'console.log objecten',
        comment:'',
        language: 'javascript',
        code: `
const obj1  = { naam: 'driehoek', hoeken: 3 , heeftVolume: false }
const obj2  = { naam: 'kubus', hoeken: 8 , heeftVolume: true }
const obj3  = { naam: 'cirkel',  hoeken: 0 , heeftVolume: false }

// een voor een 
console.log(obj1);
console.log(obj2);
console.log(obj3);

// alles in een keer door : { }
console.log({obj1, obj2, obj3 })

// als een table 
console.table([obj1 ,obj2,obj3])

// zie wat voor element het is 
const element =  document.getElementById('id')
console.dir(element)    // output div       
        `
    },
    {
        oplSem: 'Pro1Sem2',
        reference:['console','time','tijd meten'],
        explanation: 'tijd meten van een functie ',
        comment: '',
        language: 'javascript',
        code: `
console.time('timer')
        
let i = 0;
while (i < 100000000){i++}
        
console.timeEnd('timer')`
    },
    {
        oplSem: 'Pro1Sem2',
        reference:['console','%','log'],
        explanation: 'maak console.log messages met style',
        comment: '',
        language: 'javascript',
        code: `
console.log('%c  Hallo ', 'font-weight: bolder; color: red')
       
console.log('%c %o hallo', 'font-weight: bolder; color: red', obj1,)
        
console.log('%c %s hallo', 'font-weight: bolder; color: red', obj1,)`
    },
]
const centerTheDiv =[
    {
        oplSem: 'Pro1Sem1',
        reference:['center',],
        explanation: 'center de div',
        comment: '',
        language: 'css',
        code: `
/*plaats de div met position absolute*/
.div{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50% );
}

/*zet de parent als flex */
.flex{
    display: flex;
    align-items: center;
    justify-content: center;
}

/*zet de parent als gird */
.grid{
    display: grid;
    place-content: center;
}`,
    }
]





const codeSnipers = codeSnipersJS.concat(codeSnipersCsharp).concat(ConsoleLogJS).concat(centerTheDiv)













