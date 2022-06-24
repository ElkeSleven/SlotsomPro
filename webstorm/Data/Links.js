
/*
development: 'fullstack',
languages: ['css','react','js','vue','sql', 'mongodb','csharp'],
* */

// learn play

const awesomeLinks = [
        {
            development: 'frontend',
            languages: ['css'],
            group: 'Website Link',
            naam: 'fancy-border-radius',
            omschrijving: 'maak custom css figuren',
            url: "https://9elements.github.io/fancy-border-radius/",
            reference: [ 'border-radius','blob', 'cirkel','figuur','figuren', 'shape' ]
        },
        {

            development: 'backend',
            languages: ['json', 'csv'],
            group: 'Website Link',
            naam: 'CSV-JSON',
            omschrijving: 'zet csv naar json of json naar csv',
            url: "https://csvjson.com/",
            reference: [ 'json','csv' ]
        },
        {

            development: 'frontend',
            languages: ['css'],
            group: 'Website Link',
            naam: 'CSSBattle',
            omschrijving: 'test je css kennis',
            url: "https://cssbattle.dev/",
            reference: [ 'play', 'learn']
        },
        {
            development: 'frontend',
            languages: ['css'],
            group: 'Website Link',
            naam: 'SVG assets designer ',
            omschrijving: 'Generate unique SVG design assets',
            url: "https://haikei.app/",
            reference: [ 'Wave', 'Background', 'Blob', 'Waves', 'Shape', 'Figuur','Figuren', 'SVG']
        },
        {
            development: 'frontend',
            languages: ['css'],
            group: 'Website Link',
            naam: 'SVG shape divider',
            omschrijving: 'Generate SVG shape divider',
            url: "https://www.shapedivider.app/",
            reference: ['Wave', 'Dividers', 'Waves', 'Shape', 'Figuur','Figuren', 'SVG']
        },
        {
            development: 'frontend',
            languages: ['css'],
            group: 'Website Link',
            naam: 'microsoft lean platform',
            omschrijving: 'leer modules van microsoft ',
            url: "https://docs.microsoft.com/en-us/learn/browse/",
            reference: ['Csharp', 'dotnet', 'GitHub', 'azure', 'Shape', 'SQL','msSQL', 'Data Analyst'
                ,'Developer', 'DevOps','Visual Studio','.NET','Entity Framework', '.NET Core']
        },
        {
            development: 'frontend',
            languages: ['css'],
            group: 'Website Link',
            naam: 'Conquering Responsive Layouts',
            omschrijving: 'van Kevin Powell(youtube) gratis cursus over responsive web-design',
            url: "https://kevinpowell.co/responsive",
            reference: ['responsive','layout', 'learn']
        },
        {
            development: 'backend',
            languages: ['csharp', 'js','typescript',],
            group: 'Website Link',
            naam: 'LeetCode Questions',
            omschrijving: 'website met links naar oefenigen  ',
            url: "https://www.teamblind.com/post/New-Year-Gift---Curated-List-of-Top-75-LeetCode-Questions-to-Save-Your-Time-OaM1orEU",
            reference: ['learn']
        },
        {
            development: 'fullstack',
            languages: ['csharp', 'js','typescript','sql'],
            group: 'Website Link',
            naam: 'codewars',
            omschrijving: 'complete challenges to rank up',
            url: "https://www.codewars.com/",
            reference: ['learn','play']
        },
    // hier beginnen de YT kanalen
        {
            development: 'fullstack',
            languages: ['css','react','js','vue','sql', 'mongodb','csharp'],
            group: 'YT-Channel',
            naam: 'Fireship',
            omschrijving: 'code tutorials to help you build & ship your app faster.',
            url: "https://www.youtube.com/c/Fireship",
            reference: []
        },
        {

        development: 'frontend',
        languages: ['js','vue','react'],
        group: 'YT-Channel',
        naam: 'Tyler Potts',
        omschrijving: 'maakt video\' over js , vue , react , ...',
        url: "https://www.youtube.com/c/TylerPotts",
        reference: []
    },
        {
            development: 'frontend',
            languages: ['css','html','js','vue','node.js',],
            group: 'YT-Channel',
            naam: 'dcode',
            omschrijving: 'web development tutorials',
            url: "https://www.youtube.com/c/dcode-software",
            reference: []
        },
        {
            development: 'frontend',
            languages: ['css','html','js',],
            group: 'YT-Channel',
            naam: 'Web Dev Simplified',
            omschrijving: 'legt principes van js uit',
            url: "https://www.youtube.com/c/WebDevSimplified",
            reference: []
        },
        {
            development: 'frontend',
            languages: ['css','html','sass',],
            group: 'YT-Channel',
            naam: 'Kevin Powell',
            omschrijving: 'legt principes van Css en sass uit',
            url: "https://www.youtube.com/kepowob",
            reference: []
        },
        {

            development: 'backend',
            languages: ['csharp', 'sql'],
            group: 'YT-Channel',
            naam: 'IAmTimCorey',
            omschrijving: 'legt principes van Csharp uit',
            url: "https://www.youtube.com/user/IAmTimCorey",
            reference: [ 'WPF', 'xaml']
        },
        {
            development: 'backend',
            languages: ['csharp', 'sql'],
            group: 'YT-Channel',
            naam: 'Rainer Stropek',
            omschrijving: 'legt principes van Csharp uit <br> P.S. gebruikt nieuwst versie van .net',
            url: "https://www.youtube.com/c/RainerStropek11",
            reference: []
        },
        {
            development: 'fullstack',
            languages: ['csharp','js','html','css',],
            group: 'YT-Channel',
            naam: 'Bro Code',
            omschrijving: 'tutorials,  data structure (no code)  , games in JS ',
            url: "https://www.youtube.com/c/BroCodez",
            reference: []
        },
        {
            development: 'fullstack',
            languages: ['csharp',],
            group: 'YT-Channel',
            naam: 'Moo ICT',
            omschrijving: 'maakt games in enkel C# en xaml ',
            url: "https://www.youtube.com/c/MooICT",
            reference: [ 'WPF', 'xaml']
        },
        {
            development: 'backend',
            languages: ['csharp','.net'],
            group: 'YT-Channel',
            naam: 'dotNET',
            omschrijving: 'kanaal over .net ',
            url: "https://www.youtube.com/c/dotNET",
            reference: ['.Net']
        },
    // hier beginnen de linken naar YT video's of afspeellijsten
        {
            development: 'backend',
            languages: ['csharp'],
            group: 'YT-Video',
            naam: 'C# for Beginners',
            omschrijving: '8uur uitleg van \'hello world\' tot lists, entities, ...',
            url: "https://www.youtube.com/watch?v=0QUgvfuKvWU",
            reference: ['ConsoleAPP', 'Beginner']
        },
        {
            development: 'frontend',
            languages: ['css'],
            group: 'YT-Video',
            naam: 'CSS units : px , rem , em , vh , vw , ...',
            omschrijving: 'uitleg over CSS units',
            url: "https://www.youtube.com/watch?v=N5wpD9Ov_To",
            reference: ['units','rem','em']
        },
        {
        development: 'backend',
        languages: ['csharp'],
        group: 'YT-PlayList',
        naam: 'C# for Beginners to pro',
        omschrijving: 'uitleg over C# <br> van hello wold to linq en oop',
        url: "https://www.youtube.com/watch?v=BM4CHBmAPh4&list=PLdo4fOcmZ0oVxKLQCHpiUWun7vlJJvUiN",
        reference: ['linq', 'Pro1Sem1', 'Pro1Sem2']
    },
]


// https://www.youtube.com/watch?v=QY7Rj8aZcZk

