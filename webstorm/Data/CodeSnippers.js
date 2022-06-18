


const codeSnipers =  [

    {
             vak: ['Csharp'],
            oplSem: ['Pro1Sem1','Pro1'],
            reference:['timer','DispatcherTimer','TimeSpan', 'Pro1Sem1'],
            explanation: '',
            program: 'WPF',
            code: ['//declareer variable die we nodig hebben','private int increment = 0; ',' private DispatcherTimer timer;',
                '//timer Start Button',
                'private void btnStart_Click(object sender, RoutedEventArgs e)',
                '{','StartTimer();','}',
                ' // timer die optelt of aftelt ',
                'private void StartTimer()',
                '{','timer = new DispatcherTimer();' ,
                'timer.Interval = new TimeSpan(0, 0, 1);' ,
                'timer.Tick += timer_Tick;',
                'timer.Start();','}',
                '// timer verschijnt op scherm',
                ' private void timer_Tick(object sender, EventArgs e)',
                '{',' increment++;',
                ' TxtOpXaml.Text = increment.ToString();','}',


            ]
    },
    {
        vak: ['Csharp'],
            oplSem: ['Pro1Sem1','Pro1'],
            reference: ['Window_Closing', 'closing', 'xaml', 'Pro1Sem1'],
            explanation: '',
            comment:'',
            program: 'WPF',
            code: [ '//Window_Closing event',
                'private void Window_Closing(object sender, System.ComponentModel.CancelEventArgs e)',
                'MessageBoxResult result = MessageBox.Show("bent u zeker", "afsluiten", MessageBoxButton.YesNo);' ,
                '' , 'switch (result)' , '{',' case MessageBoxResult.Yes:', 'break;' , 'default:' ,
                'e.Cancel = true;' , 'break;' , '}',
                '//Window_Closing event',
                'private void Window_Closing(object sender, System.ComponentModel.CancelEventArgs e)',
                'MessageBoxResult result = MessageBox.Show("ben je zeker", "afsluiten", MessageBoxButton.YesNo, MessageBoxImage.Question);' ,
                ' if(result != MessageBoxResult.Yes)', ' {', '  e.Cancel = true;', ' }',
            ],
    },
    {
            vak: ['Csharp'],
            oplSem: ['Pro1Sem1','Pro1', ],
            reference: ['MessageBox', 'Pro1Sem1'],
            explanation: '',
            comment:'',
            program: 'WPF',
            code: ['//Messagebox', 'MessageBox.Show("bericht aan gebruiker ");',
                '//Messagebox met title', 'MessageBox.Show("bericht aan gebruiker ", "dit is de title");',

            ]
       },
    {
        vak: ['Csharp'],
        oplSem: ['Pro1Sem1','Pro1', ],
        reference: ['MessageBox','MessageBoxResult','Pro1Sem1', 'MessageBoxButton'],
        explanation: '',
        comment:'',
        program: 'WPF',
        code: ['//Messagebox', 'MessageBoxResult result ',
            'result =  MessageBox.Show("Is Brussel de hoofdstad van Belgie ?", "Quiz", MessageBoxButton.YesNo);',
        'if (result == MessageBoxResult.Yes)' , '{',
        'MessageBox.Show("Ja - correct!", "Oplossing");', '}',
        'else', '{', 'MessageBox.Show("Sorry: verkeerd", "Oplossing");', '}'
        ]
    },
    {
        vak: ['Csharp'],
        oplSem: ['Pro1Sem1','Pro1', ],
        reference: ['MessageBox','MessageBoxImage','Pro1Sem1', 'MessageBoxButton'],
        explanation: '',
        comment:'',
        program: 'WPF',
        code: ['//Messagebox met tekening ',
            'MessageBox.Show("Message", "Title", MessageBoxButton.OKCancel,  MessageBoxImage.Information);',
            'MessageBox.Show("Message", "Title", MessageBoxButton.OKCancel,  MessageBoxImage.Question);',
            'MessageBox.Show("Message", "Title", MessageBoxButton.OKCancel,  MessageBoxImage.Warning);',
            'MessageBox.Show("Message", "Title", MessageBoxButton.OKCancel,  MessageBoxImage.Exclamation);',
            'MessageBox.Show("Message", "Title", MessageBoxButton.OKCancel,  MessageBoxImage.Error);'
        ]
    },


]

