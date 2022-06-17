
let convert = ''
let parse = ''
let index = ''

window.onload = function (){
    renderGoeideLinks();
    renderDataTypes();
    renderDateTime();

    render();
}
function renderDataTypes(){
    domiDataTypes.getallen.forEach(e =>{
        index += makeCard(e);
    })
    domiDataTypes.kommagetallen.forEach(e => {
        index += makeCard(e);
    })
    domiDataTypes.Karakters.forEach(e => {
        index += makeCard(e);
    })
    domiDataTypes.truefalse.forEach(e => {
        index += makeCard(e);
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
<div class="dataType__oms">
<div>${e.type}: ${e.omschrijving} </div>
<div>Bytes:${e.groteBytes}  |  Bit:${e.groteBit}</div>
<div>${e.groteVisueel} </div>
</div>
<div class="dataType__vb">
<div>${e.voorbeeld}</div>
<div>${convert}</div> 
<div>${parse}</div>
</div>
</div>

 
         
        `
    }
}
function renderDateTime(){
    index +=
        `
        <h3>${domiViewdate_time.title}</h3>
        <p>namespace: ${domiViewdate_time.namespaces}</p>
        <div class="code setPadding">
          <p>${domiViewdate_time.declareren}</p>
       </div>
        `
       domiViewdate_time.decDateTime.forEach(e =>{
           index += makeCode(e)
       })
    index += `<h3> zo vraag je een datum of tijd aan de console</h3>`;
    domiViewdate_time.outDateTime.forEach(e =>{
        index +=  makeCodeVar(e)
    })
    function makeCode(e){
        return `<div class="code code--hor"><div class="code--inner"><p class="row-hor-split2">Console.WriteLine(${e.code})</p> <p class="row-hor-split2 comment"> // output: ${e.uitput}</p></div></div>`
    }
    function makeCodeVar(e){
        return `<div class="code code--hor"><div class="code--inner"><p class="row-hor-split2">Console.WriteLine(DateTime.Now.${e.code})</p> <p class="row-hor-split2 comment"> // output: ${e.uitput}</p></div></div>`
    }
}
function renderGoeideLinks(){
    goeieLinks.forEach(e =>{
        index += getReferences(e) +`
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




function render(){
    document.body.innerHTML += index
}
