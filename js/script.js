addEventListener('load',inicializarEventos,false);

function inicializarEventos(){
    var ob=document.getElementById('endpoint1');
    ob.addEventListener('click',presionarboton1,false);
    var ob2=document.getElementById('endpoint2');
    ob2.addEventListener('click',presionarboton2,false);
    var ob3=document.getElementById('endpoint3');
    ob3.addEventListener('click',presionarboton3,false);
    var ob4=document.getElementById('endpoint4');
    ob4.addEventListener('click',presionarboton4,false);
    var ob5=document.getElementById('endpoint5');
    ob5.addEventListener('click',presionarboton5,false);
    var ob6=document.getElementById('endpoint6');
    ob6.addEventListener('click',presionarboton6,false);
    var ob7=document.getElementById('endpoint7');
    ob7.addEventListener('click',presionarboton7,false);
    var ob8=document.getElementById('endpoint8');
    ob8.addEventListener('click',presionarboton8,false);
    var ob9=document.getElementById('endpoint9');
    ob9.addEventListener('click',presionarboton9,false);
    var ob10=document.getElementById('endpoint10');
    ob10.addEventListener('click',presionarboton10,false);
    var ob11=document.getElementById('endpoint11');
    ob11.addEventListener('click',presionarboton11,false);
}

function presionarboton1(){
    alert('Botón presionado');
    getAll();
}
function presionarboton2(){
    alert('Botón presionado');
    var nombre_pais=prompt("Introduzca el nombre del país");
    getPaisxNombre(nombre_pais);
}
function presionarboton3(){
    alert('Botón presionado');
    var nombre_pais=prompt("Introduzca el nombre del país");
    getPaisxNombreFull(nombre_pais);
}
function presionarboton4(){
    alert('Botón presionado');
    var nombre_pais=prompt("Introduzca el codigo de alpha");
    getPaisxAlpha(nombre_pais);
}
function presionarboton5(){
    alert('Botón presionado');
    var nombre_pais1=prompt("Introduzca el codigo de alpha del primer país");
    var nombre_pais2=prompt("Introduzca el codigo de alpha del segundo país");
    var nombre_pais3=prompt("Introduzca el codigo de alpha del tercer país");
    getPaisxAlphaVarios(nombre_pais1,nombre_pais2,nombre_pais3);
}
function presionarboton6(){
    alert('Botón presionado');
    var nombre_pais1=prompt("Introduzca el codigo de la moneda");
    getPaisxCurrency(nombre_pais1);
}
function presionarboton7(){
    alert('Botón presionado');
    var nombre_pais1=prompt("Introduzca el codigo del idioma");
    getPaisxLang(nombre_pais1);
}
function presionarboton8(){
    alert('Botón presionado');
    var nombre_pais1=prompt("Introduzca la capital");
    getPaisxCapi(nombre_pais1);
}
function presionarboton9(){
    alert('Botón presionado');
    var nombre_pais1=prompt("Introduzca el código");
    getPaisxCodigo(nombre_pais1);
}
function presionarboton10(){
    alert('Botón presionado');
    var nombre_pais1=prompt("Introduzca la región");
    getPaisxRegion(nombre_pais1);
}
function presionarboton11(){
    alert('Botón presionado');
    var nombre_pais1=prompt("Introduzca la región x código");
    getPaisxRegionCod(nombre_pais1);
}

function getPaisxRegionCod(nom){
    $.ajax({
        url:"https://restcountries.eu/rest/v2/regionalbloc/" + nom,
        method:'GET',
        dataType:'json',
        headers:{
            'Accept':'application/json'
            //'Authorization':'Bearer dnfkasjdflñasjfdasnlewjoidasjñldfjjadkl'
        },
        contentType:'application/x-www-form-urlencoded',
        success:function(data){
            let text="<p>";
            /*
            console.log(data.data[0].id);
            console.log(JSON.stringify(data));
            */
           data.forEach(element => {
               //document.getElementById("resultados").innerHTML=document.getElementById("resultados").textContent + element.name
               text=text + "<br>" + element.name + " - " + element.capital + " - " + element.region; //meto los registros en una variable
           });
           console.log(JSON.stringify(data));//retorna todo el paquete por consola
           console.log(JSON.stringify(data[0]));//retorna los valores del registro 0
           console.log(JSON.stringify(data[0].name));//retorna el nombre del registro 0
           document.getElementById("resultados").innerHTML=text + "</p>";//pinto los registros en el div resultados
        },
        error:function(error){
            console.log(error);
        }
    })
}

function getPaisxRegion(nom){
    $.ajax({
        url:"https://restcountries.eu/rest/v2/region/" + nom,
        method:'GET',
        dataType:'json',
        headers:{
            'Accept':'application/json'
            //'Authorization':'Bearer dnfkasjdflñasjfdasnlewjoidasjñldfjjadkl'
        },
        contentType:'application/x-www-form-urlencoded',
        success:function(data){
            let text="<p>";
            /*
            console.log(data.data[0].id);
            console.log(JSON.stringify(data));
            */
           data.forEach(element => {
               //document.getElementById("resultados").innerHTML=document.getElementById("resultados").textContent + element.name
               text=text + "<br>" + element.name + " - " + element.capital + " - " + element.region; //meto los registros en una variable
           });
           console.log(JSON.stringify(data));//retorna todo el paquete por consola
           console.log(JSON.stringify(data[0]));//retorna los valores del registro 0
           console.log(JSON.stringify(data[0].name));//retorna el nombre del registro 0
           document.getElementById("resultados").innerHTML=text + "</p>";//pinto los registros en el div resultados
        },
        error:function(error){
            console.log(error);
        }
    })
}

