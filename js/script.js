var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyEcb9lwZCbNBfCd'}).base('applJsXPWzYp0DptB');

console.log(base.activeCollaborators);

let nipplelist = document.getElementById('nipple-list');

base('Table 1').select({
   maxRecords: 102,
   view: "All"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.
    records.forEach(function(record) {
      if (nipplelist) {
         // define and create elements
         let el = document.createElement('li');
         let p = document.createElement('p');
         let h1 = document.createElement('h1');
         let img = document.createElement('img');
         let nip = document.createElement('div');
         // Set innerHTML of the elements
         h1.innerHTML = record.get('Name');
         p.innerHTML = record.get('Notes');
         img.src = record.fields.Sprites[2].url;
         nip.classList = 'nip';
         // append them to the list
         pokelist.append(el);
         el.append(img, h1, p, nip);
         el.classList.add('animate');
      }
    });

    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});