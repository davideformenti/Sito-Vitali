$(document).ready(function() {
    var min = Math.ceil(0);
    var max = Math.floor(4);
    var rndCol = Math.floor(Math.random() * (max - min +1)) + min;
    const coloriBg = ["#f5997e", "#ebcbc8", "#8010c0",  "#155e95", "#a0707d"];
    const coloriTxt = ["#a80030", "#195c64", "#ff01c1", "#abeeff", "#99121b"];
    
    $("body").css("background-color",coloriBg[rndCol]);
    $(".dialog").css("background-color",coloriBg[rndCol]);
    $(".colTxt").css("color",coloriTxt[rndCol]);
    $(".dialog").css("color",coloriTxt[rndCol]);
    $(".dialog").css("border-color",coloriTxt[rndCol]);
    

    });

(function($) {

    $(function(){ // ON DOM READY

        var data = {
            "response": {
                "docs": [{
   "DATA": 10101,
   "TITOLO_PROGETTO": "Titolo di Prova",
   "DESCRIZIONE": "Loremipsumdoloramet",
   "IMMAGINE DI RIFERIMENTO": ""
 },
 {
   "DATA": 20202,
   "TITOLO_PROGETTO": "Titolo Prova 2",
   "DESCRIZIONE": "Loremipsumdolor2",
   "IMMAGINE DI RIFERIMENTO": ""
 },
 {
   "DATA": 30303,
   "TITOLO_PROGETTO": "Titolo di prova 3",
   "DESCRIZIONE": "",
   "IMMAGINE DI RIFERIMENTO": ""
 },{
   "DATA": 30303,
   "TITOLO_PROGETTO": "Titolo di prova 3",
   "DESCRIZIONE": "",
   "IMMAGINE DI RIFERIMENTO": ""
 },{
   "DATA": 30303,
   "TITOLO_PROGETTO": "Titolo di prova 3",
   "DESCRIZIONE": "",
   "IMMAGINE DI RIFERIMENTO": ""
 },{
   "DATA": 30303,
   "TITOLO_PROGETTO": "Titolo di prova 3",
   "DESCRIZIONE": "",
   "IMMAGINE DI RIFERIMENTO": ""
 },{
   "DATA": 30303,
   "TITOLO_PROGETTO": "Titolo di prova 3",
   "DESCRIZIONE": "",
   "IMMAGINE DI RIFERIMENTO": ""
 },{
   "DATA": 30303,
   "TITOLO_PROGETTO": "Titolo di prova 3",
   "DESCRIZIONE": "",
   "IMMAGINE DI RIFERIMENTO": ""
 },{
   "DATA": 30303,
   "TITOLO_PROGETTO": "Titolo di prova 3",
   "DESCRIZIONE": "",
   "IMMAGINE DI RIFERIMENTO": ""
 },{
   "DATA": 30303,
   "TITOLO_PROGETTO": "Titolo di prova 3",
   "DESCRIZIONE": "",
   "IMMAGINE DI RIFERIMENTO": ""
 },{
   "DATA": 30303,
   "TITOLO_PROGETTO": "Titolo di prova 3",
   "DESCRIZIONE": "",
   "IMMAGINE DI RIFERIMENTO": ""
 },{
   "DATA": 30303,
   "TITOLO_PROGETTO": "Titolo di prova 3",
   "DESCRIZIONE": "",
   "IMMAGINE DI RIFERIMENTO": ""
 }
]}
        }, data = data.response.docs,
            target = $('#target'),
            html;

        $.each(data, function (key, val) {
            html = '<div class="image-list">';
            html += '<p class="image-styles" />';
            html += '<a href="progetti.html"  class="project-title">' + val.TITOLO_PROGETTO + '</a>';
            html += '</div>';
            target.append(html);
        });

    }); // end of on DOM READY

}(jQuery));
