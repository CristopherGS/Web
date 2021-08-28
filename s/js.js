// let resultados = []
const $plantilla = document.getElementById('template').content,
    $fragmento = document.createDocumentFragment(),
    $contene = document.getElementById('container-fluid')

async function API() {
    const jason = await fetch('https://rickandmortyapi.com/api/character/?page=10')
    const res = await jason.json()
    const resultados = await res.results

    resultados.forEach(ress => {

        const copiar = $plantilla.cloneNode(true)

        copiar.querySelector(".card-header").textContent = ress.name

        copiar.querySelector(".img").src = ress.image

        copiar.querySelector(".card-text").textContent = ress.species

        $fragmento.appendChild(copiar)
    });

    $contene.appendChild($fragmento)


}
API()
document.getElementById('btn').addEventListener('click', function() {
    history.back()
    console.log('entro');
})