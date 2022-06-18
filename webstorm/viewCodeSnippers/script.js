


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
  <p>${sniper.explanation}</p>`
      + sniper.code
   +   ` <p>${sniper.comment}</p> `


    })
}
function render(){
    main.innerHTML = indexCodeSnupers;
}
