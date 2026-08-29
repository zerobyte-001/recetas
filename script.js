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
        "Mantequilla sin sal 200 gr",
        "Azúcar blanca 200 gr",
        "Huevos 2 unidades",
        "Harina Pastelera 250 gr",
        "Polvo de hornear 9 gr",
        "Sal 3 gr",
        "Leche fresca 185 gr",
        "Vainilla 5 gr ",
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
    {
      id: "Compota",
      nombre: "Compota",
      intro: "Fruta cocida (entera, en trozos o triturada) con un poco de azúcar y especias (como canela) a fuego lento, sin llegar a deshacerse por completo.",
      ingredientes: [ "manzana israel 200 gr","pera de agua 150 gr","azucar blanca 90 gr","agua C/N",
      ],
      pasos: [
        "pelar la manzana y la pera ","cocinar  el azucar y agregar agua de ser necesario","cocinar hasta que espese y se hablande la fruta",
      ],
      observaciones: "Ninguna, ¡es más fácil que la tabla del 1!"
    },
     {
      id: "Jaleas",
      nombre: "Jaleas",
      intro: "Esencialmente, es zumo de fruta colado que se cocina con azúcar y pectina.",
      ingredientes: [ "frambuesa 100 gr","fresa 100 gr","arándanos 100 gr","azúcar blanca 200 gr","PECTINA 10 gr",
      ],
      pasos: ["licuar y colar todos los frutos rojos con el jugo de limon","colocar el jugo colado junto con la AZÚCAR PREVIAMENTE MEZCLADA CON LA PECTINA",
        "en la thermomix y programar a 100 °C por 30 - 40 min","enfriar hasta que gelifique",
      ],
      observaciones: "Ninguna, ¡es más fácil que la tabla del 1!"
    },
     {
      id: "Coulis",
      nombre: "Coulis",
      intro: "Una salsa fina y ligera hecha a partir de fruta cruda o cocida que se tritura y luego se pasa por un colador chino para retirar cualquier semilla o fibra..",
      ingredientes: [ "zumo de maracuya 200 gr","agua 100 gr","azúcar blanca 90 gr",
      ],
      pasos: ["colocar el zumo de maracuya, agua y azúcar en una cacerola a fuego directo ","cocinar hasta que la preparacion se reduzca a la mitad y espese",
        "enfriar hasta su uso",
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
 pasteleriainternacional: [
    {
      id: "croissant",
      nombre: "Croissant Clásico",
      intro: "Hojaldre tradicional.",
      ingredientes: ["500g de harina", "250g de mantequilla"],
      pasos: ["Amasar y laminar con mantequilla.", "Hornear a 200°C."],
      observaciones: "Servir fresco."
    }
  ],
  pasteleriaperuana: [
    {
      id: "Empanada",
      nombre: "Empanada de Boda y Maicillos",
      intro: "Receta tradicional peruanas.",
      ingredientes: ["*****EMPANADAS DE BODA:*****","HARINA 250 G","MANTECA 140 G","AZÚCAR 100 G","SAL 2.5 G","CANELA EN POLVO 2.5 G",
"CLAVO DE OLOR EN POLVO 2 G","YEMAS 40 G","*****MAICILLOS:*****","HARINA 50 G","MAICENA 100 G","HARINA DE MAIZ 100 G","MARGARINA 62 G",
"MANTECA 63 G","AZÚCAR EN POLVO 75 G","SAL 1 G","YEMA 20 G","ESENCIA DE VAINILLA 4 G"],
      pasos: ["EMPANADAS DE BODA:", "Cremar la manteca, azúcar, sal y yemas por 5 min. Incorporar los ingredientessecos y mezclar hasta formar una masa.",
         "Pesar porciones de 20g, bolear y colocar sobre una bandeja con papel manteca, presionar ligeramente,",
         "barnizar y decorar con ajonjolí o grajeas.","MAICILLOS:", 
         "Cremar las grasas, azúcar en polvo, yemas, esencia y sal por 5 min. Incorporar los ingredientes secos y mezclar hasta formar una masa.",
          "Pesar porciones de 15 a 20 g, bolear y colocar sobre una bandeja con papel manteca, presionar con el dedo haciendo un agujero al centro.",
 "Barnizar y rellenar con jalea de fresa. Hornear a 170 - 180 grados por 15 a 20 minutos.",],
      observaciones: "."
    },
    {
      id: "Rosquitas",
      nombre: "Rosquitas saladas y dulces",
      intro: "Tradicionales rosquitas crujientes.",
      ingredientes: ["*****ROSQUITAS DULCES:*****","HARINA 250 G","MANTECA 50 G","MARGARINA 50 G","AZÚCAR EN POLVO 100 G","LECHE FRESCA 45 ML",
"ANÍS 2 G","HUEVO 25 G","SAL 1 G","POLVO DE HORNEAR 3 G","*****ROSQUITAS SALADAS:*****","HARINA 250 G","MANTECA 110 G","LECHE FRESCA 50 ML",
",ANÍS 1 G","LEVADURA FRESCA 15 G","AZÚCAR 5 G","SAL 5 G","HUEVO 25 G","QUESO PARMESANO 30 G",],
      pasos: ["ROSQUITAS DULCES:" ,"Cremar la manteca, margarina, azúcar, anís tostado (molido) y sal incorporar el huevo y continuar cremando.",
         "Añadir los ingredientes secos intercalando con la leche fresca.",
          "Cubrir y llevar a refrigerar.", "Pesar porciones de 20g y formar las roquitas, colocar sobre una bandeja con papel manteca.",
"*****ROSQUITAS SALADAS:*****", "Arenar la harina, queso parmesano rallado (guardar la mitad para encimar), sal, anís tostado (molido) y manteca.",
 "Mezclar la leche, huevo, azúcar y levadura e incorporar al sableado.", 
 "Formar una masa y dejar reposar 5 min. Pesar porciones de 15-20 g y formar las roquitas", "colocar sobre una bandeja con papel manteca.",
"Barnizar con huevo, encimar con ajonjolí y hornear a 170-180 grados por 15 a 20 minutos"],
      observaciones: "."
    },
    {
      id: "Leche asada",
      nombre: "Leche Asada",
      intro: "Postre clásico al horno.",
      ingredientes: ["LECHE EVAPORADA 200 G","AGUA 50 ML","AZÚCAR BLANCA 90 G","SAL 0.5 G","ESENCIA DE VAINILLA 2 G","HUEVOS 3 UD",],
      pasos: ["Leche asada: Mezclar todos los ingredientes en un bowl, colar 3 veces. Poner la mezcla en cocottes o envases de aluminio",
 "hornear a baño maría a 150 grados aproximadamente 25 minutos", "luego subir la temperatura a 180 grados por 10 minutos más.",],
      observaciones: "."
    },
    {
      id: "Arroz Zambito",
      nombre: "Arroz Zambito",
      intro: "Variante criolla con chancaca.",
      ingredientes: ["ARROZ 100 G","AGUA 400 ML","CANELA EN RAMA 5 G","CLAVO DE OLOR 2 UD","CÁSCARA DE NARANJA 0.5 UD","LECHE EVAPORADA 350 G",
"PASAS NEGRAS 25 G","COQUITOS CHILENOS 5 G","CHANCACA 150 G","AZÚCAR RUBIA (opcional) 25 G","COCO RALLADO 10 G","CANELA EN POLVO 2 G"],
      pasos: ["Cocinar el arroz con la canela en rama, clavo de olor y piel de naranja. En otra olla poner la chancaca con agua hasta que se disuelva", 
        "colar. Incorporar al arroz cocido la leche y chancaca", 
        "dar cocción hasta que tome punto, de ser necesario añadir azúcar. Agregar las pasas y coquito chileno picado", 
        "servir y decorar con canela y coco rallado."],
      observaciones: "."
    },
    {
      id: "Suspiro Limeño",
      nombre: "Suspiro limeño",
      intro: "Manjar blanco con merengue al oporto.",
      ingredientes: ["LECHE EVAPORADA 1 TARRO (410G)","AZÚCAR 250 G","CANELA EN RAMA 1 G","YEMAS DE HUEVO 4 UD",
"*****MERENGUE ITALIANO:*****","CLARAS 3 UD","VINO OPORTO 125 ML","AZÚCAR 250 G",],
      pasos: ["Poner leche, azúcar, canela, cocinar hasta que tome punto.","Batir las yemas y temperar con el manjar caliente.",
"Hacer un merengue italiano: poner en una cacerola azúcar y oporto hasta que tomen punto hilo o llegue a una temperatura de 118º c", 
"batir las claras a punto nieve y verter el almíbar hasta que enfrié.","Poner en copas el manjar de yemas", 
"colocar el merengue en una manga con boquilla rizada y cubrir el manjar.",
"Luego espolvorear canela molida",],
      observaciones: "."
    },
    {
      id: "Champu Limeño",
      nombre: "Champu Limeño",
      intro: "Bebida/postre tibio a base de maíz.",
      ingredientes: ["MOTE COCIDO (MAÍZ PELADO) 150 G","HARINA DE MAÍZ AMARILLO 120 G","CANELA EN RAMA 2 G","CLAVO DE OLOR 1 G",
"PIÑA GOLDEN 180 G","GUANÁBANA 200 G","AZÚCAR RUBIA 150 G","AGUA 500 G","CANELA EN POLVO 1 G","MEMBRILLO 1 UD",],
      pasos: ["Remojar el mote desde la víspera en un tazón con agua.",
"Al día siguiente cocinar a fuego lento hasta que el mote esté tierno, no echarle sal porquese endurece.",
"Luego añadirle canela, clavo, cascara de piña, anís y llevar a hervir por 10 minutos. Retirar canelas, cascaras.",
"Agregar los membrillos, piña en cubitos hasta que estén tiernos.",
"Añadir azúcar.",
"Disolver la harina de maíz en agua y agregar a la preparación moviendo hasta que espese,",
"agregar la guanábana en gajos. Servir caliente, espolvoreando canela.",],
      observaciones: "."
    },
    {
      id: "Alfajor/maicena",
      nombre: "Alfajor clásico / maicena",
      intro: "Suaves alfajores rellenos de manjar blanco.",
      ingredientes: ["*****ALFAJOR CLASICO:*****","HARINA S/P 250 G","MANTECA 125 G","AZÚCAR EN POLVO 65 G","SAL FINA 1 G","AJONJOLÍ 25 G","AGUA 40 ML",
"*****ALFAJOR DE MAICENA:*****","HARINA 180 G","MAICENA 180 G","AZÚCAR EN POLVO 70 G","SAL FINA 1 G","MARGARINA 250 G",],
      pasos: ["Alfajor clásico: arenar (sableado) los ingredientes secos y grasa, agregar agua e integrar, cubrir y dejar reposar unos 15 minutos.",
        "Laminar a 3 - 4mm y cortar.",
"Alfajor maicena:", "arenar (sableado) los ingredientes secos y grasa, mezclar presionando la masa hasta integrar", 
"cubrir y dejar reposar unos 15 min. Laminar a 3 - 4mm y cortar.",
"Horno a 170 grados por unos 12-15 minutos. Rellenar y decorar.",],
      observaciones: "."
    },
    {
      id: "Voladores",
      nombre: "Voladores y guargueros",
      intro: ".",
      ingredientes: ["MASA:","YEMAS 6 UD","PISCO 15 ML","SAL 1 G","MANTEQUILLA 10 G","HARINA 160 G","***MONTAJE VOLADORES:****",
"MERMELADA DE PIÑA 200 G","MANJAR BLANCO 200 G","AZÚCAR EN POLVO 20 G","FLORES COMESTIBLES 1 G","HARINA PARA ESTIRAR 50 G",
"***MANJAR BLANCO ARTESANAL:***","LECHE EVAPORADA 200 G","LECHE CONDENSADA 200 G","***MONTAJE DE GUARGÜEROS:***","ACEITE 1200 G",
"AZÚCAR EN POLVO 50 G","FLORES COMESTIBLES 1 G","MANGAS 3 UD","PAPEL MANTECA 1 UD","HARINA PARA ESTIRAR 25 G",],
      pasos: ["***Masa:***", "hacer una fontana con la harina y sal, incorporar al centro el pisco, yemas y mantequilla derretida", 
"mezclar hasta formar una masa y que quede lisa. Reposar 15 min.",
"Laminar a 1 mm de grosor.",
"****VOLADOR:****" ,
"cortar círculos de 5cm, pinchar con tenedor y colocar en bandeja.", "Hornear los voladores a 170 grados por 8 minutos.",
"****GUARGÚERO:****", "cortar cuadrados de 5 o 6 cm, pegar dos esquinas opuestas con un poco declara de huevo.", 
"Freír en abundante aceite.","Para el manjar, llevar las leches a cocción hasta punto deseado.",],
      observaciones: "."
    },
    {
      id: "Mana",
      nombre: "Mana",
      intro: ".",
      ingredientes: ["LECHE FRESCA 500 ML","AZUCAR 290 G","YEMAS DE HUEVO 3.5 UD","HUEVO 0.5 UD","***MONTAJE:****","PIROTINES METALICOS 20 UD",
"CAJA CARTULINA BLANCA TAPA TRANSPARENTE 1 UD","CLAVO DE OLOR 5 UD","COLORANTE ROJO C/N","COLORANTE AMARILLO C/N","COLORANTE VERDE C/N",
"AZUCAR EN POLVO 50 G",],
      pasos: [": En un tazón colocar la leche, los huevos, el azúcar y la vainilla remover y pasar por un colador para retirar las partes solidas del huevo.",
"Llevar en una olla al fuego mover constantemente hasta que se vea el fondo de la olla y se evapore todo el líquido.",
"Retirar y colocar en la batidora, con ayuda de la paleta, enfriar.",
"Reservar envuelto en papel film en el frio.",
"Dividir en 4 partes, pintar con colorante alimentario pesar bolitas de 15 gramos, formar las frutas o formas deseadas.",],
      observaciones: "."
    },
    {
      id: "Cachangas",
      nombre: "Cachangas",
      intro: ".",
      ingredientes: ["HARINA 250 G","BICARBONATO 2 G","AGUA FRIA 60 ML","HUEVO 50 G","AZÚCAR BLANCA 20 G","SAL 5 G","VINAGRE BLANCO 12 ML",
"***MIEL:***","AZÚCAR BLANCA 150 G","AGUA 75 ML","NARANJA DE MESA 1 UD","COLORANTE NARANJA C/N",],
      pasos: ["Mezclar lossecos y hacer una fontana, agregar en el centro loslíquidos y empezar a integrar.", 
"Amasar hasta tener una masa lisa, dejar reposar 15 minutos.", "Estirar masa a 1mm de grosor, formando discos de 18cm aproximadamente", 
"freír", "Para la miel llevar todo a la olla a hervir hasta tener una miel fluida 120 °C. Enfriar.Bañar las cachangas."],
      observaciones: "."
    },
    {
      id: "Ponderaciones",
      nombre: "Ponderaciones y manjar de yemas",
      intro: ".",
      ingredientes: ["****MASA:****","HUEVOS 4 UD","LECHE FRESCA 250 ML","HARINA S/P 130 G","****MANJAR DE YEMAS:****",
"LECHE EVAPORADA 200 G","CANELA EN RAMA 1 G","AZÚCAR BLANCA 100 G","YEMAS 60 G","ESENCIA DE VAINILLA 5 G","****COULIS:****","FRESA 150 G",
"AZÚCAR BLANCA 100 G2","PISCO 40 ML","***MONTAJE:***","ACEITE VEGETAL 1000 G","AZÚCAR EN POLVO 50 G","ARANDANOS 25 G","FRAMBUESA 25 G",
"MENTA FRESCA 5 G","HELADO DE VAINILLA 200 G","GLUCOSA 50 G",],
      pasos: ["****Masa:****", "Mezclar los líquidos con la harina, colar para evitar grumos. Reposar la masa en el frío por 20 minutos como mínimo.", 
        "Freír las ponderaciones en un perol con abundante aceite una vez tengamos bien caliente los moldes de hierro.",
"Manjar de yemas: llevar la leche, canela, vainilla y azúcar a punto manjar.", "Una vez que apaguemos el fuego temperar las yemas con la mezcla e integrar con batidor.",
"****Coulis:****", "licuar las fresas y llevar a una olla con el azúcar hasta conseguir la textura deseada, agregar el pisco al final y reservar.",
"Espolvorear azúcar en polvo sobre las ponderaciones, servir con las salsas, frutos rojos y helado.",],
      observaciones: "."
    },
    {
      id: "Natilla",
      nombre: "Natilla piurana y encanelado",
      intro: ".",
      ingredientes: ["BIZCOCHO DE ENCANELADO:***","HUEVOS 4 UD","AZUCAR 120 G","VAINILLA 2 G","CANELA EN POLVO 2 G","HARINA 84 G",
"****ALMIBAR AL PISCO:****","AGUA 100 ML","AZUCAR 100 G","PISCO 50 ML","CANELA EN RAMA 3 G","****NATILLA PIURANA:****",
"LECHE FRESCA 250 ML","CHANCACA 100 G","BICARBONATO 1 G",],
      pasos: ["****Encanelado:****",
"Batir los huevos con el azúcar hasta punto cinta. Agregar los ingredientes secos tamizados en forma envolvente. Vaciar el bizcocho sobe papel manteca.",
"Llevar al horno a 180°C por 10/12 minutos. Cortar tres rectángulos.",
"*****Almíbar:*****",
"Colocar en una olla el azúcar, el agua y la canela en rama hasta punto hilo flojo o 102°C,retirar del fuego y añadir el pisco. Reservar.",
"Colocar el manjar en baño maría para poder trabajar mejor.",
"Embeber cada bizcocho por ambos lados. Rellenar con manjar y espolvorear canela en polvo, repetir con los tres bizcochos, sobre poniendo uno sobre el otro.",
"Con la ayuda del cuchillo marcar formando rombos y colocar las perlas plateadas.",
"****Natilla:****",
"Llevar todos los ingredientes en una olla a hervir hasta que se vea el fondo de la olla y logre tener un color manjar. Servir.",],
      observaciones: "."
    },
    {
      id: "Chifon",
      nombre: "Chifon",
      intro: ".",
      ingredientes: ["****BASE:****","HARINA 240 G","AZÚCAR BLANCA 90 G","POLVO DE HORNEAR 4.5 G","ACEITE 75 G","YEMAS 6 UD","JUGO DE NARANJA 135 ML",
"ESENCIA DE VAINILLA 5 G","SAL 2 G","****MERENGUE:****","CLARAS 6 UD","AZÚCAR BLANCA 180 G","CREMOR TARTARO 2 G"],
      pasos: ["Batir las yemas y azúcar a punto cinta. Agregar el aceite, zumo de naranja e ingredientes secos de manera envolvente, reservar.",
"Para el merengue poner a batir las claras con el crémor y luego agregar el azúcar en forma de lluvia. Batir hasta tener un merengue firme.",
"Mezclar ambas preparaciones en forma envolvente y llevar la mezcla a un molde de chifónsin engrasar.",
" Horno a 160 por 50 minutos. Esto rinde para 1 molde de 25cm",],
      observaciones: "."
    },{
      id: "Tocino",
      nombre: "Tocino del cielo ",
      intro: ".",
      ingredientes: ["LECHE EVAPORADA 400 G","LECHE CONDENSADA 320 G","YEMAS 4 UD","HUEVO 4 UD","COCO RALLADO 50 G","ESENCIA DE VAINILLA 10 G",
"****CARAMELO:****","AZÚCAR BLANCA 200 G","AGUA 70 ML","****MONTAJE:****","FLORES COMESTIBLES 1 G","FRUTOS ROJOS 50 G",
"COBERTURA BITTER 50 G","MICA DE ACETATO 1 UD","MANGAS 1 UD",],
      pasos: ["Hacer un caramelo con el azúcar y agua, colocar sobre moldes rectangulares.",
"Para el aparejo: mezclar la leche condensada, leche evaporada, yemas, huevos y vainilla.",
"Colar 3 veces y agregar el coco rallado. Verter la mezcla sobre los moldes acaramelados.",
"Hornear a baño maría a 150 -160 grados por 40 a 50 min (dependiendo el tamaño del molde)"],
      observaciones: "."
    },
    {
      id: "King kong",
      nombre: "king kong",
      intro: ".",
      ingredientes: ["YEMAS 15 UD","PISCO 30 G","MANTECA 100 G","HARINA 250 G","POLVO DE HORNEAR 5 G","SAL 0.5 G",
"****MANJAR BLANCO:****","LECHE EVAPORADA 410 G","LECHE CONDENSADA 395 G","****DULCE DE PIÑA:****","PIÑA 200 G",
"AZÚCAR 120 G","GLUCOSA 45 G","PAPEL MANTECA 1 UD","POLIGRASA 1 UD",],
      pasos: ["Batir las yemas hasta que blanqueen verter el pisco y seguir batiendo.",
"Luego agregar la manteca derretida y lo seco hasta que se forme una masa.",
"Refrigerar, estirar, cortar en tres rectángulos iguales, pinchar.",
"Horno a 175°c por 20 o 35 minutos aprox.",
"Manjar blanco: Cocer la leche con azúcar y mover constantemente hasta que tome punto y se vea el fondo de la olla.",
"Dulce de piña: Cocer la piña rallada con su propio jugo y el azúcar dejar tomar punto miel floja"],
      observaciones: "."
    },{
      id: "Torta helada",
      nombre: "torta helada",
      intro: ".",
      ingredientes: ["HUEVOS 180 G","HARINA 90 G","AZÚCAR BLANCA 90 G","ESENCIA DE VAINILLA 2 G","****BASE DE GELATINA:****","GELATINA DE FRESA 125 G",
"COLAPEZ EN POLVO 10 G","AGUA CALIENTE 200 ML","AGUA FRÍA 200 ML","DURAZNO EN ALMÍBAR 180 G",
"****MOUSSE DE GELATINA:****","POLVO DE CHANTILLY 95 G","LECHE FRESCA 250 ML","GELATINA DE PIÑA 125 G","ESENCIA DE VAINILLA 5 G",
"COLAPEZ EN POLVO 10 G","AGUA CALIENTE 200 ML","****ALMIBAR:****","AGUA 70 ML","AZUCAR 70 G","PISCO 25 ML","****MONTAJE:****",
"ACEITE VEGETAL (MOLDE) 5 G","CHANTILLY VEGETAL 100 G","PAPEL MANTECA 1 UD","AZUCAR EN POLVO 30 G","BASE DORADA 20 CM 1 UD","MENTA Y FRESAS C/N"],
      pasos: ["Hacer una genovesa: Batir los huevos y azúcar hasta punto cinta, agregar la harina en forma envolvente.",
        " Estirar sobre una bandeja con papel manteca y hornear a 180 grados por 12 minutos.",
"**Para la base de la gelatina:**",
"Mezclar la gelatina en polvo con el agua caliente, añadirle la colapez hidratada para que con ese calor se disuelva y luego incorporar el agua fría.",
"Colocar una base de 0.5 cm de la gelatina en la base del molde, cuando cuaje un poco repartir los duraznos en gajos de 0.5cm en forma de flor verter el resto de la gelatina, llevar al frio hasta que cuaje.",
"Molde de 16cm previamente aceitado.",
"***Para el mousse de gelatina de piña:***",
"Hidratar el colapiz en polvo y reservar.",
"Disolver la gelatina de piña en agua caliente, agregar la colapez hidratada y reservar.",
"Batir el polvo de chantilly con la leche fresca helada hasta obtener una crema chantilly",
"Añadir las gelatinas al batido de chantilly con mucho cuidado a velocidad baja.",
"****Montaje:****",
"Sobre la gelatina de la base cuajada colocar un poco de la mousse de piña, colocar en el medio un arode bizcocho previamente embebido",
" completar con la mousse de piña","Llevar al frio hasta que este cuajado.",
"Desmoldar y decorar con crema chantilly.",],
      observaciones: "."
    },
  ],
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
  panes:[ {
      id: "Pan-Carretera",
      nombre: "Pan de Carretera",
      ingredientes: [
        "harina panadera 500 gr","levadura fresca 25 gr","azúcar rubia 15 gr","sal 10 gr","mantequilla 25 gr","agua 300 gr","RELLENO","queso dambo 300 gr",
        "aceituna negra sin pepa 300 gr","orégano seco 5 gr ", "romero 3 gr",
      ],
      pasos: ["Elaborar un pre fermento (Poolish al 50%) Harina 250, Agua 250 y 25 de levadura. Mezclar en un bowl y dejar fermentar por 20 minutos",
        "Mezclar los ingredientes restantes más la Poolish y amasar hasta obtener una masa homogénea y extensible",
        "Dividir en porciones de 50 gramos, bolear y dejar reposar 5 minutos sobre una tabla enharinada.",
        "Extender la masa con un palote de forma ovalada aplicar el relleno y encapsular con dos vueltas sellar bien y dejar fermentar por 25 minutos",
        "Hornear a 250º de 6 a 8 minutos aproximadamente.",],
      observaciones: ""},
      {
      id: "Pan-Andino",
      nombre: "Pan Andino",
      ingredientes: [
        "HARINA PANADERA 1000 G","SAL 15 G","ANÍS 10 G","AZÚCAR RUBIA 150 G","AGUA 500 G","MANTECA VEGETAL 100 G","LEVADURA FRESCA 50 G",
      ],
      pasos: [" MISE AND PLACE: Pesar todos los ingredientes por separado",
"Realizar una fontana con la harina.",
" Agregar en el centro de la fontana azúcar, sal y agua (diluir)",
" Seguido incorporamos la levadura y mezclamos hasta obtener una masa homogénea.",
" Después agregamos la manteca y el anís.",
" Amasamos hasta desarrollar el gluten.",
" Pesamos, dividimos en porciones y boleamos.",
"Dejamos fermentar en una superficie en harinada.",
" Desgasificamos y extendemos de forma circular con la ayuda de un palote.",
"Ubicamos en bandejas de cocción y dejamos reposar.",
" Llevamos a hornear y dejamos enfriar por un corto tiempo.",
" Repartir según las instrucciones del Docente a cargo ",],
      observaciones: ""},
      {
      id: "Karamanduca",
      nombre: "Karamanduca",
      ingredientes: ["HARINA PANADERA 1000 G","LECHE EN POLVO 60 G","SAL 15 G","AZÚCAR RUBIA 300 G","AJONJOLÍ TOSTADO Y MOLIDO 25 G",
"ANÍS TOSTADO Y MOLIDO 10 G","AGUA 180 G","HUEVOS 180 G","LEVADURA FRESCA 50 G","MANTECA VEGETAL 100 G","MANTEQUILLA SIN SAL 150 G",
"ESENCIA DE VAINILLA OSCURA 5 gr ",
      ],
      pasos: [" MISE AND PLACE: Pesar todos los ingredientes por separado.",
" Mezclar la harina, leche en polvo, sal, azúcar, ajonjolí y el anís. (realizar una fontana)",
" Agregar en el centro de la fontana agua, huevos y levadura. (mezclar)",
"Seguido incorporamos manteca, mantequilla y esencia. (mezclamos hasta obtener una masa homogénea)",
"Dejar fermentar la masa. (en bloque)",
" Pesar dividir y formar.",
"Ubicamos en bandejas de cocción y dejamos fermentar.",
" Barnizamos y decoramos con ajonjolí.",
"Llevamos a hornear y dejamos enfriar por un corto tiempo.",
"Repartir según las instrucciones del Docente a cargo. ",],
      observaciones: ""},
      {
      id: "Pan-Pita",
      nombre: "Pan Pita",
      ingredientes: [
        "HARINA PANADERA 1000 G","SAL 20 G","AGUA 650 G","ACEITE DE OLIVA 100 G",
"LEVADURA FRESCA 35 G",
      ],
      pasos: [" MISE AND PLACE: Pesar todos los ingredientes por separado.",
"Mezclar harina, sal, agua y levadura. (amasar hasta desarrollar gluten)",
"Incorporar poco a poco el aceite de oliva hasta que este totalmente integrado.",
"Pesamos, dividimos en porciones y boleamos.",
"Dejamos fermentar en una superficie enharinada.",
"Desgasificamos y extendemos de forma circular con la ayuda de un palote.",
 "Ubicamos en bandejas de cocción y dejamos reposar.",
"Llevamos a hornear y dejamos enfriar por un corto tiempo.",],
      observaciones: ""},
      {
      id: "Pan-Crocantes",
      nombre: "Panes Crocantes",
      ingredientes: [
        "HARINA PANADERA 1000 G","MEJORADOR DE MASAS 5 G","SAL 20 G","AZÚCAR BLANCA 10 G","AGUA 570 G","MANTECA 10 G","LEVADURA FRESCA 40 G",
      ],
      pasos: ["MISE AND PLACE: Pesar todos los ingredientes por especie."," Mezclar todos los ingredientes.","Amasar hasta desarrollar gluten.",
"Pesamos, dividimos en porciones.","Formar el diseño según el tipo de pan.","Ubicar en bandejas de cocción.","Llevar a fermentar.",
"Llevamos a hornear y dejamos enfriar por un corto tiempo.",
],
      observaciones: ""},
      {
      id: "Pan Frances",
      nombre: "Pan Frances",
      ingredientes: [
        " HARINA PANADERA 1000 G","MEJORADOR DE MASAS 5 G","SAL 20 G","AZÚCAR BLANCA 20 G","AGUA 600 G","MANTECA 20 G","LEVADURA FRESCA 40 G",
      ],
      pasos: ["  MISE AND PLACE: Pesar todos los ingredientes por especie.","Mezclar todos los ingredientes.","Amasar hasta desarrollar gluten.",
"Pesamos, dividimos en porciones.","Boleamos y enharinamos las porciones de masas.","Con un palote formamos el surco.",
"Ubicar en bandejas de cocción con el surco hacia abajo.","Llevar a fermentar y después voltear la masa dejando el surco hacia arriba.",
"Llevamos a hornear y dejamos enfriar por un corto tiempo",],
      observaciones: ""},
      {
      id: "Pan-Colisa / Caraco",
      nombre: "Pan Colisa/Caracol",
      ingredientes: [
        " HARINA PANADERA 1000 G","MEJORADOR DE MASAS 5 G","LECHE EN POLVO 40 G","ANÍS TOSTADO Y MOLIDO 3 G","SAL 15 G","AZÚCAR BLANCA 90 G",
"AGUA 450 G","MANTECA VEGETAL 110 G","COLORANTE AMARILLO HUEVO C/N G","LEVADURA FRESCA 60 G",
      ],
      pasos: ["MISE AND PLACE: Pesar todos los ingredientes por especie.","Mezclar todos los ingredientes.","Dividir la masa en dos partes iguales.",
"Amasar cada masa por separado hasta desarrollar gluten.","Formar cada diseño según el tipo de pan.","Ubicar en bandejas de cocción.",
"Llevar a fermentar y después de la fermentación barnizamos con huevo y decoramos con ajonjolí.","Seguido se lleva a hornear y dejamos enfriar por un corto tiempo",],
      observaciones: ""},
      {
      id: "Pan Hamburguesa/ Hot Dog",
      nombre: "Pan Hamburguesa / Hot dog",
      ingredientes: [
        "HARINA PANADERA 1000 G","MEJORADOR DE MASAS 5 G","LECHE EN POLVO 40 G","COLORANTE AMARILLO HUEVO C/N G","SAL 15 G","AZÚCAR BLANCA 120 G",
"AGUA 500 G","MANTECA VEGETAL 100 G","LEVADURA FRESCA 50 G",
      ],
      pasos: [" MISE AND PLACE: Pesar todos los ingredientes por especie.","Mezclar todos los ingredientes.","Amasar hasta desarrollar gluten.",
"Pesar y dividir la masa en porciones.","Formar cada diseño según el tipo de pan.","Ubicar en bandejas de cocción.",
 "Llevar a fermentar y después de la fermentación barnizamos con huevo.","Seguido se lleva a hornear y dejamos enfriar por un corto tiempo.",],
      observaciones: ""},
      {
      id: "Pan-Yema",
      nombre: "Pan Yema",
      ingredientes: [
        " HARINA PANADERA 1000 G","MEJORADOR DE MASAS 5 G","LECHE EN POLVO 40 G","ANÍS EN GRANO 3 G","SAL 15 G","AZÚCAR 130 G","HUEVOS 120 G",
"AGUA 380 G","MANTEQUILLA SIN SAL 120 G","LEVADURA FRESCA 60 G",
      ],
      pasos: [" MISE AND PLACE: Pesar todos los ingredientes por especie.","Mezclar todos los ingredientes.","Amasar hasta desarrollar gluten.",
"Pesar y dividir la masa en porciones.","Formar según el diseño establecido.","Ubicar en bandejas de cocción.",
"Llevar a fermentar y después de la fermentación barnizamos con huevo y decoramos con ajonjolí.",
"Seguido se lleva a hornear y dejamos enfriar por un corto tiempo",],
      observaciones: ""},
      {
      id: "Pan-Camote",
      nombre: "Pan de Camote",
      ingredientes: [ "HARINA PANADERA 1000 G","MEJORADOR DE MASAS 5 G","SAL 15 G","AZÚCAR BLANCA 150 G","CAMOTE SANCOCHADO 500 G",
"AGUA 400 G","MANTEQUILLA 70 G","LEVADURA FRESCA 60 G ",
      ],
      pasos: ["MISE AND PLACE: Acondicionar y pesar todos los ingredientes por especie.","Mezclar todos los ingredientes.",
"Amasar hasta desarrollar gluten.","Pesar y dividir la masa en porciones.","Formar según el diseño establecido.","Ubicar en bandejas de cocción.",
"Llevar a fermentar y después de la fermentación barnizamos con huevo.","Seguido se lleva a hornear y dejamos enfriar por un corto tiempo.",],
      observaciones: ""},
      {
      id: "Pan-Fibra",
      nombre: "Pan de Fibra",
      ingredientes: [
        " HARINA PANADERA 900 G","SALVADO DE TRIGO 100 G","MEJORADOR DE MASAS 5 G","SAL 15 G","AZÚCAR RUBIA 120 G","AGUA 500 G","MANTECA VEGETAL 100 G",
"LEVADURA FRESCA 50 G","AJONJOLÍ TOSTADO Y MOLIDO 50 G",
      ],
      pasos: ["MISE AND PLACE: Acondicionar y pesar todos los ingredientes por especie.","Mezclar todos los ingredientes menos la fibra.",
"Amasar hasta desarrollar gluten seguido agregamos la fibra.","Pesar y dividir la masa en porciones.","Formar según el diseño establecido.",
"Ubicar en bandejas de cocción.","Llevar a fermentar.","Seguido se lleva a hornear y dejamos enfriar por un corto tiempo.",],
      observaciones: ""},
      {
      id: "Pan-Maiz",
      nombre: "Pan de Maiz",
      ingredientes: ["HARINA PANADERA 850 G","HARINA DE MAÍZ AMARILLO 150 G","MEJORADOR DE MASAS 5 G","ANÍS EN GRANO 3 G","SAL 15 G",
"AZÚCAR BLANCA 100 G","AGUA 500 G","MANTECA VEGETAL 100 G","LEVADURA FRESCA 50 G",
      ],
      pasos: [" MISE AND PLACE: Acondicionar y pesar todos los ingredientes por especie.",
"Mezclar todos los ingredientes.",
"Amasar hasta desarrollar gluten.",
"Pesar y dividir la masa en porciones.",
"Formar según el diseño establecido.",
"Ubicar en bandejas de cocción.",
"Llevar a fermentar.",
"Seguido se lleva a hornear y dejamos enfriar por un corto tiempo",],
      observaciones: ""},
      {
      id: "Pan-Campo/Pizza",
      nombre: "Pan de Campo/Pizza",
      ingredientes: ["HARINA PANADERA 1000 G","MEJORADOR DE MASAS 5 G","LECHE EN POLVO 30 G","SAL 15 G","AZÚCAR BLANCA 100 G","HUEVO 180 G",
"AGUA 340 G","MANTEQUILLA 100 G","LEVADURA FRESCA 50 G","****RELLENO: PIZZA****","SALSA DE TOMATE 75 G","JAMÓN PIZZERO 100 G","QUESO MOZZARELLA 200 G",
"ORÉGANO 3 G","SAL GRUESA 5 G","****RELLENO: CAMPO****","QUESO DAMBO 100 G","TOCINO 150 G","PIMIENTO 50 G","TOMATE 50 G","PEREJIL PICADO 5 G","ORÉGANO 2 G","ROMERO 2 G",
"SAL GRUESA 3 G",
      ],
      pasos: [". MISE AND PLACE: Acondicionar y pesar todos los ingredientes por especie.",
"Mezclar todos los ingredientes.",
"Amasar hasta desarrollar gluten.",
"Pesar y dividir la masa en partes iguales.",
"Laminar y aplicar el relleno según el tipo de pan.",
"Formar y ubicar en bandejas de cocción.",
"Llevar a fermentar y después se barniza con huevo.",
"Seguido se lleva a hornear y dejamos enfriar por un corto tiempo..",],
      observaciones: ""},
      {
      id: "Pan-Encimado",
      nombre: "Pan Encimado",
      ingredientes: ["HARINA PANADERA 1000 G","MEJORADOR 10 G","LECHE EN POLVO 40 G","HUEVOS 180 G","MANTEQUILLA SIN SAL 120 G","SAL 10 G",
"AZÚCAR BLANCA 200 G","LEVADURA FRESCA 60 G","AGUA 300 G","ESENCIA DE VAINILLA 3 G","******CREMA PASTELERA:******","LECHE FRESCA 250 G",
"MAICENA 20 G","ESENCIA DE VAINILLA 5 G","MANTEQUILLA 15 G","YEMAS 3 UNID","AZÚCAR BLANCA 60 G","******ENCIMADO DE CHIRIMOYA:******",
"HARINA PASTELERA 150 G","MANTECA 90 G","AZÚCAR EN POLVO 45 G","ESENCIA DE CHIRIMOYA C/N G",
"******BRILLO:******","AZÚCAR BLANCA 50 G","GLUCOSA 25 G","AGUA 50 G",
      ],
      pasos: ["MISE AND PLACE: Acondicionar y pesar todos los ingredientes por especie.",
"Mezclar todos los ingredientes.",
"Amasar hasta desarrollar gluten.",
"Pesar y dividir la masa en porciones iguales",
"Formar, barnizar y aplicar el encimado según el tipo de pan.",
"Ubicar en bandejas de cocción.",
"Llevar a fermentar y después aplicar el encimado según el tipo de pan y barnizar.",
"Seguido se lleva a hornear y dejamos enfriar por un corto tiempo.",],
      observaciones: ""},
      {
      id: "Pan-Molde",
      nombre: "Pan de Molde : blanco y fibra",
      ingredientes: ["******PAN DE MOLDE BLANCO:******","HARINA PANADERA 1000 G","MEJORADOR 10 G","LECHE EN POLVO 50 G","ANTIMOHO 2 G","LEVADURA FRESCA 60 G",
"AGUA 500 G","AZÚCAR BLANCA 70 G","SAL 20 G","EMULSIONANTE 10 G","MANTEQUILLA 70 G","ESENCIA DE VAINILLA 5 G",
"******PAN DE MOLDE DE FIBRA:******","MASA BLANCA 885 G","SALVADO DE TRIGO 60 G","AJONJOLÍ TOSTADO 15 G","AGUA 60 G",
      ],
      pasos: [" MISE AND PLACE: Acondicionar y pesar todos los ingredientes por especie.",
"Mezclar todos los ingredientes menos la fibra.",
"Amasar hasta desarrollar gluten dividir la masa en 2 según el peso establecido.",
"A una de las masas se le agregara la fibra y se dejara integrar hasta obtener una masa homogénea.",
"Pesar las masas en porciones iguales.",
"Formar y aplicar el encimado según el tipo de pan.",
"Ubicar en moldes de cocción.",
"Llevar a fermentar según el tiempo establecido.",
"Seguido se lleva a hornear y se desmolda rápidamente después de su cocción dejando enfriar por un tiempo",],
      observaciones: ""},
      {
      id: "Pan-Sarnita",
      nombre: "Pan Sarnita",
      ingredientes: ["HARINA PANADERA 1000 G","LEVADURA FRESCA 50 G","SAL 20 G","AZÚCAR RUBIA 100 G","AGUA 550 G",
"MANTECA 100 G","LECHE EN POLVO 20 G","******TOPPING:*****","LECHE EVAPORADA 75 G","QUESO PARIA 400 G",
      ],
      pasos: ["MISE AND PLACE: Acondicionar y pesar todos los ingredientes por especie.","Mezclar todos los ingredientes.",
"Amasar hasta desarrollar gluten.","Pesar y dividir la masa en porciones iguales.","Formar y ubicar en bandejas de cocción.",
"Llevar a fermentar y después aplicar el encimado.","Seguido se lleva a hornear y dejamos enfriar por un corto tiempo.",],
      observaciones: ""},
      {
      id: "Pan-Wawa",
      nombre: "Pan Wawa",
      ingredientes: ["******PREFERMENTO: POOLISH 20%******","HARINA PANADERA 200 G","HUEVOS 200 G","LEVADURA FRESCA 60 G","AZÚCAR RUBIA 25 G",
"******MASA FINAL:******","HARINA PANADERA 600 G","HARINA INTEGRAL 200 G","CANELA EN POLVO 5 G","ANÍS TOSTADO 10 G","SAL 10 G","AZÚCAR RUBIA 225 G",
"CERVEZA NEGRA 50 G","INFUSIÓN 290 G","MIEL DE ABEJA 50 G","MANTECA 100 G","LECHE EN POLVO 30 G",
"******INFUSIÓN:******","AGUA 400 ML","HIERBA AROMATICA (CEDRÓN) 35 G",
      ],
      pasos: ["MISE AND PLACE: Acondicionar y pesar todos los ingredientes por especie.",
"Mezclar todos los ingredientes cuidadosamente.",
"Amasar hasta desarrollar gluten.",
"Pesar la masa en porciones iguales.",
"Formar y ubicar en bandejas de cocción.",
"Llevar a fermentar, después barnizar y decorar.",
"Seguido se lleva a hornear y dejamos enfriar por un tiempo.",],
      observaciones: ""},
      {
      id: "Pan-Chuta",
      nombre: "Pan Chuta",
      ingredientes: [
        "*******PREFERMENTO: ESPONJA 30%******","HARINA PANADERA 300 G","INFUSIÓN 180 G","LEVADURA FRESCA 60 G",
"AZÚCAR RUBIA 25 G","******MASA FINAL:******","HARINA PANADERA 700 G","CANELA EN POLVO 5 G","ANÍS TOSTADO 7 G","SAL 10 G",
"AZÚCAR RUBIA 225 G","HUEVOS 150 G","INFUSIÓN 120 G","MANTECA 200 G",
"******INFUSIÓN:******","AGUA 500 ML","HIERBA AROMATICA (HIERBA LUISA) 50 G",
      ],
      pasos: ["MISE AND PLACE: Acondicionar y pesar todos los ingredientes por especie.",
"Mezclar todos los ingredientes cuidadosamente.",
"Amasar hasta desarrollar gluten.",
"Pesar la masa en porciones iguales.",
"Formar y ubicar en bandejas de cocción.",
"Llevar a fermentar.",
"Seguido se lleva a hornear y dejamos enfriar por un tiempo",],
      observaciones: ""},
      {
      id: "Pan-Semita",
      nombre: "Pan Semita",
      ingredientes: ["***********MASA DULCE***********",
"******PREFERMENTO: POOLISH 20%******",
"HARINA PANADERA 200 G",
"AGUA 200 G",
"LEVADURA FRESCA 60 G",
"*****MASA FINAL:*****",
"HARINA PANADERA 600 G",
"HARINA DE MAÍZ 200 G",
"ANÍS 5 G",
"SAL 10 G",
"AZÚCAR 250 G",
"HUEVO 120 G",
"AGUA 100 G",
"MANTECA 150 G",
"*********MASA SUAVE**********",
"******PREFERMENTO: BIGA 20%*******",
"HARINA PANADERA 200 G",
"AGUA 100 G",
"LEVADURA FRESCA 40 G",
"******MASA FINAL:******",
"HARINA PANADERA 400 G",
"HARINA INTEGRAL 400 G",
"SAL 20 G",
"AZÚCAR 100 G",
"AGUA 400 G",
"MANTECA 200 G",
      ],
      pasos: [" MISE AND PLACE: Acondicionar y pesar todos los ingredientes por especie.",
"Mezclar todos los ingredientes cuidadosamente y amasar hasta desarrollar gluten.",
"Pesar, formar y dividir la masa en porciones iguales.",
"Ubicar en bandejas de cocción.",
"Llevar a fermentar.",
"Seguido se lleva a hornear y dejamos enfriar por un tiempo.",],
      observaciones: ""},


  ],
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
