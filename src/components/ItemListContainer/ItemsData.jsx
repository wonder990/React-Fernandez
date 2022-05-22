const itemsData = [
  {
    id: 1,
    tipo: "celular",
    precio: 739,
    marca: "Samsung",
    name: "Galaxy S22 Ultra",
    img: "https://images.samsung.com/is/image/samsung/p6pim/es/2202/gallery/es-galaxy-s22-ultra-s908-411065-sm-s908bzadeub-530876980",
    dim: "163,3 x 77,9 x 8,9 mm",
    peso: "227 gramos",
    pantalla:
      "Dynamic AMOLED 2X curva de 6,8 pulgadas Resolución 3.080 x 1.440 píxeles 500 ppp Tasa de refresco adaptativa: 1-120 Hz Muestreo táctil: 240 Hz HDR10+",
    procesador: "Samsung Exynos 2200 GPU AMD RDNA 2",
    mram: "8/12 GB",
    almacenamiento: "128/256/512 GB/1TB",
    camaratrasera: "40 MP f/2.2",
    camaradelantera:
      "108 MP f/1.8, OIS Gran angular 12 MP, 120º, f/2.2 Telefoto 10 MP,  69 mm, f/2.4, OIS Telefoto 10 MP, 230 mm, f/1.49, OIS ",
    bateria:
      "5.000 mAh Carga rápida 45W Carga inalámbrica 15W Carga inalámbrica inversa",
    sop: "Android 12 con One UI 4.1",
    Description: "Asd",
  },
  {
    id: 2,
    tipo: "celular",
    precio: 650,
    marca: "Samsung",
    name: "Galaxy S21 Ultra",
    img: "https://images.samsung.com/is/image/samsung/p6pim/latin/galaxy-s21/gallery/latin-galaxy-s21-5g-g991-sm-g991bzvjtpa-368316791?$1300_1038_PNG$",
    peso: "",
    pantalla: "6,8” Dynamic AMOLED 2x 120 Hz WQHD+",
    procesador: "Exynos 2100",
    mram: "12 / 16 GB",
    almacenamiento: "128 / 256 / 512 GB",
    camaratrasera: "40 MP f/2.2",
    camaradelantera:
      "108 MP f/1.8 Ultra gran angular 12 MP f/2.2 Tele 10 MP f/2.4 Tele 10 MP f/4.9 Láser AF ToF",
    bateria:
      "5.000 mAh Carga rápida 25 W Carga inalámbrica 15W Wireless PowerShare",
    sop: "Android 11 + One UI 3.0",
    Description: "Asd",
  },
  {
    id: 3,
    tipo: "celular",
    precio: 752,
    marca: "Samsung",
    name: "Galaxy Note 20 Ultra",
    img: "https://images.samsung.com/is/image/samsung/latin-galaxy-note20-ultra-n985-sm-n985fznkgto-frontmysticbronze-320814310?$720_576_PNG$",
    peso: "",
    pantalla:
      "Dynamic AMOLED 6,9” 3.088 x 1.440px WQHD+ 496 ppp, 120 Hz, 19,3:9, HDR10+",
    procesador: "Exynos 990",
    mram: "12 GB RAM LPDDR5",
    almacenamiento: "256/512 GB (con MicroSD)",
    camaratrasera:
      "Cuatro cámaras: Principal: 108 MP (1/1,33”, 1,8 µm), f/1.8, OIS Gran angular: 12 MP (1/2,55”, 1,4 µm), f/2.2 Telefoto: 12 MP (1/3,6”, 1 µm), f/3.0, OIS Sensor profundidad: Láser AF",
    camaradelantera: "10 MP (1/3,24”, 1,22 µm), AF, f/2.2",
    bateria: "4.500 mAh 25W Carga inalámbrica 15 W Carga inversa 4,5 W",
    sop: "Android 10 + One UI",
    Description: "Asd",
  },
  {
    id: 4,
    tipo: "celular",
    precio: 730,
    marca: "Samsung",
    name: "Galaxy Fold 3",
    img: "https://images.samsung.com/is/image/samsung/p6pim/es/2108/gallery/es-galaxy-z-fold3-f926-5g-sm-f926bzsdeub-477345061",
    peso: "",
    pantalla:
      "Dynamic AMOLED 2X de 7,6 pulgadas Infinity Flex Display QXGA+ (2208 x 1768 puntos), 120 Hz, 374 ppp y soporte para S Pen",
    pantallaex:
      "Dynamic AMOLED 2X de 6,2 pulgadas (2268 x 832 puntos), 120 Hz y 387 ppp",
    procesador:
      "Snapdragon 888 5G con 8 núcleos, 64 bits y litografía de 5 nm (2,84 GHz + 2,4 GHz + 1,8 GHz)",
    mram: "12 GB",
    almacenamiento: "256 o 512 GB UFS 3.1",
    camaratrasera:
      "- Principal: 12 megapíxeles, f/1.8, fotodiodos de 1,8 µm, Dual Pixel AF, FOV 83º y estabilización óptica - Ultra gran angular: 12 megapíxeles, f/2.2, FOV 123º y fotodiodos de 1,12 µm - Teleobjetivo: 12 megapíxeles, f/2.4, PDAF, fotodiodos de 1 µm, Dual OIS, FOV 45º y 2x zoom",
    camaradelantera: "10 megapíxeles, f/2.2, FOV 80º y fotodiodos de 1,22 µm",
    bateria: "4.400 mAh",
    sop: "Android 11",
    Description: "Asd",
  },
  {
    id: 5,
    tipo: "celular",
    precio: 540,
    marca: "Samsung",
    name: "Galaxy A52 5G",
    img: "https://storage.comprasmartphone.com/smartphones/samsung-galaxy-a52-5g.png",
    peso: "",
    pantalla: "Super AMOLED 6,5 FullHD+ (1.080 x 2.400 px) 407 ppp, 120 Hz",
    procesador: "	Snapdragon 750G 5G",
    mram: "	6/8 GB",
    almacenamiento: "	128/256 GB (microSD hasta 1 TB)",
    camaratrasera:
      "Principal: AF OIS de 64 MP (f/1.8, 0,8 μm) GA: 12 MP FF (f/2.2, 1,12 µm) Macro: 5 MP FF (f/2.4, 1,12 µm) Profundidad: 5 MP AF (f/2.4)",
    camaradelantera: "32 MP FF (f/2.2, 0,8 µm)",
    bateria: "4.500 mAh + carga rápida 25 W",
    sop: "	Android 11 + One UI",
    Description: "Asd",
  },
  {
    id: 6,
    tipo: "celular",
    precio: 590,
    marca: "Samsung",
    name: "Galaxy S21 FE",
    img: "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-g990ezwaaro/gallery/ar-galaxy-s21-fe-g990-408811-sm-g990ezwaaro-530832035",
    peso: "",
    pantalla: " 6,4″ pulgadas Dynamic AMOLED 2X",
    procesador: "Exynos 2100.",
    mram: "6 GB",
    almacenamiento: "128 GB",
    camaratrasera: " Triple, 12 MP + 12 MP + 8 MP",
    camaradelantera: "32 MP ",
    bateria: "4.500 mAh",
    sop: " Android 11",
    Description: "Asd",
  },
  {
    id: 7,
    tipo: "celular",
    precio: 430,
    marca: "Samsung",
    name: "Galaxy M52 5G",
    img: "https://images.samsung.com/is/image/samsung/p6pim/cl/sm-m526bzkjcho/gallery/cl-galaxy-m52-5g-m526-sm-m526bzkjcho-519308161?$720_576_PNG$",
    peso: "",
    pantalla:
      "Super AMOLED Plus de 6,7 pulgadas Resolución FullHD+ (2.400 x 1.080 píxeles) 120 Hz",
    procesador: "Octa-core a 2,4 GHz",
    mram: "6 GB",
    almacenamiento: "128 GB ampliables con tarjetas microSD",
    camaratrasera:
      "64 MP f/1.8 Gran angular 12 MP f/2.2, 123º FOV Macro 5 MP f/2.4",
    camaradelantera: "32 MP f/2.2",
    bateria: "	5.000 mAh Carga rápida 25W",
    sop: "Android 11 con One UI 3.0",
    Description: "Asd",
  },
  {
    id: 8,
    tipo: "celular",
    precio: 350,
    marca: "xiaomi",
    name: "Xiaomi Mi 11i",
    img: "https://f.rpp-noticias.io/2021/02/08/1055642k2-all-kv2-1024x1024png.png",
    peso: "",
    pantalla:
      "AMOLED de 6,67 pulgadas Resolución FullHD+ (2.400 x 1.080 píxeles) Formato 20:9 Tasa de refresco: 120 Hz  de muestreo: 360 Hz",
    procesador: "Snapdragon 888 GPU Adreno 660",
    mram: "8 GB LPDDR5",
    almacenamiento: "256 GB UFS 3.1",
    camaratrasera:
      "Principal: 108 MP f/1.75 Gran angular: 8 MP f/2.2, 119º Macro: 5 MP f/2.4",
    camaradelantera: "20 MP f/2.45",
    bateria: "4.520 mAh Carga rápida 33W",
    sop: "MIUI 12 basado en Android 11",
    Description: "Asd",
  },
  {
    id: 9,
    tipo: "celular",
    precio: 189,
    marca: "xiaomi",
    name: "Xiaomi 11T",
    img: "https://one-tech.es/wp-content/uploads/2021/09/xiaomi-11t-pro.png",
    peso: "",
    pantalla:
      "AMOLED de 6,67 pulgadas, resolución FullHD+ (2.400 x 1.080 puntos),  relación de aspecto 20:9, refresco de 120 Hz, 800 nits (brillo típico),  relación de contraste típica de 5.000 000:1 y compatibilidad con  contenidos Dolby Vision y HDR10+",
    procesador: "MediaTek Dimensity 1200 Ultra con fotolitografía de 6 nm",
    mram: "8 GB LPDDR4x",
    almacenamiento: "128 o 256 GB UFS 3.1",
    camaratrasera:
      "Principal: 'sensor de 108 megapíxeles, óptica con valor de apertura f/1.75 y fotodiodos de 2,1 µm Ultra gran angular: sensor de 8 megapíxeles, visión de 120º Telemacro: sensor de 5 megapíxeles, óptica con valor de apertura f/2.4 y enfoque automático entre 3 y 7 cm",
    camaradelantera:
      "Sensor de 16 megapíxeles y óptica con valor de apertura f/2.45",
    bateria: "5000 mAh",
    sop: "MIUI 12.5 basado en Android 11",
    Description: "Asd",
  },
  {
    id: 10,
    tipo: "celular",
    precio: 325,
    marca: "xiaomi",
    name: "Xiaomi 11 Lite 5G NE",
    img: "https://www.kibotek.com/wp-content/uploads/2021/09/kiboTEK_xiaomi_mi11_5G_ne_010.png",
    peso: "",
    pantalla:
      "Especificaciones técnicas del Xiaomi 11 Lite 5G NE DIMENSIONES Y PESO 160.53×75.73×6.81mm 158 gramos PANTALLA",
    procesador: "Qualcomm Snapdragon 778G",
    mram: "6GB / 8GB LPDDR4X",
    almacenamiento: "128GB / 256 GB UFS 2.2",
    camaratrasera:
      "Principal: 64 MP (1/1,97, f/1.79) Ultra gran angular: 8 MP (f/2.2, 119°) Macro: 5 MP (f/2.4)",
    camaradelantera: "20 MP",
    bateria: "4.250 mAh con carga rápida de 33W",
    sop: "MIUI 12 (sobre Android 11)",
    Description: "Asd",
  },
  {
    id: 11,
    tipo: "celular",
    precio: 283,
    marca: "xiaomi",
    name: "Xiaomi Mi 11 Lite 5G",
    img: "https://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2021/12/29184905/CELU392NEGRO-128GB_0.png",
    peso: "",
    pantalla: "6,55 FHD+ AMOLED 90 Hz, HDR10 Gorilla Glass 6",
    procesador: "Qualcomm Snapdragon 780 (5G)",
    mram: "8 GB LPDDR4X",
    almacenamiento: "128 GB UFS 2.2",
    camaratrasera:
      "Principal: 64 MP (1/1,97, f/1.79, 1,4 micras) Ultra gran angular: 8 MP (f/2.2, 1,12 micras, 119° Macro: 5 MP (f/2.4, 1,12 micras)",
    camaradelantera: "20 MP f/2.2",
    bateria: "4.250 mAh Cargador de 33 W",
    sop: "MIUI 12 (sobre Android 11)",
    Description: "Asd",
  },
  {
    id: 12,
    tipo: "celular",
    precio: 200,
    marca: "xiaomi",
    name: "POCO M3 Pro 5G",
    img: "https://foxmoviles.com/wp-content/uploads/2021/06/M3pro-blue.png",
    peso: "",
    pantalla:
      "6,5 pulgadas IPS/LCD FullHD+ (2.400 x 1.080 px) 90 Hz Gorilla Glass 3",
    procesador: "MediaTek Dimensity 700 GPU ARM Mali-G57 MC2",
    mram: "4 / 6 GB LPDDR4X",
    almacenamiento: "64 / 128 GB UFS 2.2",
    camaratrasera:
      "Principal: 48 MP, f/1.79 Macro: 2 MP, f/2.4 Profundidad: 2 MP, f/2.4",
    camaradelantera: "8 MP, f/2.0",
    bateria: "5.000 mAh Carga rápida 18W",
    sop: "Android 11 MIUI 12 for POCO",
    Description: "Asd",
  },
  {
    id: 13,
    tipo: "celular",
    precio: 327,
    marca: "xiaomi",
    name: "POCO M4 Pro 5G",
    img: "https://i01.appmifile.com/webfile/globalimg/xm_event/fr_poco/adc263fcfaaa8b36faab67051c1ebc3c.png?thumb=1&w=385&h=385&width=385&height=385",
    peso: "",
    pantalla:
      "IPS/LCD de 6,6 pulgadas Resolución FullHD+ (2.400 x 1.080 píxeles) 450 nits Tasa de refresco: 90 Hz Tasa de refresco táctil: 240 Hz DynamicSwitch (50/60/90 Hz) Gorilla Glass 3",
    procesador: "MediaTek Dimensity 810 GPU ARM Mali-G57 MC2",
    mram: "4/6 GB LPDDR4x Dynamic RAM",
    almacenamiento: "64/128 GB UFS 2.2 Ampliable con tarjetas microSD",
    camaratrasera: "50 MP f/1.8 Gran angular 8 MP, 119º, f/2.2",
    camaradelantera: "16 MP f/2.45",
    bateria: "5.000 mAh Carga rápida 33W",
    sop: "Android 11 con MIUI 12.5 para POCO",
    Description: "Asd",
  },
  {
    id: 14,
    tipo: "celular",
    precio: 307,
    marca: "xiaomi",
    name: "Xiaomi Redmi Note 11 Pro 5G",
    img: "https://i01.appmifile.com/webfile/globalimg/pic/Redmi-Note-11-Pro-5G-b.png",
    peso: "",
    pantalla:
      "6,67 pulgadas Full HD+ AMOLED Tasa de refresco hasta 120Hz Frecuencia de muestreo de 360 Hz Corning Gorilla Glass 5",
    procesador: "Snapdragon 695",
    mram: "	6/8 GB LPDDR4X",
    almacenamiento: "	64/128 GB UFS 2.2",
    camaratrasera:
      "108 megapíxeles, f/1.9 8 megapíxeles gran angular, f/2.2 2 megapíxeles macro, f/2.4",
    camaradelantera: "16 megapíxeles, f/2.4",
    bateria: "5.000 mAh Carga rápida de 67 W",
    sop: "Android 11 MIUI 13",
    Description: "Asd",
  },
  {
    id: 15,
    tipo: "celular",
    precio: 469,
    marca: "iphone",
    name: "Apple iPhone XS Max",
    img: "https://techstore.bo/wp-content/uploads/2020/08/iPhone-Xs-Max.png",
    peso: "",
    pantalla:
      "Pantalla Super Retina HD Pantalla OLED Multi‑Touch de 6,5 pulgadas (en diagonal) Pantalla HDR Resolución de 2.688 por 1.242 píxeles a 458 p/p",
    procesador:
      "Chip A12 Bionic con arquitectura de 64 bits y 7 nm, Neural Engine",
    mram: "	4 GB",
    almacenamiento: "64 GB 256 GB 512 GB",
    camaratrasera:
      "12 + 12 megapíxeles gran angular y teleobjetivo (f/1.8 y f/2.4), doble OIS zoom óptico, grabación 4K@24/30/60fps, flash 4 LED",
    camaradelantera:
      "7 megapíxeles, f/2.2, grabación 1080p Retina flash, vídeo 1080p",
    bateria: "3.174 mAh",
    sop: "iOS 12",
    Description: "Asd",
  },
  {
    id: 16,
    tipo: "celular",
    precio: 699,
    marca: "iphone",
    name: "Apple iPhone 11 Pro Max",
    img: "https://phonesdata.com/files/models/Apple--iPhone-11-Pro-Max-870.png",
    peso: "",
    pantalla:
      "Super Retina XDR Pantalla OLED Multi‑Touch de 6,5 pulgadas (en diagonal) Pantalla HDR Resolución de 2.688 por 1.242 píxeles a 458 p/p",
    procesador:
      "Chip A13 Bionic con arquitectura de 64 bits y 7 nm+, Neural Engine (3ª gen)",
    mram: "8 GB",
    almacenamiento: "64GB 256GB 512GB",
    camaratrasera:
      "12 + 12 + 12 MP gran angular (f/1.8), ultra gran angular (f/2.4) y teleobjetivo (f/2.0), doble OIS, zoom óptico 2x, grabación 4K@24/30/60fps",
    camaradelantera:
      "12 megapíxeles, f/2.2, grabación 4K 60 FPS, Retina flash, vídeo cámara lenta 1080p a 120 FPS",
    bateria: "4000 mAh",
    sop: "iOS 13",
    Description: "Asd",
  },
  {
    id: 17,
    tipo: "celular",
    precio: 729,
    marca: "iphone",
    name: "Apple iPhone 12",
    img: "https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-HD.png",
    peso: "",
    pantalla:
      "OLED Retina 2.532 x 1.170 píxeles, Super Retina XDR, 19.5:9 460ppp True-tone",
    procesador: "Apple A14 Bionic, 5nm NPU Neural Engine de 4ª gen",
    mram: "8 GB",
    almacenamiento: "64 / 128 / 256 GB",
    camaratrasera:
      "Principal: 12MP, f/1.6, OIS, QuadLED flash Secundaria gran angular: 12MP, f/2.4 Vídeo: 4K Dolby Vision, 1080p/240fps, HDR",
    camaradelantera: "12MP, f/2.2, TOF 3D, slow-motion",
    bateria: "Carga rápida 18W e inalámbrica MagSafe 15W",
    sop: "iOS 14",
    Description: "Asd",
  },
  {
    id: 18,
    tipo: "celular",
    precio: 1089,
    marca: "iphone",
    name: "Apple iPhone 12 Pro Max",
    img: "https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-HD.png",
    peso: "",
    pantalla:
      "Pantalla Super Retina XDR. Pantalla OLED de 6,7 pulgadas (en diagonal) Resolución de 2.778 por 1.284 píxeles a 458 p/p.",
    procesador: "Apple A14",
    mram: "",
    almacenamiento: "128 GB 256 GB 512 GB",
    camaratrasera:
      "12 MP f/1.6 26mm OIS 12 MP (tele) f/2.0 52mm OIS 12 MP f/1.6 13mm ultra gran angular 120º Cámara LiDAR Vídeo 4K@60fps Grabación en Dolby Vision Cámara lenta frontal",
    camaradelantera: "12 megapíxeles f/2.2 HDR",
    bateria:
      "Carga rápida hasta 20W (cargador no incluido) MagSafe 15W Carga Qi de 7,5W",
    sop: "iOS 14",
    Description: "Asd",
  },
  {
    id: 19,
    tipo: "celular",
    precio: 800,
    marca: "iphone",
    name: "Apple iPhone 13",
    img: "https://pngimg.com/uploads/iphone_13/iphone_13_PNG31.png",
    peso: "",
    pantalla:
      "Super Retina XDR OLED de 6,1 pulgadas Resolución FullHD+ (2.532 x 1.170 píxeles) 460 ppp True-Tone HDR 800 nits",
    procesador: "Apple A15 Bionic GPU cuatro núcleos Neural Engine",
    mram: "4 GB",
    almacenamiento: "128/256/512 GB",
    camaratrasera:
      "12 MP f/1.6, OIS Gran angular: 12 MP f/2.4, 120º FOV Vídeo: 4K Dolby Vision",
    camaradelantera: "12 MP f/2.2",
    bateria:
      "3.227 mAh Carga rápida 20W Carga inalámbrica 7,5W Carga MagSafe 15W",
    sop: "iOS 15",
    Description: "Asd",
  },
  {
    id: 20,
    tipo: "celular",
    precio: 1250,
    marca: "iphone",
    name: "Apple iPhone 13 Pro",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-blue-select?wid=940&hei=1112&fmt=png-alpha&.v=1645552346275",
    peso: "",
    pantalla:
      "Super Retina XDR 6,1 pulgadas ProMotion 120 Hz 2.532 x 1.170 px, 460 ppp 1.000 nits, contraste 2.000.000:1",
    procesador: "Apple A15 Bionic",
    mram: "",
    almacenamiento: "128/256/512 GB/1 TB",
    camaratrasera:
      "Telefoto: 12 MP f/2.8, 77mm, 3x óptico Ultrawide: 12 MP f/1.8, 6P, 120º Principal: 12 MP f/1.5, 1,9um",
    camaradelantera: "12 MP f/2.2",
    bateria:
      "3.772 mAh Carga rápida 20W Carga inalámbrica 7,5W Carga MagSafe 15W",
    sop: "iOS 15",
    Description: "Asd",
  },
  {
    id: 21,
    tipo: "celular",
    precio: 1450,
    marca: "iphone",
    name: "Apple iPhone 13 Pro Max",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-blue-select?wid=940&hei=1112&fmt=png-alpha&.v=1645552346295",
    peso: "",
    pantalla:
      "Pantalla Super Retina XDR con ProMotion Pantalla OLED de 6.7 pulgadas (diagonal) sin marco Resolución de 2778 x 1284 pixeles a 458 ppi",
    procesador: "Chip A15 Bionic",
    mram: "",
    almacenamiento: "128 GB 256 GB 512 GB 1 TB",
    camaratrasera:
      "Telefoto: 12 MP f/2.8, 77mm, 3x óptico Ultrawide: 12 MP f/1.8, 6P, 120º Principal: 12 MP f/1.5, 1,9um",
    camaradelantera: "12 MP f/2.2",
    bateria: "4000 mAh",
    sop: "iOS 15",
    Description: "Asd",
  },
];
