console.log('Самооценкa своей работы:\n\n1.Вёрстка валидная +10\n\n2.Вёрстка семантическая +20\n\n3.Вёрстка соответствует макету +48\n\n4.Требования к css + 12\n\n5.Интерактивность, реализуемая через css +20');

// blur cards
const gardenBtn = document.querySelector('.services_btn--garden');
const lawnBtn = document.querySelector('.services_btn--lawn');
const plantingBtn = document.querySelector('.services_btn--planting');
const servicesBtns = document.querySelectorAll('.services_btn');
const servicesItems = document.querySelectorAll('.services_item')

let itemRemove = (e) => e.classList.remove('services_item--disabled');
// let itemBtnRemove = (e) => e.classList.remove('services_item--disabled');
function itemBtnRemove() {
    for(servicesBtn of servicesBtns) {
        servicesBtn.classList.remove('services_btn--active');
    }
};

gardenBtn.addEventListener('click', function() {
    itemBtnRemove()
    gardenBtn.classList.add('services_btn--active');
    for(servicesItem of servicesItems) {
        itemRemove(servicesItem)
        if(servicesItem.classList.contains('services_item--gardens')){}
        else {
            servicesItem.classList.add('services_item--disabled')
        }
    };
});
lawnBtn.addEventListener('click', function() {
    itemBtnRemove()
    lawnBtn.classList.add('services_btn--active');
    for(servicesItem of servicesItems) {
        itemRemove(servicesItem)
        if(servicesItem.classList.contains('services_item--lawn')){}
        else {
            servicesItem.classList.add('services_item--disabled')
        }
    };
});
plantingBtn.addEventListener('click', function() {
    itemBtnRemove()
    plantingBtn.classList.add('services_btn--active');
    for(servicesItem of servicesItems) {
        itemRemove(servicesItem)
        if(servicesItem.classList.contains('services_item--planting')){}
        else {
            servicesItem.classList.add('services_item--disabled')
        }
    };
});
