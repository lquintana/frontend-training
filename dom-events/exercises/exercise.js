// add the corresponding listeneres in order to
// 1 - if a personality is selected it must be displayed on the right
//     of the personality list
// 2 - the browser must only redirect to the twitter handle if it is clicked
//      on the personality selected (not on the list)
'use strict';

var personalitiesList = document.querySelector('#personalities');
var personalitySelected = document.querySelector('#personalitySelected');

function showPersonality(el) {

    var personality = getPersonality(el);

    personalitySelected.innerHTML = personality;
}

function getPersonality (el) {
    var personality;

    if (el.tagName === 'UL'){
        personality = el.outerHTML;
    }

    if (el.tagName === 'LI') {
        personality = el.parentNode.outerHTML;
    }

    if (el.tagName === 'A') {
        personality = el.parentNode.parentNode.outerHTML;
    }

    return personality;

}

personalitiesList.addEventListener('click', function(event){

    event.preventDefault();

    var element;

    if (event.target != event.currentTarget) {
        element = event.target;
        showPersonality(element);
    }

    event.stopPropagation();

}, false);
