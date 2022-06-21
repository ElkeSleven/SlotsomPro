

let select
let indexCodeSnupers= ''
let selectedLaguage;
let filterContainer = document.createElement('div')
filterContainer.classList.add('filterContainer')
window.onload = function (){
    createLaguageSelect()
    createSearchBar()
    renderCodeSnipers(codeSnipers)

    select.addEventListener('change', firststepLaguageSelect);
}
function createLaguageSelect(){
    let programLanguages =  []
    codeSnipers.forEach(snip =>
    {
        programLanguages.push(snip.language)
    })
    let uniekeLanguages = programLanguages.sort().reduce(function(a, b){
        if (b !== a[0]) a.unshift(b); return a }, [])
    uniekeLanguages.unshift('alles')

    select = document.createElement('select');
    select.name = 'language';
    uniekeLanguages.forEach(language => {
        let option = document.createElement('option');
        option.value = language;
        option.innerText = language;
        select.appendChild(option);
    });

    let filterboxLanguage = document.createElement('div');
    filterboxLanguage.classList.add('filterboxLanguage')
    filterboxLanguage.innerHTML += `<div>${select.name}</div>`
    filterboxLanguage.appendChild(select);
    filterContainer.appendChild(filterboxLanguage)
    main.appendChild(filterContainer)

}
function firststepLaguageSelect(){
    document.getElementsByClassName('sniperContainer')[0].remove();
    indexCodeSnupers = ''
    filterArrayByLaguageSelect()
}
function filterArrayByLaguageSelect() {

    selectedLaguage = document.getElementsByName('language')[0].value;
    if (selectedLaguage === 'alles') {
        renderCodeSnipers(codeSnipers)
    }
    else {
        renderCodeSnipers(codeSnipers.filter(snipper => {
            return snipper.language === selectedLaguage;
        }))

    }

}


function createSearchBar(){
    let sbInput = document.createElement('input')
    sbInput.id = 'sb'
    let sbButton = document.createElement('button')
    sbButton.innerText = 'klik hier'
    sbButton.addEventListener('click', firststepSearchBar)
    let searchBar = document.createElement('div')
    searchBar.classList.add('SearchBar')
    filterContainer.appendChild(searchBar)
    searchBar.appendChild(sbInput)
    searchBar.appendChild(sbButton)

}
function firststepSearchBar(){
    let i = document.getElementById('sb').value.toLowerCase()
    if(i !== "" && i !== " "){
    document.getElementsByClassName('sniperContainer')[0].remove();
    indexCodeSnupers = ''
    filterArrayBySearchBar(i)}
}
function filterArrayBySearchBar(i){
    let filtered = []
       codeSnipers.filter(s => {
           if (i === 'pro1sem1' || i === 'pro1sem2'){ if(s.oplSem.toLowerCase() === i) {filtered.push(s)}}
           else{
               s.reference.forEach(r => {
                   if(r.toLowerCase() === i || r.toLowerCase().includes(i +' ') || r.toLowerCase().includes(' ' + i +' ') || r.toLowerCase().includes(' ' + i) ) {
                       filtered.push(s)
                   }
               })

           }
       })
    renderCodeSnipers(filtered)
}



function renderCodeSnipers(array){
    array.forEach(sniper => {
  indexCodeSnupers += `
     <div class="codeSniperBox">
     <div class="codeSniperBox--innder">
     <div class="codeSniper__title"> <div>${sniper.explanation} </div> <div>${sniper.language}</div>   </div>
     <div class="codeSniper__code"> <pre><code class="hljs ${sniper.language}"> ${sniper.code}</code></pre>  </div> 
     </div>  </div>  
`})


    render()
}

//         reference:['string','werken met strings'],
//         explanation: 'werken met strings ',
//         comment: '',
//         language: 'javascript',
//         code: `



function render(){
    let d = document.createElement('div')
    d.classList.add('sniperContainer')
    d.innerHTML = indexCodeSnupers;
    main.appendChild(d)
    hljs.initHighlightingOnLoad();
}
