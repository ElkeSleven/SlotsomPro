

let select
let indexCodeSnupers= ''
let selectedLaguage;
window.onload = function (){
    createLaguageSelect()
    select.addEventListener('change', firststepLaguageSelect);
    renderCodeSnipers(codeSnipers)
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
        let a = codeSnipers.filter(snipper => {
            return snipper.language === selectedLaguage;
        })
        renderCodeSnipers(a)
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
