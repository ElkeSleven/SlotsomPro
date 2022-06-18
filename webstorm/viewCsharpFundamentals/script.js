
let convert = ''
let parse = ''
let indexFund = ''

window.onload = function (){
    renderGoeideLinks();
    renderDataTypes();
    renderDateTime();
    renderStatemens();

    render();
}
function renderDataTypes(){
    domiDataTypes.getallen.forEach(e =>{
        indexFund += makeCard(e);
    })
    domiDataTypes.kommagetallen.forEach(e => {
        indexFund += makeCard(e);
    })
    domiDataTypes.Karakters.forEach(e => {
        indexFund += makeCard(e);
    })
    domiDataTypes.truefalse.forEach(e => {
        indexFund += makeCard(e);
    })
    function makeCard(e){
        convert = ''
        parse = ''
        if(e.convertfuncties !== "" && e.convertfuncties !== null ){
            convert  = `Convert.${e.convertfuncties}(...)`;
        }
        if(e.parseMethod !== ""){
            parse = `${e.parseMethod}Parse("...");`;
        }
        if (e.voorbeeld !== ""){

        }



        return `
<div class="dataType">
<div class="dataType--inner">
<div class="dataType__oms">
<div>${e.type}: ${e.omschrijving} </div>
<div>Bytes:${e.groteBytes}  |  Bit:${e.groteBit}</div>
</div>
<div class="dataType__vb">
<div>${e.groteVisueel}</div>
<div>${e.voorbeeld}</div>
<div>${convert}</div> 
<div>${parse}</div>
</div>
</div></div>

 
         
        `
    }
}
function renderDateTime(){
    indexFund +=
        `
        <h3>${domiViewdate_time.title}</h3>
        <p>namespace: ${domiViewdate_time.namespaces}</p>
        <div class="">
          <p>${domiViewdate_time.declareren}</p>
       </div>
        `
       domiViewdate_time.decDateTime.forEach(e =>{
           indexFund += makeCode(e)
       })
    indexFund += `<h3> zo vraag je een datum of tijd aan de console</h3>`;
    domiViewdate_time.outDateTime.forEach(e =>{
        indexFund +=  makeCodeVar(e)
    })
    function makeCode(e){
        return `<div class="disFlex"><p class="">Console.WriteLine(${e.code})</p> <p class=" comment">// output: ${e.uitput}</p></div>`
    }
    function makeCodeVar(e){
        return `<div class="disFlex"><p>Console.WriteLine(DateTime.Now.${e.code})</p> <p class=" comment">// output: ${e.uitput}</p></div>`
    }
}
function renderGoeideLinks(){
    goeieLinks.forEach(e =>{
        indexFund += getReferences(e) +`
        <a href="${e.url}">${e.name}</a>
        <p>${e.beschrijving}</p>
        `
    })
    function getReferences(e){
        let x = `<div class="reference"> `
        e.reference.forEach(r =>{
            x +=`<span>${r}</span>`
        })

        return x + `</div> `
    }
}
function renderStatemens(){
    statemens.forEach(sta =>{
        indexFund +=`
       <h4>${sta.name}</h4>
        <p>${sta.gebruik}</p>`
        + makeSyntax(sta)
    })
    function makeSyntax(ste){
        let x = '';
        ste.syntax.forEach(e =>{
            let i = e.toString()
            if(!i.search('//')){
                x +=`<p class="comment">${e}</p>`
            }
            else{
                x +=`<p>${e}</p>`
            }

        })
        return x
    }
}



function render(){
    main.innerHTML += indexFund
}
