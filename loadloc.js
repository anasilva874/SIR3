// Carregar os países do loc.json
fetch("./loc.json") // O "./" indica que está no mesmo diretório do arquivo atual
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Erro ao carregar o JSON: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Seleciona o dropdown do formulário
    const countryList = document.getElementById("loc");
    
    // Preenche o dropdown com os países do JSON
    data.forEach((country) => {
      const option = document.createElement("option");
      option.value = country["alpha-2"]; // Código do país
      option.textContent = country.name; // Nome do país
      countryList.appendChild(option);
    });
  })
  .catch((error) => {
    console.error("Erro ao carregar os países:", error);
  });
