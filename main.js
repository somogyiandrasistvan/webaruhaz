import { KUTYAK } from "./adat.js";

$(function () {
  const ARTICLE = $("article");
  ARTICLE.html("<table></table>");
  const ARTICLEELEM = $("article table");
  ARTICLEELEM.html("<thead></thead><tbody></tbody>");
  const ARTICLEHEAD = $("article table thead");
  const ARTICLEBODY = $("article table tbody");
  const FOOTER = $("footer");
  const HEADER = $("header");
  const ASIDE = $("aside");
  const NAV = $("nav");
  FOOTER.append("<p>Somogyi András</p>");
  HEADER.append("<h1>adatok listázása</h1>");
  let sz = 0;
  let head = th();
  ARTICLEHEAD.append(head);
  let szamlalo = osszealit(KUTYAK, sz);
  let menu = nav();
  NAV.append(menu);

  section();
  let adat = elemkattintas(ASIDE, szamlalo);
});

function osszealit(KUTYAK, sz) {
  let txt = "";
  for (let index = 0; index < KUTYAK.length; index++) {
    txt +=
      "<tr><td>" +
      KUTYAK[index].nev +
      "</td><td>" +
      KUTYAK[index].kor +
      "</td><td>" +
      KUTYAK[index].fajta +
      "</td><td>" +
      "<button type='button' class='"+
      sz +
      "'>X</button>" +
      "</tr>";
      sz++
      console.log(sz);
  }
  const ARTICLEBODY = $("article table tbody");
  ARTICLEBODY.append(txt);

  return sz;
}

function th() {
  let txt = "";
  txt += "<tr><th>nev</th><th>kor</th><th>faj</th><th></th></tr>";
  return txt;
}

function nav() {
  let nav = "";
  nav +=
    "<ul><li><a href = 'public.html'>Kutyák adatainak megtekintése</a></li><li><a class='active' href='index.html'>Admin felüet</a></li></ul>";
  return nav;
}

function elemkattintas(ASIDE, sz) {
  const GOMB = $(".gomb");
  let ELEM = "";
  $(".gomb").click(function () {
    ELEM +=
      "<form><label for='nev'>név</label><div class='mb-3 mt-3'><input type='text' id='nev' class='form-control' id='TN' placeholder='név' name='TN'></div><label for='kor'>kor</label><div class='mb-3 mt-3'><input type='text' id='kor' class='form-control' id='TN' placeholder='kor' name='TN'></div><label for='fajta'>fajta</label><div class='mb-3 mt-3'><input type='text' id='fajta' class='form-control' id='TN' placeholder='fajta' name='TN'></div><button type='button' class='kuld'>Küld</button></form>";
    ASIDE.append(ELEM);
    GOMB.attr("class", "bezar");
    GOMB.html("Bezár");

    $(".bezar").click(function () {
      ELEM = "";
      GOMB.attr("class", "gomb");
      GOMB.html("Új elem");
      ASIDE.html(ELEM);
    });
    $(".kuld").click(function () {
      var neve = $("#nev").val();
      var kora = $("#kor").val();
      var fajtaja = $("#fajta").val();
      let adat = [{ nev: neve, kor: kora, fajta: fajtaja }];
      osszealit(adat, sz);
    });
  });
}

function section() {
  let elem = "";
  const SECTION = $("section");
  elem +=
    "<form class='section'><div><input type='text' class='form-control' id='TN' placeholder='név' name='TN'></div><div><input type='text' class='form-control' id='TN' placeholder='pl.: >12' name='TN'></div><div><input type='text' class='form-control' id='TN' placeholder='fajta' name='TN'></div><button type='button' class='gomb'>Új elem</button></form>";
  SECTION.append(elem);
}
/*
function xkattintas(txt) {
  for (let index = 0; index < txt.length; index++) {
    const x = $(".x" + index);
    $(".x" + index).click(function () {
      console.log("x");
    });
  }
}
*/
