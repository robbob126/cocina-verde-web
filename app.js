const recipes = [
  { id:1, cat:"Desayuno", diet:"Vegetariano", emoji:"🥣", rating:4.8, servings:2, title:"Bowl de avena con frutos rojos",
    desc:"Avena cremosa cocida en leche vegetal, con frutos rojos frescos y semillas.",
    time:10, difficulty:"Fácil", kcal:320, protein:9, carbs:52, fat:8,
    ingredients:["1 taza de avena","2 tazas de leche vegetal","1/2 taza de frutos rojos","1 cda de semillas de chía","1 cda de miel","Canela al gusto"],
    steps:["Calienta la leche vegetal en una olla a fuego medio.","Agrega la avena y cocina revolviendo por 6-7 minutos, hasta espesar.","Sirve en un bowl y agrega los frutos rojos y las semillas de chía.","Termina con miel y una pizca de canela."] },
  { id:2, cat:"Desayuno", diet:"Vegetariano", emoji:"🥑", rating:4.6, servings:1, title:"Tostadas de palta y huevo pochado",
    desc:"Pan integral tostado, palta machacada y huevo pochado por encima.",
    time:15, difficulty:"Media", kcal:380, protein:15, carbs:30, fat:21,
    ingredients:["2 rebanadas de pan integral","1 palta madura","2 huevos","Jugo de limón","Sal y pimienta","Chile en hojuelas (opcional)"],
    steps:["Tuesta el pan integral hasta que esté dorado.","Machaca la palta con jugo de limón, sal y pimienta.","Hierve agua con un chorrito de vinagre y pocha los huevos por 3 minutos.","Unta la palta sobre el pan y corona con el huevo pochado."] },
  { id:3, cat:"Almuerzo", diet:"Vegano", emoji:"🥗", rating:4.7, servings:3, title:"Ensalada de quinoa y garbanzos",
    desc:"Quinoa cocida con garbanzos, pepino, tomate cherry y aderezo de limón.",
    time:25, difficulty:"Fácil", kcal:410, protein:14, carbs:55, fat:14,
    ingredients:["1 taza de quinoa","1 lata de garbanzos","1 pepino","1 taza de tomates cherry","Jugo de 1 limón","3 cdas de aceite de oliva","Perejil fresco"],
    steps:["Cocina la quinoa según las instrucciones del envase y deja enfriar.","Escurre y enjuaga los garbanzos.","Corta el pepino y los tomates cherry en cubos pequeños.","Mezcla todo con el aceite de oliva, el jugo de limón y el perejil picado."] },
  { id:4, cat:"Almuerzo", diet:"Sin gluten", emoji:"🍲", rating:4.5, servings:3, title:"Salteado de pollo y verduras",
    desc:"Pollo en tiras salteado con verduras de estación en salsa de soya y jengibre.",
    time:30, difficulty:"Media", kcal:450, protein:38, carbs:22, fat:19,
    ingredients:["400 g de pechuga de pollo","1 pimentón","1 zanahoria","1 taza de brócoli","2 cdas de tamari certificado sin gluten","1 cdita de jengibre rallado","Aceite para saltear"],
    steps:["Corta el pollo en tiras y las verduras en trozos parejos.","Calienta aceite en un wok o sartén grande a fuego alto.","Saltea el pollo hasta dorar, retira y reserva.","Saltea las verduras 4-5 minutos, agrega el pollo, el tamari y el jengibre, y mezcla bien."] },
  { id:5, cat:"Cena", diet:"Sin gluten", emoji:"🐟", rating:4.9, servings:2, title:"Salmón al horno con espárragos",
    desc:"Filete de salmón horneado con espárragos, limón y hierbas.",
    time:25, difficulty:"Fácil", kcal:390, protein:34, carbs:8, fat:24,
    ingredients:["2 filetes de salmón","1 manojo de espárragos","1 limón","2 cdas de aceite de oliva","Ajo picado","Eneldo o perejil"],
    steps:["Precalienta el horno a 200°C.","Coloca el salmón y los espárragos en una bandeja con papel de horno.","Rocía con aceite de oliva, ajo picado, jugo de limón y hierbas.","Hornea 15-18 minutos, hasta que el salmón esté cocido."] },
  { id:6, cat:"Cena", diet:"Vegano", emoji:"🍜", rating:4.4, servings:4, title:"Sopa de lentejas y verduras",
    desc:"Sopa espesa de lentejas con zanahoria, apio y comino.",
    time:40, difficulty:"Fácil", kcal:340, protein:18, carbs:48, fat:7,
    ingredients:["1 taza de lentejas","1 zanahoria","1 rama de apio","1/2 cebolla","1 cdita de comino","Caldo de verduras","Sal al gusto"],
    steps:["Sofríe la cebolla, la zanahoria y el apio picados hasta ablandar.","Agrega el comino y mezcla 1 minuto.","Incorpora las lentejas y el caldo de verduras.","Cocina a fuego medio 25-30 minutos, hasta que las lentejas estén tiernas."] },
  { id:7, cat:"Snack", diet:"Vegano", emoji:"🥕", rating:4.6, servings:4, title:"Hummus casero con bastones de verdura",
    desc:"Hummus cremoso de garbanzos acompañado de zanahoria y apio crudos.",
    time:10, difficulty:"Fácil", kcal:180, protein:7, carbs:18, fat:9,
    ingredients:["1 lata de garbanzos","2 cdas de tahini","Jugo de 1 limón","1 diente de ajo","2 cdas de aceite de oliva","Zanahoria y apio para acompañar"],
    steps:["Escurre los garbanzos y colócalos en la procesadora.","Agrega el tahini, el jugo de limón, el ajo y el aceite de oliva.","Procesa hasta lograr una textura cremosa, agregando agua si es necesario.","Sirve con bastones de zanahoria y apio."] },
  { id:8, cat:"Snack", diet:"Vegano", emoji:"🍌", rating:4.5, servings:10, title:"Energy balls de avena y dátil",
    desc:"Bolitas energéticas sin horno, ideales para media tarde.",
    time:15, difficulty:"Fácil", kcal:140, protein:4, carbs:20, fat:5,
    ingredients:["1 taza de avena","10 dátiles sin carozo","2 cdas de mantequilla de maní","1 cda de cacao en polvo","Coco rallado para cubrir"],
    steps:["Procesa los dátiles hasta formar una pasta.","Agrega la avena, la mantequilla de maní y el cacao, y procesa hasta integrar.","Forma bolitas pequeñas con las manos.","Pasa cada bolita por coco rallado y refrigera 20 minutos."] },
  { id:9, cat:"Postre", diet:"Vegano", emoji:"🍫", rating:4.7, servings:4, title:"Mousse de palta y cacao",
    desc:"Mousse cremoso y sin azúcar refinada, con palta, cacao y plátano.",
    time:10, difficulty:"Fácil", kcal:210, protein:4, carbs:26, fat:12,
    ingredients:["2 paltas maduras","3 cdas de cacao en polvo","1 plátano maduro","2 cdas de jarabe de agave","Un chorrito de leche vegetal"],
    steps:["Coloca todos los ingredientes en la licuadora o procesadora.","Procesa hasta obtener una mezcla lisa y homogénea.","Prueba y ajusta el dulzor si es necesario.","Refrigera 30 minutos antes de servir."] },
  { id:10, cat:"Postre", diet:"Vegetariano", emoji:"🍓", rating:4.6, servings:1, title:"Yogur griego con frutas y granola",
    desc:"Capas de yogur griego, frutas de estación y granola casera.",
    time:8, difficulty:"Fácil", kcal:260, protein:16, carbs:30, fat:8,
    ingredients:["1 taza de yogur griego natural","1/2 taza de frutas mixtas","1/4 taza de granola","1 cdita de miel"],
    steps:["Coloca una capa de yogur griego en un vaso o bowl.","Agrega una capa de frutas cortadas.","Repite las capas y termina con granola.","Rocía con miel antes de servir."] },
  { id:11, cat:"Almuerzo", diet:"Sin gluten", emoji:"🌯", rating:4.5, servings:2, title:"Wrap de pollo y vegetales",
    desc:"Tortillas de maíz certificadas sin gluten rellenas de pollo grillado, lechuga, tomate y yogur.",
    time:20, difficulty:"Fácil", kcal:400, protein:30, carbs:38, fat:13,
    ingredients:["2 tortillas de maíz certificadas sin gluten","1 pechuga de pollo grillada","Lechuga y tomate","3 cdas de yogur natural","Mostaza al gusto"],
    steps:["Corta el pollo grillado en tiras.","Mezcla el yogur con mostaza para el aderezo.","Rellena cada tortilla con lechuga, tomate y pollo.","Agrega el aderezo, enrolla y corta por la mitad."] },
  { id:12, cat:"Desayuno", diet:"Vegetariano", emoji:"🥞", rating:4.8, servings:2, title:"Panqueques de plátano y avena",
    desc:"Panqueques sin harina, endulzados solo con plátano maduro.",
    time:15, difficulty:"Media", kcal:300, protein:13, carbs:40, fat:9,
    ingredients:["2 plátanos maduros","1 taza de avena molida","2 huevos","1 cdita de polvo de hornear","Canela al gusto"],
    steps:["Pisa los plátanos hasta hacer un puré.","Mezcla con los huevos, la avena molida y el polvo de hornear.","Cocina porciones de la mezcla en una sartén caliente y engrasada.","Voltea cuando aparezcan burbujas en la superficie y dora el otro lado."] },
  { id:13, cat:"Desayuno", diet:"Vegano", emoji:"🍹", rating:4.4, servings:1, title:"Smoothie verde de espinaca y piña",
    desc:"Batido energizante de espinaca, piña y jengibre para empezar el día.",
    time:5, difficulty:"Fácil", kcal:190, protein:4, carbs:40, fat:2,
    ingredients:["1 taza de espinaca","1 taza de piña picada","1 plátano","Jugo de 1/2 limón","1 cm de jengibre","Agua o leche vegetal"],
    steps:["Coloca todos los ingredientes en la licuadora.","Agrega agua o leche vegetal hasta cubrir.","Licúa por 1 minuto hasta que quede homogéneo.","Sirve de inmediato bien frío."] },
  { id:14, cat:"Almuerzo", diet:"Vegano", emoji:"🍛", rating:4.6, servings:4, title:"Curry de garbanzos y espinaca",
    desc:"Curry cremoso con leche de coco, garbanzos y espinaca fresca.",
    time:30, difficulty:"Media", kcal:420, protein:16, carbs:46, fat:18,
    ingredients:["2 latas de garbanzos","1 taza de leche de coco","2 tazas de espinaca","1 cebolla","2 cdas de pasta de curry","Arroz para acompañar"],
    steps:["Sofríe la cebolla picada hasta transparentar.","Agrega la pasta de curry y cocina 1 minuto.","Incorpora los garbanzos y la leche de coco, cocina 10 minutos.","Añade la espinaca al final y deja que se ablande antes de servir."] },
  { id:15, cat:"Almuerzo", diet:"Sin gluten", emoji:"🍚", rating:4.5, servings:3, title:"Bowl de arroz integral con atún",
    desc:"Arroz integral con atún, palta, edamame y aderezo de sésamo.",
    time:20, difficulty:"Fácil", kcal:430, protein:28, carbs:48, fat:15,
    ingredients:["1 taza de arroz integral","1 lata de atún al agua","1/2 palta","1/2 taza de edamame","1 cda de aceite de sésamo","Tamari certificado sin gluten al gusto"],
    steps:["Cocina el arroz integral según las instrucciones del envase.","Escurre el atún y el edamame.","Arma el bowl con el arroz como base.","Agrega el atún, el edamame y la palta en cubos, y rocía con aceite de sésamo y tamari."] },
  { id:16, cat:"Cena", diet:"Vegetariano", emoji:"🍕", rating:4.3, servings:2, title:"Pizza de coliflor con vegetales",
    desc:"Base de pizza hecha con coliflor, cubierta de vegetales frescos.",
    time:35, difficulty:"Media", kcal:310, protein:14, carbs:28, fat:16,
    ingredients:["1 coliflor mediana","1 huevo","1/2 taza de queso rallado","Salsa de tomate natural","Vegetales a elección","Orégano"],
    steps:["Procesa la coliflor cruda hasta lograr una textura de arroz.","Cocina al vapor 5 minutos y exprime bien el exceso de agua con un paño.","Mezcla con el huevo y el queso, y forma una base delgada sobre papel de horno.","Hornea 15 minutos a 200°C, agrega la salsa y los vegetales, y hornea 10 minutos más."] },
  { id:17, cat:"Cena", diet:"Sin gluten", emoji:"🍆", rating:4.4, servings:3, title:"Berenjenas rellenas al horno",
    desc:"Berenjenas horneadas rellenas de quinoa, tomate y especias.",
    time:45, difficulty:"Media", kcal:280, protein:9, carbs:34, fat:11,
    ingredients:["2 berenjenas grandes","1/2 taza de quinoa cocida","1 tomate picado","1/2 cebolla","Comino y pimentón","Aceite de oliva"],
    steps:["Corta las berenjenas por la mitad y retira parte de la pulpa.","Sofríe la cebolla, el tomate y la pulpa de berenjena picada.","Mezcla con la quinoa cocida y las especias.","Rellena las berenjenas y hornea 25-30 minutos a 190°C."] },
  { id:18, cat:"Snack", diet:"Vegano", emoji:"🍿", rating:4.2, servings:4, title:"Garbanzos crocantes al horno",
    desc:"Garbanzos horneados con especias, crujientes como snack salado.",
    time:35, difficulty:"Fácil", kcal:150, protein:7, carbs:20, fat:5,
    ingredients:["1 lata de garbanzos","1 cda de aceite de oliva","1 cdita de pimentón","1 cdita de comino","Sal al gusto"],
    steps:["Escurre y seca muy bien los garbanzos con un paño.","Mezcla con el aceite y las especias.","Distribuye en una bandeja en una sola capa.","Hornea a 200°C por 25-30 minutos, revolviendo a mitad de cocción."] },
  { id:19, cat:"Snack", diet:"Vegetariano", emoji:"🧀", rating:4.5, servings:2, title:"Palitos de pepino con queso crema",
    desc:"Snack fresco y rápido de pepino con queso crema y hierbas.",
    time:5, difficulty:"Fácil", kcal:120, protein:5, carbs:8, fat:8,
    ingredients:["1 pepino grande","4 cdas de queso crema", "Cebollín picado","Sal y pimienta"],
    steps:["Corta el pepino en rodajas gruesas o bastones.","Mezcla el queso crema con el cebollín picado.","Unta cada trozo de pepino con la mezcla.","Sirve frío como snack o entrada."] },
  { id:20, cat:"Postre", diet:"Vegano", emoji:"🍪", rating:4.6, servings:12, title:"Galletas de avena y plátano",
    desc:"Galletas de dos ingredientes base, sin azúcar añadida ni harina.",
    time:25, difficulty:"Fácil", kcal:90, protein:2, carbs:15, fat:3,
    ingredients:["2 plátanos maduros","1 taza de avena","1/4 taza de pasas o chips de chocolate","Canela al gusto"],
    steps:["Pisa los plátanos hasta hacer un puré.","Mezcla con la avena, la canela y las pasas o chips.","Forma galletas pequeñas sobre una bandeja con papel de horno.","Hornea a 180°C por 15-18 minutos, hasta dorar."] },
  { id:21, cat:"Postre", diet:"Sin gluten", emoji:"🍨", rating:4.7, servings:3, title:"Helado de plátano y maní",
    desc:"Helado cremoso de un solo ingrediente base, sin azúcar ni leche.",
    time:10, difficulty:"Fácil", kcal:170, protein:5, carbs:24, fat:7,
    ingredients:["3 plátanos congelados en trozos","2 cdas de mantequilla de maní","Un chorrito de leche vegetal","Canela (opcional)"],
    steps:["Congela los plátanos en trozos al menos 4 horas.","Procesa los plátanos congelados hasta lograr textura cremosa.","Agrega la mantequilla de maní y un chorrito de leche vegetal si hace falta.","Sirve de inmediato o congela 30 minutos más para textura firme."] },
  { id:22, cat:"Cena", diet:"Vegano", emoji:"🥘", rating:4.5, servings:4, title:"Chili vegetariano de porotos",
    desc:"Guiso abundante de porotos negros, maíz y tomate con especias.",
    time:35, difficulty:"Fácil", kcal:360, protein:17, carbs:50, fat:9,
    ingredients:["2 latas de porotos negros","1 taza de maíz","1 lata de tomate triturado","1 cebolla","1 cdita de comino","1 cdita de pimentón ahumado"],
    steps:["Sofríe la cebolla picada hasta transparentar.","Agrega el comino y el pimentón, y cocina 1 minuto.","Incorpora los porotos, el maíz y el tomate triturado.","Cocina a fuego medio 20 minutos, revolviendo de vez en cuando."] },
  { id:23, cat:"Almuerzo", diet:"Vegetariano", emoji:"🍝", rating:4.4, servings:3, title:"Pasta integral con pesto de espinaca",
    desc:"Pasta integral con un pesto casero de espinaca, nueces y parmesano.",
    time:20, difficulty:"Fácil", kcal:440, protein:16, carbs:58, fat:16,
    ingredients:["300 g de pasta integral","2 tazas de espinaca","1/4 taza de nueces","1/4 taza de queso parmesano","3 cdas de aceite de oliva","1 diente de ajo"],
    steps:["Cocina la pasta en agua con sal según las instrucciones del envase.","Procesa la espinaca, las nueces, el ajo, el parmesano y el aceite hasta obtener una pasta.","Escurre la pasta reservando un poco del agua de cocción.","Mezcla la pasta con el pesto, agregando agua de cocción si hace falta aflojar."] },
  { id:24, cat:"Desayuno", diet:"Sin gluten", emoji:"🍳", rating:4.6, servings:2, title:"Tortilla de claras con espinaca y champiñones",
    desc:"Tortilla ligera y alta en proteína, ideal para antes de entrenar.",
    time:15, difficulty:"Fácil", kcal:220, protein:24, carbs:6, fat:9,
    ingredients:["6 claras de huevo","1 taza de espinaca","1/2 taza de champiñones","Sal y pimienta","Aceite en spray"],
    steps:["Saltea los champiñones hasta dorar y agrega la espinaca hasta que se ablande.","Bate las claras con sal y pimienta.","Vierte las claras sobre las verduras en una sartén caliente.","Cocina a fuego medio-bajo hasta cuajar y dobla por la mitad."] }
];

