const KUTYAK = [
  { nev: "bodri", kor: 10, fajta: "puli" },
  { nev: "vuksi", kor: 11, fajta: "kuvasz" },
  { nev: "blacki", kor: 3, fajta: "svájcijuhász" },
  { nev: "pergi", kor: 3, fajta: "svájcijuhász" },
];

$(function () {
  const FOOTER = $("footer");
  const HEADER = $("header");
  const ASIDE = $("aside");
  const NAV = $("nav");
  FOOTER.append("<p>Somogyi András</p>");
  HEADER.append("<h1>adatok listázása</h1>");

  init();

  let menu = nav();
  NAV.append(menu);
  section();
  elemkattintas(ASIDE, KUTYAK);
});
function init() {
  const ujosszealit = osszealit(KUTYAK);
  const ARTICLE = $("article");

  ARTICLE.html("<table></table>");
  const ARTICLEELEM = $("article table");
  ARTICLEELEM.html("<thead></thead><tbody></tbody>");
  const ARTICLEHEAD = $("article table thead");
  const ARTICLEBODY = $("article table tbody");
  let head = th();
  ARTICLEHEAD.append(head);
  ARTICLEBODY.append(ujosszealit);
  xkattintas(KUTYAK);
}
function osszealit(KUTYAK) {
  let txt = "";
  for (let index = 0; index < KUTYAK.length; index++) {
    txt +=
      "<tr><td>" +
      KUTYAK[index].nev +
      "</td><td>" +
      KUTYAK[index].kor +
      "</td><td>" +
      KUTYAK[index].fajta +
      "</td><td><button type='button' class='x" +
      index +
      "'>X</button></tr>";
  }
  console.log(txt);

  return txt;
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

function elemkattintas(ASIDE, KUTYAK) {
  const GOMB = $("section .gomb");
  console.log(GOMB);

  $(".gomb").click(function () {
    let ELEM =
      "<form><label for='nev'>név</label><div class='mb-3 mt-3'><input type='text' id='nev' class='form-control' id='TN' placeholder='név' name='TN'></div><label for='kor'>kor</label><div class='mb-3 mt-3'><input type='text' id='kor' class='form-control' id='TN' placeholder='kor' name='TN'></div><label for='fajta'>fajta</label><div class='mb-3 mt-3'><input type='text' id='fajta' class='form-control' id='TN' placeholder='fajta' name='TN'></div><button type='button' class='kuld'>Küld</button></form>";

    ASIDE.html(ELEM);
    GOMB.attr("class", "bezar");
    GOMB.html("Bezár");
  });

  
}

function section() {
  let elem = "";
  const SECTION = $("section");
  elem +=
    "<form class='section'><div><input type='text' class='form-control' id='TN' placeholder='név' name='TN'></div><div><input type='text' class='form-control' id='TN' placeholder='pl.: >12' name='TN'></div><div><input type='text' class='form-control' id='TN' placeholder='fajta' name='TN'></div><button type='button' class='gomb'>Új elem</button></form>";
  SECTION.append(elem);
}

function xkattintas(KUTYAK) {
  for (let index = 0; index < KUTYAK.length; index++) {
    $(".x" + index).click(function () {
      KUTYAK.splice(index, 1);
      const ARTICLEBODYTR = $("article table tbody tr");
      ARTICLEBODYTR.remove();
      init();
    });
  }
}

/*
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
  let index = KUTYAK.length;
  KUTYAK[index] = { nev: neve, kor: kora, fajta: fajtaja };
  console.log(KUTYAK);
  const ARTICLEBODYTR = $("article table tbody tr");
  ARTICLEBODYTR.remove();
  osszealit(KUTYAK);
});
*/
