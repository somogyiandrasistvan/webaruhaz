import { KUTYAK } from "./adat.js";
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
  keres(KUTYAK);
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
  rendezes(KUTYAK);
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
  return txt;
}

function th() {
  let txt = "";
  txt +=
    '<tr><th>nev<form action="/action_page.php"><div class="form-floating mb-3 mt-3"><select class="form-select" id="sel1" name="sellist"><option>A-Z</option><option>Z-A</option></select><label for="sel1" class="form-label"></label></div><button type="submit" class="btn btn-primary">rendezes</button></form></div></th><th>kor<form action="/action_page.php"><div class="form-floating mb-3 mt-3"><select class="form-select" id="sel1" name="sellist"><option>növekvő</option><option>csökkenő</option></select><label for="sel1" class="form-label"></label></div><button type="submit" class="btn btn-primary">rendezes</button></form></th><th>faj<form action="/action_page.php"><div class="form-floating mb-3 mt-3"><select class="form-select" id="sel1" name="sellist"><option>A-Z</option><option>Z-A</option></select><label for="sel1" class="form-label"></label></div><button type="submit" class="btn btn-primary">rendezes</button></form></th><th></th></tr>';
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
  $(".gomb").click(function () {
    let ELEM =
      "<form><label for='nev'>név</label><div class='mb-3 mt-3'><input type='text' id='nev' class='form-control' id='TN' placeholder='név' name='TN'></div><label for='kor'>kor</label><div class='mb-3 mt-3'><input type='text' id='kor' class='form-control' id='TN' placeholder='kor' name='TN'></div><label for='fajta'>fajta</label><div class='mb-3 mt-3'><input type='text' id='fajta' class='form-control' id='TN' placeholder='fajta' name='TN'></div><button type='button' class='kuld'>Küld</button></form>";

    ASIDE.html(ELEM);
    GOMB.attr("class", "bezar");
    GOMB.html("Bezár");

    bezar(ELEM, GOMB, ASIDE);
    kuld(KUTYAK);
  });
}

function section() {
  let elem = "";
  const SECTION = $("section");
  elem +=
    "<form class='section'><button type='button' class=keres>Keresés</button><div><input type='text' id=name class='form-control' id='TN' placeholder='név' name='TN'></div><div><input type='text' id=age class='form-control' id='TN' placeholder='pl.: >12' name='TN'></div><div><input type='text' id=type class='form-control' id='TN' placeholder='fajta' name='TN'></div><button type='button' class='gomb'>Új elem</button></form>";
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
function bezar(ELEM, GOMB, ASIDE) {
  $(".bezar").click(function () {
    ELEM = "";
    GOMB.attr("class", "gomb");
    GOMB.html("Új elem");
    ASIDE.html(ELEM);
    elemkattintas(ASIDE, KUTYAK);
  });
}

function kuld(KUTYAK) {
  $(".kuld").click(function () {
    var neve = $("#nev").val();
    var kora = $("#kor").val();
    var fajtaja = $("#fajta").val();
    let index = KUTYAK.length;
    KUTYAK[index] = { nev: neve, kor: kora, fajta: fajtaja };
    const ARTICLEBODYTR = $("article table tbody tr");
    ARTICLEBODYTR.remove();
    init();
  });
}

function keres(KUTYAK) {
  let db = 0;
  let adat = [];
  let fajta;
  let neve;
  let kora;
  const KERES = $(".keres");
  $(KERES).click(function () {
    KERES.attr("class", "vissza");
    KERES.html("Vissza");
    neve = $("#name").val();
    kora = $("#age").val();
    fajta = $("#type").val();
    if (neve.length >= 1) {
      for (let index = 0; index < KUTYAK.length; index++) {
        let kutya = KUTYAK[index].nev.includes(neve);
        if (kutya == true) {
          adat[db] = KUTYAK[index];
          db++;
        }
      }
    }
    if (kora.length >= 1) {
      if (kora[0] == ">") {
        let koraSzoveg = kora.toString();
        koraSzoveg = koraSzoveg.slice(1);
        let szam = parseInt(koraSzoveg);
        for (let index = 0; index < KUTYAK.length; index++) {
          if (KUTYAK[index].kor < szam) {
            adat[db] = KUTYAK[index];
            db++;
          }
        }
      } else if (kora[0] == "<") {
        let koraSzoveg = kora.toString();
        koraSzoveg = koraSzoveg.slice(1);
        let szam = parseInt(koraSzoveg);
        for (let index = 0; index < KUTYAK.length; index++) {
          if (KUTYAK[index].kor > szam) {
            adat[db] = KUTYAK[index];
            db++;
          }
        }
      } else {
        for (let index = 0; index < KUTYAK.length; index++) {
          if (KUTYAK[index].kor == kora) {
            adat[db] = KUTYAK[index];
            db++;
          }
        }
      }
    }
    if (fajta.length >= 1) {
      for (let index = 0; index < KUTYAK.length; index++) {
        let kutya = KUTYAK[index].fajta.includes(fajta);
        if (kutya == true) {
          adat[db] = KUTYAK[index];
          db++;
        }
      }
    }

    let txt = osszealit(adat);
    const ARTICLEBODYTR = $("article table tbody tr");
    ARTICLEBODYTR.remove();
    const ARTICLEBODY = $("article table tbody");
    ARTICLEBODY.append(txt);
    vissza(KUTYAK);
  });
}

function vissza(KUTYAK) {
  const VISSZA = $(".vissza");
  $(VISSZA).click(function () {
    VISSZA.attr("class", "keres");
    VISSZA.html("Keresés");
    const ARTICLEBODYTR = $("article table tbody tr");
    ARTICLEBODYTR.remove();
    init();
    keres(KUTYAK);
  });
}

function rendezes(KUTYAK){
  
}