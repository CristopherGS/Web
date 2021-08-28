var cont = 0
let resultados = []
fetch('https://rickandmortyapi.com/api/character/?page=2')
    .then(data => data.json())
    .then(res => {
        resultados = res.results
        console.log(resultados[cont].name);
        // cambio la ruta de la imgaen de perfil a la de json
        document.getElementById('name').innerHTML = JSON.stringify(resultados[cont].name);
        document.getElementById('status').innerHTML = JSON.stringify(resultados[cont].status);
        document.getElementById('specimen').innerHTML = JSON.stringify(resultados[cont].specimen);
        document.getElementById('img-perfil').src = resultados[cont].image
        document.getElementById('index').innerHTML = JSON.stringify(resultados[cont].id);
    })
let funcion = () => {
    if(cont <= 20){
        document.getElementById('name').innerHTML = JSON.stringify(resultados[cont].name);
        document.getElementById('name').innerHTML = JSON.stringify(resultados[cont].name);
        document.getElementById('status').innerHTML = JSON.stringify(resultados[cont].status);
        document.getElementById('specimen').innerHTML = JSON.stringify(resultados[cont].specimen);
        document.getElementById('img-perfil').src = resultados[cont].image
        document.getElementById('index').innerHTML = JSON.stringify(resultados[cont].id);
        cont++
    }else{
        cont = 0;
    }
}