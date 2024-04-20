// Criar o mapa e definir as coordenadas iniciais e o nível de zoom
const map = L.map('mapid').setView([39.3999, -8.2245], 6);

// Adicionar mapa do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Dicionário com cada umas das Universidades, as suas respetivas coordenadas e distrito a que pertencem
const institucions = [
  { name: "Universidade de Lisboa", coordinates: [38.75276636859463, -9.158244993841057], district: "Lisboa" },
  { name: "Universidade do Porto", coordinates: [41.1782, -8.5985], district: "Porto" },
  { name: "Universidade de Coimbra", coordinates: [40.207793936020536, -8.426096650311752], district: "Coimbra" },
  { name: "Universidade Nova de Lisboa", coordinates: [38.7338619998871, -9.160272477150443], district: "Lisboa" },
  { name: "Universidade de Aveiro", coordinates: [40.630627965884344, -8.657471832237128], district: "Aveiro" },
  { name: "Universidade do Minho", coordinates: [41.560678644020065, -8.396184340115141], district: "Braga" },
  { name: "Universidade de Évora", coordinates: [38.57300501113982, -7.905246327387367], district: "Évora" },
  { name: "Universidade da Beira Interior", coordinates: [40.27787311234525, -7.508983582585868], district: "CasteloBranco" },
  { name: "Universidade de Trás-os-Montes e Alto Douro", coordinates: [41.288636881526756, -7.739049438570174], district: "VilaReal" },
  { name: "Universidade da Madeira", coordinates: [32.65934218908342, -16.92466578374399], district: "Madeira" },
  { name: "Universidade dos Açores", coordinates: [38.67977463716923, -27.24023738972498], district: "Açores" },
  { name: "Instituto Politécnico de Lisboa", coordinates: [38.74968059828116, -9.193487789958072], district: "Lisboa" },
  { name: "Instituto Politécnico do Porto", coordinates: [41.18071415720626, -8.597985193167954], district: "Porto" },
  { name: "Instituto Politécnico de Coimbra", coordinates: [40.20482407119652, -8.453810229247942], district: "Coimbra" },
  { name: "Instituto Politécnico de Leiria", coordinates: [39.73378587243394, -8.821129009170212], district: "Leiria" },
  { name: "Instituto Politécnico de Setúbal", coordinates: [38.522107125575715, -8.838794728165903], district: "Setúbal" },
  { name: "Instituto Politécnico de Santarém", coordinates: [39.22176954094691, -8.687745512385293], district: "Santarém" },
  { name: "Instituto Politécnico de Beja", coordinates: [38.015433621878515, -7.874718662479363], district: "Beja" },
  { name: "Instituto Politécnico de Bragança", coordinates: [41.79744746011649, -6.767718961987727], district: "Bragança" },
  { name: "Instituto Politécnico de Castelo Branco", coordinates: [39.82147008089294, -7.4982870924925145], district: "CasteloBranco" },
  { name: "Instituto Politécnico de Portalegre", coordinates: [39.29135697003864, -7.433142939947704], district: "Portalegre" },
  { name: "Instituto Politécnico de Viana do Castelo", coordinates: [41.6936, -8.8287], district: "VianadoCastelo" },
  { name: "Instituto Politécnico da Guarda", coordinates: [40.54079415278202, -7.283401528274787], district: "Guarda" },
  { name: "Instituto Politécnico de Tomar", coordinates: [39.60062397593396, -8.38980793994917], district: "Santarém" },
  { name: "Instituto Politécnico de Viseu", coordinates: [40.64668092774755, -7.919688733565544], district: "Viseu" },
  { name: "Instituto Politécnico de Braga", coordinates: [41.54262731966654, -8.422009480701202], district: "Braga" }
];

// Função para redirecionar para a página HTML desejada
function redirectToPage(institucionName) {
  window.location.href = `institucions.html?name=${universityName}`;
}

// Carregar os limites dos distritos de Portugal a partir de um arquivo GeoJSON
fetch('GeoJson/gadm41_PRT_1.json')
    .then(response => response.json())
    .then(data => {
        // Adicionar os limites dos distritos ao mapa
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

                    // Remover os marcadores existentes
                    map.eachLayer(function (layer) {
                        if (layer instanceof L.Marker) {
                            map.removeLayer(layer);
                        }
                    });

                    // Ajuste o zoom e o centro do mapa para o distrito clicado
                    const bounds = layer.getBounds();
                    map.fitBounds(bounds); // Isso ajustará o zoom para mostrar todo o distrito

                    // Exibir os pop-ups das universidades pertencentes ao distrito clicado
                    institucions.forEach(institucion => {
                        if (institucion.district == clickedDistrict) {
                          const popup = L.popup().setContent(`<a href="institucions.html"  onclick="redirectToPage('institucions.html')">${institucion.name}</a>`);
                            L.marker(institucion.coordinates).addTo(map).bindPopup(popup);
                        }
                    });
                });
            }
        }).addTo(map);
    });