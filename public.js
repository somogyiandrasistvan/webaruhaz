import { KUTYAK } from "./adat.js";
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
  NAV.append(menu);
  mutat(KUTYAK);
  kosar();
}

function osszealit(KUTYAK) {
  let txt = '<div id = "test" class="container-fluid row">';
  for (let index = 0; index < KUTYAK.length; index++) {
    txt +=
      '<div id=test2 class="card col-lg-3 col-md-4 col-sm-6"><div class="card-header"><h2>' +
      KUTYAK[index].nev +
      '</h2></div><div class="card-body"><p>Kor: ' +
      KUTYAK[index].kor +
      "</p><p>Fajta: " +
      KUTYAK[index].fajta +
      '</div><div class="card-footer"><button type="button" class="mutat' +
      index +
      '">Mutat</button><button id="kosarba' +
      index +
      '">Kosárba</button></div></div><div id="myModal" class="modal" width="800px"><div class="modal-content"><div class="modal-header"><span class="close">&times;</span><h2>Kosár</h2></div><div class="modal-body"><p>Some text in the Modal Body</p><p>Some other text...</p></div><div class="modal-footer"><h3>Modal Footer</h3></div></div></div>';
  }
  txt += "</div>";
  return txt;
}

function nav() {
  let nav = "";
  nav +=
    "<div id=nav><ul><li><a class='active' href = 'public.html'>Kutyák adatainak megtekintése</a></li><li><a href='index.html'>Admin felüet</a></li><button id='kosar'>Kosár</button></ul></div>";
  return nav;
}

function mutat(KUTYAK) {
  const ASIDE = $("ASIDE");
  for (let index = 0; index < KUTYAK.length; index++) {
    $(".mutat" + index).click(function () {
      let txt = "";
      const NAV = $("nav ul");
      const ARTICLE = $("#test");
      NAV.remove();
      ARTICLE.remove();
      txt +=
        '<div id=fo><button id="gomb3" class = "button col-lg-100 col-md-100 col-sm-100">X</button><div id=test3 class="card" style="height:800px"><button id="bal" class = "button col-lg-100 col-md-100 col-sm-100"><-</button><div class="card col-lg-9 col-md-9 col-sm-9"><div class="card-header"><h2>' +
        KUTYAK[index].nev +
        '</h2></div><div class="card-body"><p>Kor: ' +
        KUTYAK[index].kor +
        "</p><p>Fajta: " +
        KUTYAK[index].fajta +
        '</div></div><button id="jobb" class = "button col-lg-100 col-md-100 col-sm-100">-></button></div>';
      ASIDE.append(txt);
      xgomb();
      jobbgomb(txt, ASIDE, index);
      balgomb(txt, ASIDE, index);
    });
  }
}
function xgomb() {
  $("#gomb3").click(function () {
    const test = $("#fo");
    test.remove();
    init();
  });
}
function jobbgomb(txt, ASIDE, index) {
  $("#jobb").click(function () {
    index++;
    if (index == 4) {
      index = 0;
    }
    console.log(index);
    const test2 = $("#fo");
    test2.remove();
    txt = "";
    txt +=
      '<div id=fo><button id="gomb3" class = "button col-lg-100 col-md-100 col-sm-100">X</button><div id=test3 class="card" style="height:800px"><button id="bal" class = "button col-lg-100 col-md-100 col-sm-100"><-</button><div class="card col-lg-9 col-md-9 col-sm-9"><div class="card-header"><h2>' +
      KUTYAK[index].nev +
      '</h2></div><div class="card-body"><p>Kor: ' +
      KUTYAK[index].kor +
      "</p><p>Fajta: " +
      KUTYAK[index].fajta +
      '</div></div><button id="jobb" class = "button col-lg-100 col-md-100 col-sm-100">-></button>';
    ASIDE.append(txt);
    jobbgomb(txt, ASIDE, index);
    balgomb(txt, ASIDE, index);
    xgomb();
  });
}

function balgomb(txt, ASIDE, index) {
  $("#bal").click(function () {
    index--;
    if (index == -1) {
      index = 3;
    }
    console.log(index);
    const test2 = $("#fo");
    test2.remove();
    txt = "";
    txt +=
      '<div id=fo><button id="gomb3" class = "button col-lg-100 col-md-100 col-sm-100">X</button><div id=test3 class="card" style="height:800px"><button id="bal" class = "button col-lg-100 col-md-100 col-sm-100"><-</button><div class="card col-lg-9 col-md-9 col-sm-9"><div class="card-header"><h2>' +
      KUTYAK[index].nev +
      '</h2></div><div class="card-body"><p>Kor: ' +
      KUTYAK[index].kor +
      "</p><p>Fajta: " +
      KUTYAK[index].fajta +
      '</div></div><button id="jobb" class = "button col-lg-100 col-md-100 col-sm-100">-></button>';
    ASIDE.append(txt);
    balgomb(txt, ASIDE, index);
    jobbgomb(txt, ASIDE, index);
    xgomb();
  });
}

function kosar() {
  const modal = document.getElementById("myModal");
  const span = $(".close")[0];
  $("#kosar").click(function () {
    modal.style.display = "block";
  });

  span.onclick = function () {
    modal.style.display = "none";
  };
}
