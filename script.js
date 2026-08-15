// Base de datos de recetas
const recetas = {
  dulces: [
    {
      id: "Bizcocho-Genoves",
      nombre: "Bizcocho Genovés",
      intro: "Es un bizcocho sumamente ligero, esponjoso y de sabor neutro.",
      ingredientes: ["3 huevos", "90g azúcar blanca", "2g sal", "90g harina pastelera", "5g vainilla"],
      pasos: [
        "Encamisar los moldes",
        "Realizar un batido a punto cinta o letra de huevos y azúcar",
        "Añadir secos cernidos de manera envolvente",
        "Nivelar la superficie",
        "Hornear a 180°C entre 20 a 30 min"
      ],
      observaciones: "Si quieres dar mayor flexibilidad al bizcocho, agregar miel."
    },
    {
      id: "keke",
      nombre: "Keke Tradicional",
      intro: "Es un bizcocho tradicional de textura más densa.",
      ingredientes: [
        "Mantequilla sin sal 1.2kg",
        "Azúcar blanca 1.2kg",
        "Sponge 70 gr",
        "Huevos 24 unidades aprox 1200ml",
        "Harina Pastelera 3kg",
        "Polvo de hornear 80gr",
        "Sal 36gr",
        "Leche fresca 1200 ml",
        "Vainilla 5gr"
      ],
      pasos: [
        "Encamisar los moldes",
        "Separar las claras y yemas",
        "Para el cremado usar mantequilla, azúcar y sal batir junto con el sponge ; agregar las yemas de huevo de uno a uno",
        "Agregar la harina con el polvo de hornear alternando con la leche; batir hasta que no queden grumos y agregar la vainilla",
        "Batir las claras a punto nieve; cuando esté espumando agregar otra parte del azúcar",
        "Integrar todo de manera envolvente",
        "Hornear a 180°C entre 45 a 60 min"
      ],
      observaciones: "No abrir el horno antes de tiempo, no golpear el molde."
    },
    {
      id: "Budin-Pan",
      nombre: "Budín de Pan",
      intro: "Consiste en un postre de textura suave, cremosa y densa, que se elabora principalmente reciclando pan duro o del día anterior.",
      ingredientes: [
        "Leche fresca 800g",
        "Azúcar blanca 200g",
        "Pan 12 unidades",
        "Huevo 8 unidades",
        "Pasas 100g",
        "Mantequilla 80g",
        "Ralladura de Naranja 5g",
        "Esencia de vainilla 5g",
        "--- PARA EL CARAMELO ---",
        "Agua 100g",
        "Azúcar blanca 200g"
      ],
      pasos: [
        "CARAMELO: Poner agua y azúcar a fuego directo y verter en el molde.",
        "BUDÍN: Mezclar los ingredientes para el budín y verter la preparación encima del molde con caramelo.",
        "Hornear a baño maría en horno de cocción combinada con vapor a 140°C de 35 a 45 minutos."
      ],
      observaciones: "Ninguna, ¡es más fácil que la tabla del 1!"
    },
  ],
  masas: [
    {
      id: "Masa-Sable",
      nombre: "Masa Sable",
      intro: "Masa quebrada de textura suave y desmoronable, ideal para tartas gourmet y tartaletas.",
      ingredientes: [
        "mantequilla 50 gr","azucar en polvo 50gr",
        "huevo 25 gr","harina 105 gr","sal 1gr",
      ],
      pasos: [
        "en un bowl poner la mantequilla fria en cubos,el azuaca glas y la sal","frotar con las manos hasta que forme una arena NO AMASAR solo usar la yema de los dedos ",
        "incorporar el huevo , sin amasar , presionar con la mano sin amasar hasta obtener una textura homogenea",
        "haz un disco y envuelve en film alimentario y reservar en la nevera aprox 30 min",
      ],
      observaciones: "No sobreamasar para evitar activar el gluten."
    },
     {
      id: "Masa-Cremada",
      nombre: "Masa cremada",
      intro: "es la técnica fundamental de la repostería clásica para masas aireadas.",
      ingredientes: [
        "mantequilla 50 gr","azucar en polvo 50gr",
        "huevo 25 gr","harina 105 gr","sal 1gr",
      ],
      pasos: ["Empomar la mantequilla, agregar el azucar y batir bien para obtener una textura homogénea y cremosa aprox 3 a 5 min vel media ",
        "agregrar el huevo e integrar","agregar los secos","dar forma de bola , aplanar ligeramente , envolver el film y refriger al menos durante 1 hora",
      ],
      observaciones: "hornear a 160 ° 18 min."
    },
    {
      id: "Masa-Hojaldre",
      nombre: "Masa Hojaldre",
      intro: "Es una masa crujiente, ligera y dorada que se caracteriza por tener una estructura de múltiples capas finas.",
      ingredientes: ["harina pastelera 250 gr","sal 5 gr","azucar 2 gr","agua 150 gr","manteca 5 gr","margarina hojaldre 125 gr",
      ],
      pasos: ["mezclar harina sal azucar manteca y agua","amasar hasta desarrollar una masa extensible y homogenea",
        "empastar con la margarina hojaldre y laminar","realizar 2 dobleces simples y 2 dobleces dobles DEJANDO REPOSAR DESPUES DE CADO DOBLE",
        "laminar hasta obtener el tamaño y el espesor deseado","cubrir con film y conesrvar en frio",
      ],
      observaciones: "dejar en frio como minimo un 1 dia antes de trabajar"
    },
  ],
  salados: [],
  tortas: [
    {
      id: "Crema-Pastelera",
      nombre: "Crema Pastelera",
      intro: "Es una crema suave, dulce y cremosa que se usa para rellenar tartas.",
      ingredientes: [
        "250g leche fresca","2 yemas","50g azucar blanca","15g maicena","3g vainilla","5g mantequilla",
      ],
      pasos: [
       "calentar la leche en una olla, sin dejarla hervir","en un bowl mezclar las llemas con el azucar,luego incorporar la maicena y batir bien",
       "termperar las llemas ","dar coccion hasta que tome punto","dejar hervir 1 minuto antes de apagar","agregar vainilla y mantequilla fuera del fuego",
       "colocar film a piel para evitar que se forme una costra , dejar enfriar",
      ],
      observaciones: "Respetar el ritmo de la mezcal y no descuidar el fuego ."
    },
      {
      id: "Crema-Inglesa",
      nombre: "Crema inglesa",
      intro: "es una salsa dulce de repostería, líquida y sedosa, elaborada únicamente a base de leche (o crema), yemas de huevo, azúcar y vainilla A diferencia de la crema pastelera, no lleva ningún tipo de almidón.",
      ingredientes: [
        "250g leche fresca","2 yemas","50g azucar blanca","0.5 vainilla de vainilla",
      ],
      pasos: ["calentar la leche junto con la vainilla","batir las yemas de huevo con el azucar hasta obtener una mezcla espumosa,temperar las llemas"
        ,"cocinar a fuego lento, removiendo constantemente hasta que la crema espese ligeramente y cubra la parte posterior de la cuchara PUNTO NAPA",
        "no dejar que hierva, TEMPERATURA 80°-83°","retirar la cacerola del fuego y colar la crema para eliminar posibles grumos",
        "trasnferir la cremaa un recipiente y enfriar rapidamente sumergiendolo en un baño maria invertido ",
        "seguir revolviendo hasta que tome temeperatura ambiente",
      ],
      observaciones: "Respetar el limie termico de 82 ° - 84 ° ."
    },
     {
      id: "Crema-Chantilly",
      nombre: "Crema Chantilly",
      intro: "La crema Chantilly (crème Chantilly) es simplemente crema de leche (nata para montar) batida, endulzada con azúcar e aromatizada con vainilla.A diferencia de la pastelera o la inglesa, no requiere ninguna cocción: es una emulsión en frío donde la grasa de la leche atrapa burbujas de aire al batir, transformándose en una crema suave, esponjosa, firme y ligera",
      ingredientes: [
        "150g Crema de leche","40g azucar en polvo",
      ],
      pasos: ["colocar la crema de leche junto con el azucar en polvo en  un bowl","con la ayuda de un batidor globo, batir hasta darle puncto chatilly",
        "cuidado en sobrebatir para que no se corte",
      ],
      observaciones: "La crema Chantilly es física en frío: Todo el éxito depende de mantener la grasa helada (crema, tazón y varillas muy fríos) y detener el batido a tiempo en cuanto se formen picos firmes. Con frío y control visual, no hay margen de error ."
    },

  ],
  panes:[],
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. Lógica para cargar las recetas según la categoría del HTML
  const contenedor = document.getElementById("contenedor-recetas");
  
  if (contenedor) {
    contenedor.innerHTML = ""; // Limpieza para evitar remanentes
    const categoria = contenedor.dataset.categoria;
    const lista = recetas[categoria] || [];

    if (lista.length === 0) {
      contenedor.innerHTML = "<p style='text-align:center; grid-column: 1/-1;'>Próximamente más recetas en esta sección.</p>";
    } else {
      lista.forEach(receta => {
        const tarjeta = document.createElement("a");
        tarjeta.className = "card";
        tarjeta.href = `receta.html?cat=${categoria}&id=${receta.id}`;
        tarjeta.innerHTML = `<h3>${receta.nombre}</h3>`;
        contenedor.appendChild(tarjeta);
      });
    }
  }

  // 2. Lógica para cargar el detalle en receta.html
  const titulo = document.getElementById("titulo-receta");
  if (titulo) {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("cat");
    const id = params.get("id");

    const receta = recetas[cat]?.find(r => r.id === id);

    if (receta) {
      titulo.textContent = receta.nombre;
      
      const introEl = document.getElementById("intro-receta");
      if (introEl) introEl.textContent = receta.intro;

      const obsEl = document.getElementById("observacion-receta");
      if (obsEl) obsEl.textContent = receta.observaciones;

      // Limpiar y renderizar ingredientes
      const ul = document.getElementById("ingredientes-receta");
      if (ul) {
        ul.innerHTML = "";
        receta.ingredientes.forEach(ing => {
          const li = document.createElement("li");
          li.textContent = ing;
          ul.appendChild(li);
        });
      }

      // Limpiar y renderizar pasos
      const ol = document.getElementById("pasos-receta");
      if (ol) {
        ol.innerHTML = "";
        receta.pasos.forEach(paso => {
          const li = document.createElement("li");
          li.textContent = paso;
          ol.appendChild(li);
        });
      }
    } else {
      titulo.textContent = "Receta no encontrada";
    }
  }
});