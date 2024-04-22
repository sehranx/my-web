function post(imgs, title, paragraph) {
  let html = `<div class="post">
  <div class="image-post-div">
    <img class="image-post" src="${imgs}"/>
  </div>
  <div class="text-post">
    <h2>${title}</h2>
    <p>${paragraph}</p>
  </div>
</div>`
  document.querySelector(".article1").innerHTML = document.querySelector(".article1").innerHTML + html
}

post("/img/quran1.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "Lorm ipsum dolor sit amet, consectetur adipisicing elit. Veritats, eveniet repellat doloribus, in soluta id magni atque at corporis, consequuntur omnis");

post("/img/quran2.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "Lorm ipsum dolor sit amet, consectetur adipisicing elit. Veritats, eveniet repellat doloribus, in soluta id magni atque at corporis, consequuntur omnis");

post("/img/quran3.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "Lorm ipsum dolor sit amet, consectetur adipisicing elit. Veritats, eveniet repellat doloribus, in soluta id magni atque at corporis, consequuntur omnis");

post("/img/quran4.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "Lorm ipsum dolor sit amet, consectetur adipisicing elit. Veritats, eveniet repellat doloribus, in soluta id magni atque at corporis, consequuntur omnis");

post("/img/quran5.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "Lorm ipsum dolor sit amet, consectetur adipisicing elit. Veritats, eveniet repellat doloribus, in soluta id magni atque at corporis, consequuntur omnis");

post("/img/bg1.jpeg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "Lorm ipsum dolor sit amet, consectetur adipisicing elit. Veritats, eveniet repellat doloribus, in soluta id magni atque at corporis, consequuntur omnis");

post("/img/bg2.jpeg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "Lorm ipsum dolor sit amet, consectetur adipisicing elit. Veritats, eveniet repellat doloribus, in soluta id magni atque at corporis, consequuntur omnis");

post("/img/bg3.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "Lorm ipsum dolor sit amet, consectetur adipisicing elit. Veritats, eveniet repellat doloribus, in soluta id magni atque at corporis, consequuntur omnis");

post("/img/bg4.jpeg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "Lorm ipsum dolor sit amet, consectetur adipisicing elit. Veritats, eveniet repellat doloribus, in soluta id magni atque at corporis, consequuntur omnis");

post("/img/bg5.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "Lorm ipsum dolor sit amet, consectetur adipisicing elit. Veritats, eveniet repellat doloribus, in soluta id magni atque at corporis, consequuntur omnis");

post("/img/bg6.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "Lorm ipsum dolor sit amet, consectetur adipisicing elit. Veritats, eveniet repellat doloribus, in soluta id magni atque at corporis, consequuntur omnis");

post("/img/bg7.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "Lorm ipsum dolor sit amet, consectetur adipisicing elit. Veritats, eveniet repellat doloribus, in soluta id magni atque at corporis, consequuntur omnis");