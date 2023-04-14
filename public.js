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
    ARTICLE.html("<table></table>");
    const ARTICLEELEM = $("article table");
    ARTICLEELEM.html("<thead></thead><tbody></tbody>");
    osszealit(KUTYAK);
  }

  function osszealit(KUTYAK){
    
  }

  
  function nav() {
    let nav = "";
    nav +=
      "<ul><li><a class='active' href = 'public.html'>Kutyák adatainak megtekintése</a></li><li><a href='index.html'>Admin felüet</a></li></ul>";
    return nav;
  }
  


  
  