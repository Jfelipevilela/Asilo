// Dados de exemplo de histórias de moradores
const stories = [
    { name: "Nadir", age: 93, story: "A Nadir é de Ouro Verde, ela veio através do Creas. Ela morava em um barraco de uma chácara na cidade, ela já não conseguia mais realizar suas atividades de limpeza, fazer comida e o caminho até sua residência era cerca de 7km. Seu filho havia falecido e um acidente na Br e seu marido havia falecido também. Foi então que trouxeram ela para o Abrigo e a acolhemos conosco. Desde então fazem mais de dois anos que ela está conosco e estamos dando todo o suporte e carinho que ela merece, inclusive ajudamos ela a gravar e divulgar um vídeo para ela poder encontrar os familiares<br><br><a href='https://www.instagram.com/reel/C30PAnqLTP3/?igsh=dnFmM3BqbjdhcnB2' target='_blank'>Link da entrevista dela</a>", image: "nadir.jpeg" },
    { name: "Alberto", age: 87, story: "Temos também a história do Alberto, um senhor que sempre viveu na roça. Um parente pediu ajuda ao abrigo pois ele não estava sendo bem cuidado e não tinha filhos. Então abrigamos o alberto e damos todo o carinho e atenção que ele necessita. Hoje em dia ele é muito apegado a fisioterapeuta e possui um espírito de criança para brincadeiras, sempre muito alegre a cativando todos ao seu redor. O Alberto também gosta muito de desenhar e todos os dias pede uma folha para que possa expressar seus sentimentos.", video: "alberto.mp4" },
    { name: "Casal", age: 92, story: "Aqui temos a incrível foto de um casal que se encontraram no abrigo, e foi logo paixão a primeira vista. Ele veio até nos devido a seu irmão ter um AVC e não ter mais condições de cuidar dele. E ela veio até nós pois tinha poucos parentes e já não conseguiam mais cuidar dela sozinhos. Com isso, os dois se conheceram e criaram um imenso carinho um pelo outro e hoje se tornaram inseparáveis.", image: "casal.jpeg" }
  ];
  
  function showStories() {
    const container = document.getElementById("cards-container");
  
    stories.forEach(story => {
      const card = document.createElement("div");
      card.classList.add("card");
        if (story.name === "Alberto") {
            card.innerHTML = `
            <video controls>
                <source src="videos/${story.video}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <h2>${story.name}</h2>
            <p>${story.story}</p>
            `;
        } else {
            card.innerHTML = `
            <img src="images/${story.image}" alt="${story.name}">
            <h2>${story.name}</h2>
            <p>${story.story}</p>
            `;
        }
      container.appendChild(card);
    });
  }
  
  function showPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
  }

  function hidePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
  }
  
  // Chamando a função para exibir as histórias quando a página carregar
  window.onload = showStories;
  