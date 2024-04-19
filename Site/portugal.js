// Criar o mapa e definir as coordenadas iniciais e o nível de zoom
const map = L.map('mapid').setView([39.3999, -8.2245], 6);

// Adicionar camada de azulejos (tile layer) do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Dicionário com cada umas das Universidades, as suas respetivas coordenadas e distrito
const institucions = [
  { name: "Universidade de Lisboa", coordinates: [38.7379, -9.1538], district: "Lisboa" },
  { name: "Universidade do Porto", coordinates: [41.1782, -8.5985], district: "Porto" },
  { name: "Universidade de Coimbra", coordinates: [40.2033, -8.4103], district: "Coimbra" },
  { name: "Universidade Nova de Lisboa", coordinates: [38.7370, -9.3026], district: "Lisboa" },
  { name: "Universidade de Aveiro", coordinates: [40.6316, -8.6570], district: "Aveiro" },
  { name: "Universidade do Minho", coordinates: [41.5609, -8.3966], district: "Braga" },
  { name: "Universidade de Évora", coordinates: [38.5667, -7.9071], district: "Évora" },
  { name: "Universidade da Beira Interior", coordinates: [40.2813, -7.5065], district: "Castelo Branco" },
  { name: "Universidade de Trás-os-Montes e Alto Douro", coordinates: [41.2951, -7.7456], district: "Vila Real" },
  { name: "Universidade da Madeira", coordinates: [32.6475, -16.9070], district: "Madeira" },
  { name: "Universidade dos Açores", coordinates: [37.7429, -25.6603], district: "Açores" },
  // Politécnicos
  { name: "Instituto Politécnico de Lisboa", coordinates: [38.7379, -9.1538], district: "Lisboa" },
  { name: "Instituto Politécnico do Porto", coordinates: [41.1782, -8.5985], district: "Porto" },
  { name: "Instituto Politécnico de Coimbra", coordinates: [40.2033, -8.4103], district: "Coimbra" },
  { name: "Instituto Politécnico de Leiria", coordinates: [39.7431, -8.8077], district: "Leiria" },
  { name: "Instituto Politécnico de Setúbal", coordinates: [38.5343, -8.8881], district: "Setúbal" },
  { name: "Instituto Politécnico de Santarém", coordinates: [39.2342, -8.6884], district: "Santarém" },
  { name: "Instituto Politécnico de Beja", coordinates: [38.0149, -7.8635], district: "Beja" },
  { name: "Instituto Politécnico de Bragança", coordinates: [41.8050, -6.7590], district: "Bragança" },
  { name: "Instituto Politécnico de Castelo Branco", coordinates: [39.8196, -7.5036], district: "Castelo Branco" },
  { name: "Instituto Politécnico de Portalegre", coordinates: [39.2922, -7.4282], district: "Portalegre" },
  { name: "Instituto Politécnico de Viana do Castelo", coordinates: [41.6936, -8.8287], district: "Viana do Castelo" },
  { name: "Instituto Politécnico da Guarda", coordinates: [40.5372, -7.2653], district: "Guarda" },
  { name: "Instituto Politécnico de Tomar", coordinates: [39.6022, -8.4138], district: "Santarém" },
  { name: "Instituto Politécnico de Viseu", coordinates: [40.6629, -7.9253], district: "Viseu" },
  { name: "Instituto Politécnico de Braga", coordinates: [41.5503, -8.4205], district: "Braga" }
];

// Função para redirecionar para a página HTML desejada
function redirectToPage(page) {
  window.location.href = page;
}

// Carregar os limites dos distritos de Portugal a partir de um arquivo GeoJSON
fetch('GeoJson/gadm41_PRT_1.json')
    .then(response => response.json())
    .then(data => {
        // Adicione os limites dos distritos ao mapa
        L.geoJSON(data, {
            style: {
                color: 'black', // Cor das linhas dos distritos
                weight: 2, // Espessura das linhas
                opacity: 1, // Opacidade das linhas
            },
            onEachFeature: function (feature, layer) {
                // Adicione um evento de clique para cada distrito
                layer.on('click', function (e) {
                    // Obtenha o nome do distrito clicado
                    const clickedDistrict = feature.properties.NAME_1;

                    // Remova todos os marcadores existentes
                    map.eachLayer(function (layer) {
                        if (layer instanceof L.Marker) {
                            map.removeLayer(layer);
                        }
                    });

                    // Ajuste o zoom e o centro do mapa para o distrito clicado
                    const bounds = layer.getBounds();
                    map.fitBounds(bounds); // Isso ajustará o zoom para mostrar todo o distrito

                    // Exiba pop-ups das universidades pertencentes ao distrito clicado
                    institucions.forEach(university => {
                        if (university.district === clickedDistrict) {
                          const popup = L.popup().setContent(`<a href="#" onclick="redirectToPage('nome_da_pagina.html')">${university.name}</a>`);
                            L.marker(university.coordinates).addTo(map).bindPopup(popup);
                        }
                    });
                });
            }
        }).addTo(map);
    });