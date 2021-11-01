var html;
var card;
var companies; 
var dataJSON;

const cardTmpl = document.getElementById('card_template').innerHTML;
const urlData = "https://my-json-server.typicode.com/mariellsanchez/Training/db";

function filterItemsByName(arr, query) {
    return arr.filter(function(obj) {
    let objName = obj.name;
    return objName.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
}

function getInput(nameID){
    return document.getElementById(nameID).value;
}

function displayMustache(data){
    html = Mustache.to_html(cardTmpl, data);
    card = document.getElementById("grid");
    card.innerHTML = html;
}

function makeRequest() {
    const fetchPromise = fetch(urlData);
    fetchPromise.then(response => {
        return response.json();
    }).then(data => {
        companies = []; 
        companies = filterItemsByName(data.companies, getInput("searchBar--input"));
        dataJSON = {};
        dataJSON['companies'] = companies;
        
        displayMustache(dataJSON);
    });
}

