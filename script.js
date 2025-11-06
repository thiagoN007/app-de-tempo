let key = "eca3250ca768b6721c13c3da57714354";
async function buscar() {
    const cidade = document.getElementById("cidade").value;
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&appid=${key}&units=metric`)
    .then(res => res.json())
    .then(dado => {
        console.log(dado)
        document.querySelector('.cidade').innerHTML = `${dado.name}`;
        document.querySelector('.graus').innerHTML = `Temperatura: ${dado.main.temp.toFixed(0)}°C`;
        document.querySelector('.grau_max').innerHTML =
        `Temperatura Máx: ${dado.main.temp_max.toFixed(0)}°C`;
        document.querySelector('.umidade').innerHTML = `Umidade: ${dado.main.humidity} %`; 
        document.querySelector('.tempo').innerHTML = `Tempo:${dado.weather[0].description}`;

    })
    .catch(error => {
        console.error("Erro na requisição da api", error)
    });

    if(cidade == "") {
        alert("Digite o nome da cidade");
        return 0;
    }

    document.getElementById("cidade").value = "";
}