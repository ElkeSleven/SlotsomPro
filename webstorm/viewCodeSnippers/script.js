


let indexCodeSnupers= ''
window.onload = function (){
    renderCodeSnipers()
    render()
    hljs.initHighlightingOnLoad();

}






function renderCodeSnipers(){
    codeSnipers.forEach(sniper => {
     //makeCodeSniper(sniper.code)

  indexCodeSnupers += `
  <h5>${sniper.explanation}</h5> <p>${sniper.comment}</p>`
      +`<pre><code class="hljs language-typescript">`+ sniper.code + `</code></pre>`
    })
}
function render(){
    let d = document.createElement('div')
    d.classList.add('sniperContainer')
    d.innerHTML = indexCodeSnupers;
    main.appendChild(d)
}