const swatches = [
  ["#F3D9A0","#D9A441"], ["#C7D3B9","#7C9070"], ["#E3B2A0","#C1502E"],
  ["#DCE3C9","#A9BB8E"], ["#EFC6D0","#D98BA0"], ["#BFD8D2","#4F8C82"],
  ["#F0D7B0","#B9802F"], ["#D6C7E8","#8E6FAE"], ["#F2C9B0","#D9733F"],
  ["#CDE0C8","#5C8A5A"], ["#F6DDA6","#C98A2E"], ["#E6CFE0","#A567A0"],
  ["#C9DCE6","#4E7F99"], ["#F0C6C6","#C45656"], ["#D9E0B8","#8FA94D"],
  ["#F4E1C1","#B8762F"], ["#CDE3DA","#3F8F74"], ["#EAD2D8","#B5607A"],
  ["#DDEAF0","#5A8DAE"], ["#F1D6E0","#C06A8E"], ["#E0E6C4","#7D9A3E"],
  ["#F7E0B8","#C98934"], ["#D3E4D8","#4F8C6D"], ["#EFD3C2","#C06B3E"]
];
function photoStyle(id){
  const [a,b] = swatches[(id - 1) % swatches.length];
  const angle = 120 + ((id * 37) % 90);
  return `background:linear-gradient(${angle}deg, ${a}, ${b} 78%);`;
}

