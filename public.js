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

});


function init() {
  const NAV = $("nav");
  const ARTICLE = $("article");
  let txt = osszealit(KUTYAK);
  ARTICLE.append(txt);
  let menu = nav();
  NAV.append(menu);;
  mutat(KUTYAK);

}

function osszealit(KUTYAK) {
  let txt = '<div id = "test" class="container-fluid row">';
  for (let index = 0; index < KUTYAK.length; index++) {
    txt += '<div id=test2 class="card col-lg-3 col-md-4 col-sm-6"><div class="card-header"><h2>' +
      KUTYAK[index].nev + '</h2></div><div class="card-body"><p>Kor: ' +
      KUTYAK[index].kor + '</p><p>Fajta: ' +
      KUTYAK[index].fajta + '</div><div class="card-footer"><button type="button" class="mutat'+index+'">Mutat</button><button>Kosárba</button></div></div>';
  }
  txt += "</div>";
  return txt;
}


function nav() {
  let nav = "";
  nav +=
    "<ul><li><a class='active' href = 'public.html'>Kutyák adatainak megtekintése</a></li><li><a href='index.html'>Admin felüet</a></li></ul>";
  return nav;
}

function mutat(KUTYAK) {
  const ASIDE = $("ASIDE");
  for (let index = 0; index < KUTYAK.length; index++) {
    $(".mutat"+index).click(function () {
      let txt = "";
      const NAV = $("nav ul");
      const ARTICLE = $("#test");
      NAV.remove();
      ARTICLE.remove();
      txt += '<div id=test2 class="card" style="height:800px"><button id="gomb" class = "button col-lg-1 col-md-1 col-sm-1"><-</button><div class="card col-lg-11 col-md-11 col-sm-11"><div class="card-header"><h2>' +
      KUTYAK[index].nev + '</h2></div><div class="card-body"><p>Kor: ' +
      KUTYAK[index].kor + '</p><p>Fajta: ' +
      KUTYAK[index].fajta +'</div>';
      ASIDE.append(txt);
      $("#gomb").click(function (){
        const test = $("#test2");
        test.remove();
        init();
      })
    });
  }
}




