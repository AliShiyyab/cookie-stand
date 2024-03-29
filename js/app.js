'use strict'

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var objArray = [];
var parent = document.getElementById('Salmoon_Cookies');
var h = document.createElement('table');
parent.appendChild(h);
var totalOfTotals = 0;

function cookies(max, min, AVG, location) {
    this.counter = 0;
    this.customerNum = 0;
    this.max = max;
    this.min = min;
    this.AVG = AVG;
    this.location = location;
    this.numberOfCockies = [];
    objArray.push(this);
}

header();
cookies.prototype.randomCustomer = function () {
    for (var i = 0; i < hours.length; i++) {
        var result = [];
        this.customerNum = Math.floor(Math.random() * (this.max - this.min) + this.min);
        this.customerNum = Math.floor(this.customerNum * this.AVG);
        this.counter = this.counter + this.customerNum;
        this.numberOfCockies[i] = this.customerNum;
    }
}

cookies.prototype.Tables = function () {
    var tr = document.createElement('tr');
    h.appendChild(tr);
    var th = document.createElement('th');
    tr.appendChild(th);
    for(var i=0;i<objArray.length;i++){
        totalOfTotals+=this.counter;
        th.textContent = this.location;
        for (var i = 0; i < hours.length; i++) {
           var cell = document.createElement('td');
           tr.appendChild(cell);
           cell.textContent = this.numberOfCockies[i];
        }
    }
    var locationTotal = document.createElement('td');
    tr.appendChild(locationTotal);
    locationTotal.textContent = this.counter;
}
var obj1 = new cookies(65, 23, 6.3, 'seattle', []);
var obj2 = new cookies(24, 3, 1.2, 'Tokyo', []);
var obj3 = new cookies(38, 11, 3.7, 'Dubai', []);
var obj4 = new cookies(38, 20, 2.3, 'Paris', []);
var obj5 = new cookies(16, 2, 4.6, 'Lima', []);
for (var i = 0; i < objArray.length; i++) {
    objArray[i].randomCustomer();
    objArray[i].Tables();
}

footer();
function header() {
    var tr = document.createElement('tr');
    h.appendChild(tr);
    var cell1 = document.createElement('td');
    tr.appendChild(cell1);
    cell1.textContent = " ";
    for (var j = 0; j < hours.length; j++) {
        var cell2 = document.createElement('td');
        tr.appendChild(cell2);
        cell2.textContent = hours[j];
    }
    var cell3 = document.createElement('td');
    tr.appendChild(cell3);
    cell3.textContent = 'Daily Location Total';
}

function footer() {
    var tr1 = document.createElement('tfoot');
    h.appendChild(tr1);
    var cell4 = document.createElement('td');
    tr1.appendChild(cell4);
    cell4.textContent = "Total";
    var TotalSum = 0;
    for (var j = 0; j < hours.length; j++) {
        var sumPerHour = 0;
        var cell5 = document.createElement('td');
        tr1.appendChild(cell5);
        for (var i = 0; i < objArray.length; i++) {
            sumPerHour = sumPerHour + objArray[i].numberOfCockies[j];
        }
        TotalSum += sumPerHour;
        cell5.textContent = sumPerHour;
    }
    var cell6 = document.createElement('td');
    tr1.appendChild(cell6);
    cell6.textContent = TotalSum;
}

let form = document.getElementById('newForm');
form.addEventListener('submit', function (event){
    event.preventDefault();
    let inputLocation = event.target.location.value;
    let inputMaximum = parseInt(event.target.max.value);
    let inputMinimum = parseInt(event.target.min.value);
    let inputAVG = parseFloat(event.target.avg.value);
    if(inputMaximum > inputMinimum){
        h.removeChild(h.lastChild);
        let objForm = new cookies(inputMaximum, inputMinimum, inputAVG, inputLocation);
        objForm.randomCustomer();
        objForm.Tables();
        footer();
    }
    else{
        alert("UnCorrect, you can try again and Max should be high value than min.");
    }
});
