


const codeSnipers =  [

    {
             vak: ['Csharp'],
            oplSem: 'Pro1Sem1',
            reference:['timer','DispatcherTimer','TimeSpan', 'Pro1Sem1'],
            explanation: 'DispatcherTimer timer',
            comment:'',
            program: 'WPF',
            code: `<pre><code>
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

</code></pre>`,

    },
    {
        vak: ['Csharp'],
            oplSem: 'Pro1Sem1',
            reference: ['Window_Closing', 'closing', 'xaml', 'Pro1Sem1', 'switch'],
            explanation: 'Window_Closing event met switch',
            comment:'',
            program: 'WPF',
            code: `<pre><code>
        //Window_Closing event met switch
        private void Window_Closing(object sender, System.ComponentModel.CancelEventArgs e)
        {
            MessageBoxResult result = MessageBox.Show("bent u zeker", "afsluiten", MessageBoxButton.YesNo);
            switch (result)
            {
                case MessageBoxResult.Yes: break;
                default:e.Cancel = true; break;
            }
          
        }</code></pre>`
    },
    {
        vak: ['Csharp'],
            oplSem: 'Pro1Sem1',
            reference: ['Window_Closing', 'closing', 'xaml', 'Pro1Sem1', 'if-statement'],
            explanation: 'Window_Closing event met if-statement\n',
            comment:'',
            program: 'WPF',
            code: `<pre><code>
        //Window_Closing event met if-statement
        private void Window_Closing(object sender, System.ComponentModel.CancelEventArgs e)
        {
            MessageBoxResult result = MessageBox.Show("ben je zeker", "afsluiten", MessageBoxButton.YesNo, MessageBoxImage.Question);
            if (result != MessageBoxResult.Yes) { e.Cancel = true; }
        }

</code></pre>`
    },
    {
            vak: ['Csharp'],
            oplSem: 'Pro1Sem1',
            reference: ['MessageBox', 'Pro1Sem1'],
            explanation: 'Messagebox ',
            comment:'',
            program: 'WPF',
            code: `<pre><code>
            //Messagebox
            MessageBox.Show("bericht aan gebruiker ");

            // Messagebox met title
            MessageBox.Show("bericht aan gebruiker ", "dit is de title");
</code></pre>
           `},
    {
        vak: ['Csharp'],
        oplSem: 'Pro1Sem1',
        reference: ['MessageBox','MessageBoxResult','Pro1Sem1', 'MessageBoxButton'],
        explanation: 'Messagebox met Yes No input',
        comment:'',
        program: 'WPF',
        code: `<pre><code>
            
            MessageBoxResult result;
            result = MessageBox.Show("Is Brussel de hoofdstad van Belgie ?", "Quiz", MessageBoxButton.YesNo);
            if (result == MessageBoxResult.Yes)
            {
                MessageBox.Show("Ja - correct!", "Oplossing");
            }
            else
            {
                MessageBox.Show("Sorry: verkeerd", "Oplossing");
            }</code></pre>`
    },
    {
        vak: ['Csharp'],
        oplSem: 'Pro1Sem1',
        reference: ['MessageBox','MessageBoxImage','Pro1Sem1', 'MessageBoxButton'],
        explanation: 'Messagebox met tekening ',
        comment:'',
        program: 'WPF',
        code: `<pre><code>
            //Messagebox met tekening 
            MessageBox.Show("Message", "Title", MessageBoxButton.OKCancel, MessageBoxImage.Information);
            MessageBox.Show("Message", "Title", MessageBoxButton.OKCancel, MessageBoxImage.Question);
            MessageBox.Show("Message", "Title", MessageBoxButton.OKCancel, MessageBoxImage.Warning);
            MessageBox.Show("Message", "Title", MessageBoxButton.OKCancel, MessageBoxImage.Exclamation);
            MessageBox.Show("Message", "Title", MessageBoxButton.OKCancel, MessageBoxImage.Error);
</code></pre>`
    },
    {
        vak: ['Csharp'],
        oplSem: 'Pro1Sem2',
        reference: ['OpenFileDialog','ShowDialog','Pro1Sem2', 'Gebruiker kan file kiezen'],
        explanation: 'OpenFileDialog : laat de gebruiker een file kiezen ',
        comment: '',
        program: 'WPF',
        code: `<pre><code>
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
</code></pre>`,
    },
    {
        vak: ['Csharp'],
        oplSem: 'Pro1Sem2',
        reference: ['OpenFileDialog','ShowDialog','Pro1Sem2', 'Gebruiker kan file kiezen', 'Environment', 'SpecialFolder', 'SaveFileDialog'],
        explanation: 'open de verkenner op verschillende locaties',
        comment: '',
        program: 'WPF',
        code: `<pre><code>
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


</code></pre>`,
    },


]
