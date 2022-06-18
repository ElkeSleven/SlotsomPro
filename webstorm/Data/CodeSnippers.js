

const snippers = [{
    Csharp : {
        ref: ['Csharp','Pro1Sem1','Pro1'],
        timer: {
            reference:['timer','DispatcherTimer','TimeSpan'],
            wpf: [
                {
                    comment: '//declareer variable die we nodig hebben',
                    method: 'private int increment = 0; <b> private DispatcherTimer timer;',
                    code: null,
                },{
                    comment: '//timer Start Button',
                    method: 'private void btnStart_Click(object sender, RoutedEventArgs e)',
                    code: 'StartTimer();',
                },
                {
                    comment: ' // timer die optelt of aftelt ',
                    method: 'private void StartTimer()',
                    code: 'timer = new DispatcherTimer();\n' +
                        'timer.Interval = new TimeSpan(0, 0, 1);\n' +
                        'timer.Tick += timer_Tick;\n' +
                        'timer.Start();',
                },{
                    comment: '// timer verschijnt op scherm',
                    method: ' private void timer_Tick(object sender, EventArgs e)',
                    code: ' increment++;\n' +
                        ' TxtOpXaml.Text = increment.ToString();',
                },


            ],
        },
        windowClosing:{
            reference: ['Window_Closing', 'closing', 'xaml'],
            wpf: [{
                comment: '//Window_Closing event',
                method: 'private void Window_Closing(object sender, System.ComponentModel.CancelEventArgs e)',
                code: 'MessageBoxResult result = MessageBox.Show("bent u zeker", "afsluiten", MessageBoxButton.YesNo);\n' +
                    '\n' +
                    '            switch (result)\n' +
                    '            {\n' +
                    '                case MessageBoxResult.Yes:\n' +
                    '                    break;\n' +
                    '                default:\n' +
                    '                    e.Cancel = true;\n' +
                    '                    break;\n' +
                    '            }',
            },
                {
                    comment: '//Window_Closing event',
                    method: 'private void Window_Closing(object sender, System.ComponentModel.CancelEventArgs e)',
                    code: '            MessageBoxResult result = MessageBox.Show("ben je zeker", "afsluiten", MessageBoxButton.YesNo, MessageBoxImage.Question);\n' +
                        '            if(result != MessageBoxResult.Yes)\n' +
                        '            {\n' +
                        '                e.Cancel = true;\n' +
                        '            }'
                },
            ],
        },

    },
    JS: {
        ref: ['JS','Pro1Sem1','Pro1','web'],



    },

}]
