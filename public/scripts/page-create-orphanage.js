const map = L.map('mapid').setView([-23.5349585,-46.5777686], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
 .addTo(map);

const icon = L.icon({
    iconUrl: "/assets/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],

})

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    marker && map.removeLayer(marker)

    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

function addPhotoField() {
    // Pega o container de fotos #images
    const container = document.querySelector('#images')
    // Pega o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // Realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //Verificar se o campo esta vazio, se sim, não adicionar ao contaner de imagens
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }

    // Limpar o campo antes de adicionar ao container de imagens
    input.value = ""

    // Adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)

}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        // Limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // Deletar o campo
    span.parentNode.remove()
}

// Seleção Sim / Não
function toggleSelect(event) {
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'))

    const button = event.currentTarget
    button.classList.add('active')

    const input = document.querySelector('[name="open_on_weekends"]')
    
    input.value = button.dataset.value
}