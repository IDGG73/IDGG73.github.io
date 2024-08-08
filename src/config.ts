import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Iván Darío Gaytán Guerra (IDGG73)",
  logo: "/me.png",
  email: "tlozmm64@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Inicio",
    url: "/",
  },
  {
    title: "Acerca de Mí",
    url: "/about",
  },
  {
    title: "Proyectos",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "Instagram",
    url: "https://www.instagram.com/idgg73/",
    icon: "mdi:instagram",
    external: true,
  },
  {
    title: "X (Twitter)",
    url: "https://x.com/idgg73",
    icon: "mdi:twitter",
    external: true,
  },
  {
    title: "YouTube",
    url: "https://www.youtube.com/channel/UC7H1LEIact3AhZT625M9x4g",
    icon: "mdi:youtube",
    external: true,
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "IDGG73",
    description:
      "Desarrollador de videojuegos que aprende cada día.",
    image: identity.logo,
  },
  role: "Desarrollador de Videojuegos",
  description:
    "Soy un desarrollador de videojuegos que no deja de aprender cosas nuevas cada día. Actualmente utilizo el motor de Unity para trabajar en Chihuas Games y por mi cuenta.",
  socialLinks: socialLinks,
  links: [
    {
      title: "Mi Setup",
      url: "/blog/mi-setup"
    },
    {
      title: "Juegos Que He Terminado",
      url: "https://howlongtobeat.com/user/IDGG73/games/completed/1"
    },
    {
      title: "Galería",
      url: "/blog/galeria"
    },
    {
      title: "Chihuas Games",
      url: "https://chihuasgames.com"
    }
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "Acerca de Mí | IDGG73",
    description:
      "La historia de mi vida.",
    image: identity.logo,
  },
  subtitle: "La historia de mi vida.",
  about: {
    description: `
Mi nombre es Iván Darío Gaytán Guerra y me dedico al desarrollo de videojuegos.
<br/><br/>
Nací el 29 de agosto de 2005 y he sentido una fuerte pasión por las computadoras desde que tengo memoria. Mi vida de desarrollador comenzó gracias a mi hermano mayor —Omar— quien me enseñó a programar una calculadora en C++ con el IDE [<u>Code::Blocks</u>](https://www.codeblocks.org/) cuando yo tenía ≈9 años.
<br><br/>
Mis primeros contactos con los videojuegos (O al menos lo que puedo recordar) fueron en una computadora de escritorio Compaq del 2000-2001 que se aferraba a la vida y apenas funcionaba con Windows XP. Más adelante, cuando se comenzó a degradar más, mi hermano mayor le instaló [<u>Puppy Linux</u>](https://puppylinux-woof-ce.github.io/).
Incluso recuerdo que al final de su vida le pegamos un cargador de teléfono al disipador, y teníamos que conectarlo directo a la toma de corriente para que girase. Prácticamente estaba conectada a un soporte vital JAJAJAJA.
<br><br/>
Aunque era una computadora muy limitada (incluso para la época) yo me divertía muchísimo en ella. Jugaba algunos juegos nativos de Windows, pero la mayoría era en emuladores (Lo siento, Nintendo).
<br></br>
Los juegos que más recuerdo, y que más impactaron en mí, fueron:
<br></br>
- • Star Fox 64
- • Super Mario 64
- • The Legend of Zelda: Majora's Mask
- • The Legend of Zelda: The Minish Cap
- • Super Mario World
- • Metroid Fusion
- • Super Bomberman 2
- • The Sims (2000)
- • Luxor 1, 2 y 3 (MumboJumbo)
- • Syobon Action
- • GTA Vice City
- • GTA San Andreas
<br><br/>
Hubieron muchas más computadoras con las que tuve contacto; laptops, para ser exactos. Lamentablemente no recuerdo bien en qué año se dió cada una ni sus modelos.
<br><br/>
Hubo una laptop *Acer* que era sorprendentemente poderosa (o al menos así la recuerdo yo) donde jugué demasiado ***Luigi's Mansion***, ***Crazy Taxi*** y ***Chuzzle***.
<br><br/>
También una mini-laptop *Dell* que mi hermano mayor tuvo para estudiar la universidad, donde comencé a modificar los archivos de juegos y a instalar mods; también donde fui presentado ante el maravilloso mundo de Halo Combat Evolved en línea.
Los servidores ya no estaban activos oficialmente, tenías que instalar un parche para conectarte a servidores mantenidos por la comunidad. Y a pesar de la inmensa cantidad de hackers con Auto-Aim y lanzacohetes infinitos, pasé grandes momentos en Blood Gulch.
Ah, sí, también comencé a utilizar *Blender* por primera vez en esa laptop.
<br><br/>
Aproximadamente en el **2013-2014** mi hermano mayor compró una computadora de escritorio para reemplazar a la *Compaq*, y aunque seguíamos atrasados con respecto al estándar de la época, ¡Fue un gran salto!
La nueva computadora contaba con una tarjeta gráfica de la serie *Nvidia Quadro*. Esta computadora marcó un momento muy importante en mi vida y la de mis hermanos.
<br><br/>
En esa computadora, en el año 2016, mi hermana Elena y mi hermano Omar utilizaron el motor de Unity para crear *Dodging in The Deep Space*, un juego para Android publicado bajo el nombre de ***Chihuas Games***.
<br><br/>
Desde ese momento supe que yo también quería utilizar Unity y aprender a crear videjuegos.
<br><br/>
En la navidad del 2016 recibí mi primera laptop personal, ¡Una computadora para mí solo! la ***Toshiba Satellite C855D-SP5162KM*** con Windows 8. Aprendí a utilizar Unity y a programar en C# en esa laptop <3
<br><br/>
Claro que me fascinaba esa laptop Toshiba, pero no duró mucho. El plástico era algo frágil y se rompió con el propio uso de las vizagras, dejando expuestos los cables del conector del cargador; poco después los cables se rompieron y traté de soldarlos, pero se volvieron a romper al cabo de 1 mes.
Esa laptop ahora se encuentra guardada en una caja dentro de mi clóset (Q.E.P.D).
<br><br/>
Después de esa tragedia mi hermano *Armando* me regaló una laptop Dell muchísimo más potente que la Toshiba —también en navidad— donde jugué ***Life is Strange***, ***A Hat in Time***, ***Crysis*** y ***Half-Life***.
Pasé de 2019 a 2021 con esa laptop, hasta que mi mamá me regaló mi primera computadora de escritorio propia, ¡La cuál estoy usando para escribir esto justo ahora!
Aquella laptop Dell se la regalé a mi hermana menor, con quien vivió sus últimos momentos antes de descomponerse en el 2021. Después de que se descompusiera finalmente entendí por qué 2 de mis mouse USB dejaron de funcionar; resultó que la laptop tenía un corto circuito.
<br><br/>
Pues bien, esa es toda mi historia con las computadoras. Claro que hubieron consolas de por medio (como la Wii, DS, 3DS, PS3, PS4, Xbox 360 y Xbox One) pero esas no se comparan con las computadoras <3.
Esta computadora que tengo actualmente la armó mi hermano mayor; con un Ryzen 3 3200G, 8GB de RAM, 240GB SSD y una Tarjeta Madre Gigabyte A320M-S2H V2.
A día de hoy sigue siendo prácticamente la misma computadora, únicamente la aumenté a 16GB de RAM, instalé un SSD extra de 1TB y añadí una GTX 1650.

[<u>Da clic aquí para ver mi setup completo</u>](/blog/mi-setup).
`, // Markdown is supported
    image_l: {
      url: "/gallery/cine.jpg",
      alt: "Yo con mis hermanos en el cine.",
    },
    image_r: {
      url: "/gallery/picaro.jpg",
      alt: "Yo racargado en el marco de una puerta con mirada cómicamente pícara.",
    },
  },
  work: {
    description: `Esta es una línea de tiempo de eventos importantes para mí.`, // Markdown is supported
    items: [
      {
        title: "Lanzamiento de Bloomyth",
        company: {
          name: "Chihuas Games",
          image: "/games/bloomyth.png",
          url: "https://chihuasgames.com/bloomyth",
        },
        date: "20 de julio, 2023",
      },
      {
        title: "Lanzamiento de Strong Moon",
        company: {
          name: "Chihuas Games",
          image: "/games/strong-moon.png",
          url: "https://chihuasgames.com/strong-moon",
        },
        date: "7 de julio, 2022",
      },
      {
        title: "Mi primera computadora de escritorio",
        company: {
          name: "Custom",
          image: "/me.png",
          url: "",
        },
        date: "2020",
      },
      {
        title: "Me uní formalmente a Chihuas Games",
        company: {
          name: "Chihuas Games",
          image: "/me.png",
          url: "",
        },
        date: "2019",
      },
      {
        title: "Lanzamiento de Cesticamea",
        company: {
          name: "IDGG73",
          image: "/games/cesticamea.png",
          url: "",
        },
        date: "8 de diciembre, 2021",
      },
      {
        title: "Lanzamiento de Butter It",
        company: {
          name: "IDGG73",
          image: "/games/butter-it.png",
          url: "",
        },
        date: "12 de septiembre, 2020",
      },
      {
        title: "Lanzamiento de Tri-P",
        company: {
          name: "Chihuas Games",
          image: "/games/tri-p.png",
          url: "",
        },
        date: "2017",
      },
      {
        title: "Lanzamiento de Dodging in The Deep Space",
        company: {
          name: "Chihuas Games (No participé)",
          image: "/games/dodging.png",
          url: "",
        },
        date: "2016",
      },
      {
        title: "Mi primera laptop",
        company: {
          name: "Toshiba Satellite C855D-SP5162KM",
          image: "/me.png",
          url: "",
        },
        date: "2016",
      },
      {
        title: "Primer contacto con la programación",
        company: {
          name: "Calculadora en C++",
          image: "/me.png",
          url: "",
        },
        date: "¿2013-2014?",
      },
      {
        title: "Nací",
        company: {
          name: "Chihuahua, México",
          image: "/me.png",
          url: "",
        },
        date: "29 de agosto, 2005",
      },
    ],
  },
  connect: {
    description: `Puedes seguir mis trabajos más de cerca mediante estas redes. ¡Estoy más activo en Instagram!`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Proyectos | IDGG73",
    description: "Echa un vistazo a mis trabajos.",
    image: identity.logo,
  },
  subtitle: "Echa un vistazo a mis trabajos.",
  projects: [
    {
      title: "Pipol!",
      description: "Un juego de simulación de vida. Próximo lanzamiento personal.",
      image: "/games/landscape/pipol.jpg",
      year: "En Desarrollo",
      url: "",
    },
    {
      title: "Afterlife Dreams",
      description: "Próximo lanzamiento de Chihuas Games.",
      image: "/games/landscape/afterlife-dreams.jpg",
      year: "En Desarrollo",
      url: "https://x.com/ChihuasGames/status/1813621788662014315",
    },
    {
      title: "Bloomyth",
      description: "Un padre, un hijo y su fé en un mito.",
      image: "/games/landscape/bloomyth.jpg",
      year: "2023",
      url: "https://chihuasgames.com/bloomyth",
    },
    {
      title: "Strong Moon",
      description: "Strong Moon es un videojuego de plataformas y aventuras muy difícil inspirado en los dibujos animados de los años 90.",
      image: "/games/landscape/strong-moon.jpg",
      year: "2022",
      url: "https://chihuasgames.com/strong-moon",
    },
    {
      title: "Cesticamea",
      description: "Un juego de trivia personalizable hecho por todos y para todos.",
      image: "/games/landscape/cesticamea.jpg",
      year: "2021",
      url: "https://idgg73.github.io/Cesticamea/es/",
    },
    {
      title: "Butter It",
      description: "¡Un juego donde mueves tu teléfono como si fuese una sartén y derrites mantequilla!",
      image: "/games/landscape/butter-it.jpg",
      year: "2020",
      url: "https://idgg73.itch.io/butter-it",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | IDGG73",
    description: "La historia de mi vida.",
    image: identity.logo,
  },
  subtitle: "La historia de mi vida.",
};
