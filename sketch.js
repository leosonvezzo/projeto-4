let palavra;

function setup() {
  createCanvas(400, 400);
  palavra=palavraAleatoria();
}

function palavraAleatoria(){
  let palavras = ["BRASIIIIIIIIIIIIIIIL","RECEBA","SIUUUUUUU","TALVEZ"];
  return random(palavras);
}

function inicializaCores() {
  background("black");
  fill("red")
  textSize(40);
  textAlign(CENTER, CENTER);
 }

function palavraParcial(minimo, maximo){
  let quantidade = map(mouseX,minimo,maximo,1,palavra.length);
  let parcial = palavra .substring(0, quantidade);
  return parcial;
}

function draw() {
  inicializaCores();

  let texto = palavraParcial (0, width);
  text(texto,200, 200);
 /* if (mouseX <50){
    let palavra ="D";
    text(palavra, 200, 200);
  }else if (mouseX < 100){
    let palavra ="Du";
    text(palavra, 200, 200);
     }else if (mouseX < 150){
    let palavra ="Duz";
    text(palavra, 200, 200);
     }else if (mouseX < 200){
    let palavra ="Duze";
    text(palavra, 200, 200);
     }else if (mouseX < 250){
    let palavra ="Duzen";
    text(palavra, 200, 200);
     }else if (mouseX < 300){
    let palavra ="Duzent";
    text(palavra, 200, 200);
     }else if (mouseX < 350){
    let palavra ="Duzento";
    text(palavra, 200, 200);
        }else if (mouseX < 400){
    let palavra ="Duzentos";
    text(palavra, 200, 200);
  }*/
  
}
