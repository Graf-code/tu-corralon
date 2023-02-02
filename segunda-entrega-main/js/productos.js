const productos = [
    {id:01, tipo:"Libro", nombre:"LEON TOLSTOI - (GUERRA Y PAZ 1)", precio: 1400, foto: " " },
    {id:02, tipo:"Libro", nombre:"LEON TOLSTOI - (GUERRA Y PAZ 2)", precio: 1400, foto: " " },
    {id:03, tipo:"Libro", nombre:"HOMERO - LA ILIADA", precio: 1000, foto: " " },
    {id:04, tipo:"Libro", nombre:"HOMERO - LA ODISEA", precio: 1000, foto: " " },
    {id:05, tipo:"Libro", nombre:"FRANZ KAFKA - (METAMORFOSIS)", precio: 1400, foto: " " },
    {id:06, tipo:"Libro", nombre:"ARISTOTELES - (ETICA NICOMAQUEA)", precio: 1500, foto: " " },
    {id:07, tipo: "Libro", nombre: "ARISTOTELES - (EL ARTE DE LA RETORICA)", precio: 4500, foto: " "},
    {id:08, tipo: "Libro", nombre: "ARISTOTELES - (METAFISICA)", precio: 3800, foto: " "},
    {id:09, tipo: "Libro", nombre: "ARISTOTELES - (LA POLITICA)", precio: 3800, foto: " "},
    {id:10, tipo: "Libro", nombre: "SCHOPENHAUER (EL RECONOCIMIENTO DE LO IRRACIONAL COMO LA FUERZA DOMINANTE DEL UNIVERSO)", precio: 3800, foto: " "},
    {id:11, tipo: "Libro", nombre: "SCHOPENHAUER (LA CUADRUPLE RAIZ DEL PRINCIPIO DE RAZON SUFICIENTE)", precio: 2900, foto: " "},
    {id:13, tipo: "Libro", nombre: "SCHOPENHAUER (ENSAYO SOBRE EL LIBRE ALBEDRIO)", precio: 1000, foto: " "},
    {id:14, tipo: "Libro", nombre: "FRIEDRICH NIETZSCHE (ASI HABLO ZARATUSTRA)", precio: 1300, foto: " "},
    {id:15, tipo: "Libro", nombre: "FRIEDRICH NIETZSCHE (LA GAYA CIENCIA)", precio: 2300, foto: " "},
    {id:16, tipo: "Libro", nombre: "FRIEDRICH NIETZSCHE (EL ANTICRISTO)", precio: 2400, foto: " "},
    {id:17, tipo: "Libro", nombre: "NICHOLAS CAPALDI (COMO GANAR UNA DISCUSION)", precio: 800, foto: " "},
    {id:18, tipo: "Libro", nombre: "SENECA (EPISTOLAS MORALES A LUCILIO - 2)", precio: 800, foto: " "},
    {id:19, tipo: "Libro", nombre: "RODOLFO TERRAGNO (MAITLAND & SAN MARTIN)", precio: 800, foto: " "},
    {id:20, tipo: "Libro", nombre: "EDUARDO GALEANO (EL LIBRO DE LOS ABRAZOS)", precio: 800, foto: " "},
    {id:21, tipo: "Libro", nombre: "ANA FRANK (EL DIARIO DE ANA FRANK)", precio: 800, foto: " "},
    {id:22, tipo: "Libro", nombre: "RICARDO GONZALEZ (FAMILIA DE BIEN)", precio: 800, foto: " "},
    {id:23, tipo: "Libro", nombre: "RICARDO GONZALEZ (VIDA DE CLUB)", precio: 800, foto: " "},
    {id:24, tipo: "Libro", nombre: "GUSTAVO ADOLFO BECQUER (RIMAS Y LEYENDAS)", precio: 800, foto: " "},
    {id:25, tipo: "Libro", nombre: "LAO TSE (TAO TE CHING)", precio: 800, foto: " "},
    {id:26, tipo: "Libro", nombre: "SUN TSU (EL ARTE DE LA GUERRA)", precio: 800, foto: " "},
    {id:27, tipo: "Libro", nombre: "NICOLAS MAQUIAVELO (EL PRINCIPE)", precio: 800, foto: " "},
    {id:28, tipo: "Libro", nombre: "ANTONIE DE SAINT-EXUPERY (EL PRINCIPITO)", precio: 800, foto: " "},
    {id:29, tipo: "Libro", nombre: "NAPOLEON BONAPARTE (MAXIMAS Y PENSAMIENTOS)", precio: 800, foto: " "},
    {id:30, tipo: "Libro", nombre: "IRVIN D. YALOM (EL DIA QUE NIETZSCHE LLORO)", precio: 800, foto: " "},
    {id:31, tipo: "Libro", nombre: "JOE DISPENZA (DEJA DE SER TU)", precio: 800, foto: " "},
    {id:32, tipo: "Libro", nombre: "GARCIA MORENTE (LECCIONES PRELIMINARES DE FILOSOFIA)", precio: 800, foto: " "},
    {id:33, tipo: "Libro", nombre: "PLATON (EL BANQUETE-CRITON)", precio: 800, foto: " "},
    {id:34, tipo: "Libro", nombre: "SOFOCLES (ANTIGONA) ", precio: 800, foto: " "},
    {id:35, tipo: "Libro", nombre: "FIODOR M. DOSTOIEVSKI (EL JUGADOR)", precio: 800, foto: " "},
    {id:36, tipo: "Libro", nombre: "FRANZ KAFKA (AMERICA)", precio: 800, foto: " "},
    {id:37, tipo: "Libro", nombre: "BARUJ ESPINOZA (TRATADO TEOLOGICO POLITICO)", precio: 800, foto: " "},
    {id:38, tipo: "Libro", nombre: "WILLIAM SHAKESPEARE (HAMLET)", precio: 800, foto: " "},
    {id:39, tipo: "Libro", nombre: "JORGE AQUINO (RECURSOS HUMANOS)", precio: 800, foto: " "},
    {id:40, tipo: "Libro", nombre: "MARIA SAENZ QUESADA (1943 EL FIN DE LA ARGENTINA LIBERAR, EL SURGIMIENTO DEL PERONISMO)", precio: 800, foto: " "},
    {id:41, tipo: "Libro", nombre: "SENECA (EPISTOLAS MORALES A LUCILIO - 1)", precio: 800, foto: " "},
];
/*
1 - GUERRA Y PAZ (LEON TOLSTOI 1) *                                                              
2 - GUERRA Y PAZ (LEON TOLSTOI 2) * 
3 - HOMERO - LA ILIADA *
4 - HOMERO - LA ODISEA * 
5 - FRANZ KAFKA (METAMORFOSIS) *
6 - ARISTOTELES (ETICA NICOMAQUEA) * 
7 - ARISTOTELES (EL ARTE DE LA RETORICA) *
8 - ARISTOTELES (METAFISICA) * 
9 - ARISTOTELES (LA POLITICA) *
10 - SCHOPENHAUER (EL RECONOCIMIENTO DE LO IRRACIONAL COMO LA FUERZA DOMINANTE DEL UNIVERSO) *
11 - SCHOPENHAUER (LA CUADRUPLE RAIZ DEL PRINCIPIO DE RAZON SUFICIENTE) *
12 - SCHOPENHAUER (ENSAYO SOBRE EL LIBRE ALBEDRIO) *
13 - FRIEDRICH NIETZSCHE (ASI HABLO ZARATUSTRA) *
14 - FRIEDRICH NIETZSCHE (LA GAYA CIENCIA) *
15 - FRIEDRICH NIETZSCHE (EL ANTICRISTO) *
16 - NICHOLAS CAPALDI (COMO GANAR UNA DISCUSION) *
17 -  RODOLFO TERRAGNO (MAITLAND & SAN MARTIN) *
18 - EDUARDO GALEANO (EL LIBRO DE LOS ABRAZOS) *
19 - ANA FRANK (EL DIARIO DE ANA FRANK) *
20 - RICARDO GONZALEZ (FAMILIA DE BIEN) *
21 - RICARDO GONZALEZ (VIDA DE CLUB) *
22 - GUSTAVO ADOLFO BECQUER (RIMAS Y LEYENDAS) *
23 - LAO TSE (TAO TE CHING) *
24 - SUN TSU (EL ARTE DE LA GUERRA) *
25 - NICOLAS MAQUIAVELO (EL PRINCIPE) *
26 - ANTONIE DE SAINT-EXUPERY (EL PRINCIPITO) *
27 - NAPOLEON BONAPARTE (MAXIMAS Y PENSAMIENTOS) *
28 - IRVIN D. YALOM (EL DIA QUE NIETZSCHE LLORO) *
29 - JOE DISPENZA (DEJA DE SER TU) *
30 - GARCIA MORENTE (LECCIONES PRELIMINARES DE FILOSOFIA) *
31 - PLATON (EL BANQUETE-CRITON)
32 - ANTIGONA (SOFOCLES)
33 - FIODOR M. DOSTOIEVSKI (EL JUGADOR)
34 - FRANZ KAFKA (AMERICA)
35 - BARUJ ESPINOZA (TRATADO TEOLOGICO POLITICO)
36 - WILLIAM SHAKESPEARE (HAMLET)
37 -JORGE AQUINO (RECURSOS HUMANOS)
38 - MARIA SAENZ QUESADA (1943 EL FIN DE LA ARGENTINA LIBERAR, EL SURGIMIENTO DEL PERONISMO)
39 - SENECA (EPISTOLAS MORALES A LUCILIO - 1)
40 - SENECA (EPISTOLAS MORALES A LUCILIO - 2)
*/