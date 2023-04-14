const KUTYAK = [
    { nev: "bodri", kor: 10, fajta: "puli" },
    { nev: "vuksi", kor: 11, fajta: "kuvasz" },
    { nev: "blacki", kor: 3, fajta: "svájcijuhász" },
    { nev: "pergi", kor: 3, fajta: "svájcijuhász" },
  ];
  
  $(function () {
    const FOOTER = $("footer");
    const HEADER = $("header");
    const NAV = $("nav");
    FOOTER.append("<p>Somogyi András</p>");
    HEADER.append("<h1>adatok listázása</h1>");
  
    init();
  
    let menu = nav();
    NAV.append(menu);;
  });
  function init() {
    const ARTICLE = $("article");
    const teszt = $("#test");
    console.log(teszt);
    let txt = osszealit(KUTYAK);
    teszt.append(txt);
  }

  function osszealit(KUTYAK){
    let txt = '';
    for (let index = 0; index < KUTYAK.length; index++) {
      txt += '<div class="card col-lg-3 col-md-4 col-sm-6"><div class="card-header"><h2>'+
      KUTYAK[index].nev+'</h2></div><div class="card-body"><p>Kor: '+
      KUTYAK[index].kor+'</p><p>Fajta: '+
      KUTYAK[index].fajta+'</div><div class="card-footer"><button>Mutat</button><button>Kosárba</button></div></div>';
    }
    return txt;
  }

  
  function nav() {
    let nav = "";
    nav +=
      "<ul><li><a class='active' href = 'public.html'>Kutyák adatainak megtekintése</a></li><li><a href='index.html'>Admin felüet</a></li></ul>";
    return nav;
  }
  


  
  