var eingabe = { Eingabetext: "DAS VERSCHLUESSELN MIT DEM KREBS IST NICHT SEHR SICHER" };
var krebstext = '';
var settings;

function setup() {
  createCanvas(700,300);
  settings = QuickSettings.create(20, 20, "Teilweises Krebsverfahren");
  settings.setWidth(width-30);
  settings.bindText("Eingabetext", "DAS VERSCHLUESSELN MIT DEM KREBS IST NICHT SEHR SICHER", eingabe);
  settings.addTextArea("Krebstext", krebstext);
  settings.addButton("Text verschluesseln", function() { textVerschluesseln(); });	
}

function textVerschluesseln() {
    krebstext = '';
    var anzahlBuchstaben = 0;
    
    for (var i = 0; i < eingabe.Eingabetext.length; i++) {
      anzahlBuchstaben++;
      //Ein Wort vor einem Leerzeichen verschluesseln
      if(eingabe.Eingabetext[i] === ' ') {
        for (var j = 1; j < anzahlBuchstaben; j++) {
          var krebsindex = i - j;
          krebstext = krebstext + eingabe.Eingabetext[krebsindex];
        }
        anzahlBuchstaben = 0;
        krebstext = krebstext + ' ';
      }
      //Das letzte Wort im Satz umdrehen (es gibt kein Leerzeichen mehr)
      if(i === eingabe.Eingabetext.length-1) {
        for (var j = 1; j < anzahlBuchstaben+1; j++) {
          var krebsindex = i+1 - j;
          krebstext = krebstext + eingabe.Eingabetext[krebsindex];
        }
        anzahlBuchstaben = 0;
      }
    }
  settings.setValue("Krebstext", krebstext);
}