function getPaisxCodigo(nom){
    $.ajax({
        url:"https://restcountries.eu/rest/v2/callingcode/" + nom,
        method:'GET',
        dataType:'json',
        headers:{
            'Accept':'application/json'
        },
        contentType:'application/x-www-form-urlencoded',
        success:function(data){
            let text="<p>";
           data.forEach(element => {
               text=text + "<br>" + element.name + " - " + element.capital + " - " + element.region; //meto los registros en una variable
           });
           document.getElementById("resultados").innerHTML=text + "</p>";//pinto los registros en el div resultados
        },
        error:function(error){
            console.log(error);
        }
    })
}

function getPaisxCapi(nom){
    $.ajax({
        url:"https://restcountries.eu/rest/v2/capital/" + nom,
        method:'GET',
        dataType:'json',
        headers:{
            'Accept':'application/json'
        },
        contentType:'application/x-www-form-urlencoded',
        success:function(data){
            let text="<p>";
           data.forEach(element => {
               text=text + "<br>" + element.name + " - " + element.capital + " - " + element.region; //meto los registros en una variable
           });
           document.getElementById("resultados").innerHTML=text + "</p>";//pinto los registros en el div resultados
        },
        error:function(error){
            console.log(error);
        }
    })
}

function getPaisxLang(nom){
    $.ajax({
        url:"https://restcountries.eu/rest/v2/lang/" + nom,
        method:'GET',
        dataType:'json',
        headers:{
            'Accept':'application/json'
        },
        contentType:'application/x-www-form-urlencoded',
        success:function(data){
            let text="<p>";
           data.forEach(element => {
               text=text + "<br>" + element.name + " - " + element.capital + " - " + element.region; //meto los registros en una variable
           });
           document.getElementById("resultados").innerHTML=text + "</p>";//pinto los registros en el div resultados
        },
        error:function(error){
            console.log(error);
        }
    })
}

function getPaisxCurrency(nom){
    $.ajax({
        url:"https://restcountries.eu/rest/v2/currency/" + nom,
        method:'GET',
        dataType:'json',
        headers:{
            'Accept':'application/json'
        },
        contentType:'application/x-www-form-urlencoded',
        success:function(data){
            let text="<p>";
           data.forEach(element => {
               text=text + "<br>" + element.name + " - " + element.capital + " - " + element.region; //meto los registros en una variable
           });
           document.getElementById("resultados").innerHTML=text + "</p>";//pinto los registros en el div resultados
        },
        error:function(error){
            console.log(error);
        }
    })
}

function getPaisxAlphaVarios(nom,nom1,nom2){
    $.ajax({
        url:"https://restcountries.eu/rest/v2/alpha?codes=" + nom + ";" + nom1 + ";" + nom2,
        method:'GET',
        dataType:'json',
        headers:{
            'Accept':'application/json'
        },
        contentType:'application/x-www-form-urlencoded',
        success:function(data){
            let text="<p>";
           data.forEach(element => {
               text=text + "<br>" + element.name + " - " + element.capital + " - " + element.region; //meto los registros en una variable
           });
           document.getElementById("resultados").innerHTML=text + "</p>";//pinto los registros en el div resultados
        },
        error:function(error){
            console.log(error);
        }
    })
}

function getPaisxAlpha(nom){
    $.ajax({
        url:"https://restcountries.eu/rest/v2/alpha/" + nom,
        method:'GET',
        dataType:'json',
        headers:{
            'Accept':'application/json'
        },
        contentType:'application/x-www-form-urlencoded',
        success:function(data){
            let text="<p>";
               text= data.name + " - " + data.capital + " - " + data.region; //meto los registros en una variable
           document.getElementById("resultados").innerHTML=text + "</p>";//pinto los registros en el div resultados
        },
        error:function(error){
            console.log(error);
        }
    })
}

function getPaisxNombreFull(nom){
    $.ajax({
        url:"https://restcountries.eu/rest/v2/name/" + nom + "?fullText=true",
        method:'GET',
        dataType:'json',
        headers:{
            'Accept':'application/json'
        },
        contentType:'application/x-www-form-urlencoded',
        success:function(data){
            let text="<p>";
           data.forEach(element => {
               text=text + "<br>" + element.name + " - " + element.capital + " - " + element.region; //meto los registros en una variable
           });
           document.getElementById("resultados").innerHTML=text + "</p>";//pinto los registros en el div resultados
        },
        error:function(error){
            console.log(error);
        }
    })
}

function getPaisxNombre(nom){
    $.ajax({
        url:"https://restcountries.eu/rest/v2/name/" + nom,
        method:'GET',
        dataType:'json',
        headers:{
            'Accept':'application/json'
        },
        contentType:'application/x-www-form-urlencoded',
        success:function(data){
            let text="<p>";
           data.forEach(element => {
               text=text + "<br>" + element.name + " - " + element.capital + " - " + element.region; //meto los registros en una variable
           });
           document.getElementById("resultados").innerHTML=text + "</p>";//pinto los registros en el div resultados
        },
        error:function(error){
            console.log(error);
        }
    })
}

function getAll(){
    $.ajax({
        url:"https://restcountries.eu/rest/v2/all",
        method:'GET',
        dataType:'json',
        headers:{
            'Accept':'application/json'
        },
        contentType:'application/x-www-form-urlencoded',
        success:function(data){
            let text="<p>";
           data.forEach(element => {
               text=text + "<br>" + element.name + " - " + element.region; //meto los registros en una variable
           });
           document.getElementById("resultados").innerHTML=text + "</p>";//pinto los registros en el div resultados
        },
        error:function(error){
            console.log(error);
        }
    })
}