const grid = document.getElementById('grid');
const resultsInfo = document.getElementById('results-info');
const searchInput = document.getElementById('searchInput');
const pillRow = document.getElementById('pillRow');
const overlay = document.getElementById('overlay');
const modalContent = document.getElementById('modalContent');
const favorites = new Set();

document.getElementById('statTotal').textContent = recipes.length;
document.getElementById('statTime').textContent = Math.round(recipes.reduce((a,r)=>a+r.time,0)/recipes.length);

let activeCat = 'Todas';
let query = '';

function render(){
  const filtered = recipes.filter(r => {
    const matchesCat = activeCat === 'Todas' || r.cat === activeCat;
    const q = query.trim().toLowerCase();
    const matchesQuery = !q || r.title.toLowerCase().includes(q) || r.ingredients.some(i => i.toLowerCase().includes(q));
    return matchesCat && matchesQuery;
  });

  resultsInfo.textContent = filtered.length + (filtered.length === 1 ? ' receta encontrada' : ' recetas encontradas');

  if(filtered.length === 0){
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1">
      <h3>No encontramos recetas con eso.</h3>
      <p>Prueba con otro ingrediente o vuelve a "Todas" para ver el listado completo.</p>
    </div>`;
    return;
  }

  grid.innerHTML = filtered.map(r => `
    <button class="card" data-id="${r.id}" aria-label="Ver receta: ${r.title}">
      <div class="card-photo" style="${photoStyle(r.id)}">
        <span class="tab">${r.cat}</span>
        <span class="rating">★ ${r.rating}</span>
        ${r.emoji}
        <span class="diet-tag">${r.diet}</span>
      </div>
      <div class="card-body">
        <h3>${r.title}</h3>
        <p class="card-desc">${r.desc}</p>
        <div class="meta-row">
          <span>⏱ ${r.time} min</span>
          <span>◆ ${r.difficulty}</span>
          <span>${r.kcal} kcal</span>
          <span>${r.servings} porc.</span>
        </div>
      </div>
    </button>
  `).join('');

  grid.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => openModal(Number(card.dataset.id)));
  });
}

function openModal(id){
  const r = recipes.find(x => x.id === id);
  const isFav = favorites.has(id);
  modalContent.innerHTML = `
    <div class="modal-photo" style="${photoStyle(r.id)}">
      <button class="modal-close" id="closeModal" aria-label="Cerrar">✕</button>
      ${r.emoji}
    </div>
    <div class="modal-inner">
      <span class="modal-tag">${r.cat}</span>
      <span class="modal-tag diet">${r.diet}</span>
      <h2>${r.title}</h2>
      <div class="modal-actions">
        <button class="btn-ghost ${isFav ? 'active' : ''}" id="favBtn">${isFav ? '♥ Guardada' : '♡ Guardar'}</button>
        <button class="btn-ghost" id="printBtn">🖨 Imprimir</button>
      </div>

      <div class="nutrition">
        <div><b>${r.kcal}</b><span>kcal</span></div>
        <div><b>${r.protein} g</b><span>proteína</span></div>
        <div><b>${r.carbs} g</b><span>carbos</span></div>
        <div><b>${r.fat} g</b><span>grasas</span></div>
      </div>

      <div class="modal-cols">
        <div>
          <h4>Ingredientes · ${r.servings} porc.</h4>
          <ul class="ingredients">
            ${r.ingredients.map(i => `<li>${i}</li>`).join('')}
          </ul>
        </div>
        <div>
          <h4>Preparación</h4>
          <ol class="steps">
            ${r.steps.map(s => `<li>${s}</li>`).join('')}
          </ol>
        </div>
      </div>
    </div>
  `;
  overlay.classList.add('open');
  document.getElementById('closeModal').addEventListener('click', closeModal);
  document.getElementById('printBtn').addEventListener('click', () => window.print());
  document.getElementById('favBtn').addEventListener('click', (e) => {
    if(favorites.has(id)){ favorites.delete(id); e.target.textContent='♡ Guardar'; e.target.classList.remove('active'); }
    else { favorites.add(id); e.target.textContent='♥ Guardada'; e.target.classList.add('active'); }
  });
  document.body.style.overflow = 'hidden';
}

function closeModal(){
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

overlay.addEventListener('click', (e) => { if(e.target === overlay) closeModal(); });
document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeModal(); });

pillRow.addEventListener('click', (e) => {
  const btn = e.target.closest('.pill');
  if(!btn) return;
  pillRow.querySelectorAll('.pill').forEach(p => {
    p.classList.remove('active');
    p.setAttribute('aria-pressed', 'false');
  });
  btn.classList.add('active');
  btn.setAttribute('aria-pressed', 'true');
  activeCat = btn.dataset.cat;
  render();
});

searchInput.addEventListener('input', (e) => { query = e.target.value; render(); });

render();
