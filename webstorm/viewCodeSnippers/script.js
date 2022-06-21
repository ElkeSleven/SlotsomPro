

let select
let indexCodeSnupers= ''
let selectedLaguage;
window.onload = function (){
    createLaguageSelect()
    createSearchBar()
    renderCodeSnipers(codeSnipers)

    select.addEventListener('change', firststepLaguageSelect);
}

function createSearchBar(){
    let sbInput = document.createElement('input')
    sbInput.id = 'sb'
    let sbButton = document.createElement('button')
    sbButton.innerText = 'klik hier'
    sbButton.addEventListener('click', firststepSearchBar)
    main.appendChild(sbInput)
    main.appendChild(sbButton)
}

function firststepSearchBar(){
    let i = document.getElementById('sb').value.toLowerCase()
    if(i !== ""){
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
                   if(r === i) {
                       filtered.push(s)
                   }
               })

           }
       })
    renderCodeSnipers(filtered)
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
    let filterboxLanguage = document.createElement('div')
    let div = document.createElement('div');
    div.innerHTML += `<div>${select.name}</div>`
    div.appendChild(select);
    filterboxLanguage.appendChild(div)
    main.appendChild(filterboxLanguage)

}
function renderCodeSnipers(array){
    array.forEach(sniper => {
  indexCodeSnupers += `
  <h5>${sniper.explanation}</h5> <p>${sniper.comment}</p>`
      +`<pre><code class="hljs ${sniper.language}">`+ sniper.code + `</code></pre>`
    })
    render()
}
function render(){
    let d = document.createElement('div')
    d.classList.add('sniperContainer')
    d.innerHTML = indexCodeSnupers;
    main.appendChild(d)
    hljs.initHighlightingOnLoad();
}
