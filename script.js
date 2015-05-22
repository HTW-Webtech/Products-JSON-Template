$(function() {
   // Global zugängliches Variable
   window.app = {};

   app.url = 'http://localhost/Products-JSON/api/index.php';
   // Template der App
   app.template = $('.products-template').val();
   // Objekt zur Kontrolle des Formulars
   app.form = new Form('.products-form');
   // Objekt zur Kontrolle der Produktliste
   app.container = new Productlist('.products-list');
});


/**
 * Kümmert sich um die Kontrolle des Formulars, also:
 *    - Anlegen neuer Produkte
 *    - Aktualisieren vorhandener Produkte
 * @param {Element} container HTML-Element der Produktliste
 */
var Form = function(container) {

   // TODO

};


/**
 * Kümmert sich um die Verwaltung aller Produkte, also:
 *    - das Anlegen neuer Produkte
 *    - das Entfernen der Daten gelöschter Produkte
 *    - die Kommunikation mit dem Server
 * @param {Element} container HTML-Element der Produktliste
 */
var Productlist = function(container) {

   // TODO

};


/**
 * Repräsentiert ein einzelnes Produkt und kümmert sich um dessen:
 *    - Darstellung
 *    - Aktualisierung
 *    - Entfernung
 * @param {Object}  data      Daten-Objekt mit den Daten des Produkts
 * @param {Element} container HTML-Element der Produktliste
 */
var Product = function(data, container, isTransient) {

  // TODO

};