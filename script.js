let key = "eca3250ca768b6721c13c3da57714354";
async function buscar(cidadePadrao) {
    let cidade = cidadePadrao || document.getElementById("cidade").value;
    document.getElementById("cidade").value = "";
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&appid=${key}&units=metric`)
    .then(res => res.json())
    .then(dado => {
        console.log(dado)
        document.querySelector('.cidade').innerHTML = `${dado.name}`;
        document.querySelector('.graus').innerHTML = `${dado.main.temp.toFixed(0)}°C`;
        document.querySelector('.sensacao').innerHTML = `${dado.main.feels_like.toFixed(0)}°C`;
        document.querySelector('.umidade').innerHTML = `${dado.main.humidity}%`;
        document.querySelector('.tempo').innerHTML = `${dado.weather[0].description} <img src='https://openweathermap.org/img/wn/${dado.weather[0].icon}.png'>`;
    })
    .catch(error => {
        console.error("Erro na requisição da api", error)
    });
}

// buscarcidade padrão ao carregar a página

window.onload = function() {
    buscar("Uniao");
}

