'use strict';

// Div Id -> Salmoon_Cookies

function getRandomCustomerNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// Seattle obj
let seattle = {
    location : 'seattle',
    hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    min: 23,
    max: 65,
    avg: 6.3,
    AvgCookieCustomer:[],
    getNum: function () {
        for (var i = 0 ; i < this.hour.length() ; i++){
            let numberOfCustomer = math.floor(getRandomArbitrary(this.min, this.max));
            this.AvgCookieCustomer.push(Math.floor(numberOfCustomer*this.avg));
        }
    },
    render: function(){
        /* in render :
        article [h2 , p , ul , img , div]
        */

       let parentElement = document.getElementById('Salmoon_Cookies');

       let h2Element = document.createElement('h2');
       h2Element.textContent = this.location;
       parentElement.appendChild( h2Element );

       let divElement = document.createElement('div');
       parentElement.appendChild(divElement);

       let ulElement = document.createElement( 'ul' );
       divElement.appendChild(ulElement);

       let total = 0;

       for (let i = 0 ; i <= this.hour.length() ; i++ ){
           if (i == 14){
               let liElement=document.createElement('li');
               liElement.textContent= 'Total: ' + total + ' cookies';
               ulElement.appendChild( liElement );
           }
           else{
               let liElement = document.createElement('li');
               let cookiesNumber = this.getNum();
               liElement.textContent = this.hour[i] + ': ' + cookiesNumber + ' Cookies';
               ulElement.appendChild(liElement);
               total = total + cookiesNumber;
           }
       }


    }
};
// Tokyo obj
let tokyo = {
    location: 'Tokyo',
    hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    min: 3,
    max: 24,
    avg: 1.2,
    AvgCookieCustomer:[],
    getNum: function () {
        for (var i = 0 ; i < this.hour.length() ; i++){
            let numberOfCustomer = math.floor(getRandomArbitrary(this.min, this.max));
            this.AvgCookieCustomer.push(Math.floor(numberOfCustomer*this.avg));
        }
    },
    render: function(){
        /* in render :
        article [h2 , p , ul , img , div]
        */
        const parentElement = document.getElementById('Salmoon_Cookies');

        let pElement = document.createElement('p');
        parentElement.appendChild(pElement);
        pElement.textContent = `${this.location} has a ${this.max} max value and ${this.min} min value.`;
 
        let h2Element = document.createElement('h2');
        h2Element.textContent = this.location;
        parentElement.appendChild(h2Element);

        let divElement = document.createElement('div');
        parentElement.appendChild(divElement);

        let ulElement = document.createElement( 'ul' );
        divElement.appendChild( ulElement );

        let total = 0;

        for (let i = 0 ; i <= this.hour.length() ; i++ ){
            if (i == 14){
                let liElement=document.createElement('li');
                liElement.textContent= 'Total: ' + total + ' cookies';
                ulElement.appendChild( liElement );
            }
            else{
                let liElement = document.createElement('li');
                let cookiesNumber = this.getNum();
                liElement.textContent = this.hour[i] + ': ' + cookiesNumber + ' Cookies';
                ulElement.appendChild(liElement);
                total = total + cookiesNumber;
            }
        }
    }
};
// Dubai obj
let dubai = {
    location: 'Dubai',
    hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    min: 11,
    max: 38,
    avg: 3.7,
    AvgCookieCustomer:[],
    getNum: function () {
        for (var i = 0 ; i < this.hour.length() ; i++){
            let numberOfCustomer = math.floor(getRandomArbitrary(this.min, this.max));
            this.AvgCookieCustomer.push(Math.floor(numberOfCustomer*this.avg));
        }
    },
    render: function(){
        /* in render :
        article [h2 , p , ul , img , div]
        */
        const parentElement = document.getElementById('Salmoon_Cookies');

        let pElement = document.createElement('p');
        parentElement.appendChild(pElement);
        pElement.textContent = `${this.location} has a ${this.max} max value and ${this.min} min value.`;
 
        let h2Element = document.createElement('h2');
        h2Element.textContent = this.location;
        parentElement.appendChild(h2Element);

        let divElement = document.createElement('div');
        parentElement.appendChild(divElement);

        let ulElement = document.createElement( 'ul' );
        divElement.appendChild( ulElement );

        let total = 0;

        for (let i = 0 ; i <= this.hour.length() ; i++ ){
            if (i == 14){
                let liElement=document.createElement('li');
                liElement.textContent= 'Total: ' + total + ' cookies';
                ulElement.appendChild( liElement );
            }
            else{
                let liElement = document.createElement('li');
                let cookiesNumber = this.getNum();
                liElement.textContent = this.hour[i] + ': ' + cookiesNumber + ' Cookies';
                ulElement.appendChild(liElement);
                total = total + cookiesNumber;
            }
        }
    }
};
// Paris obj
let paris = {
    location: 'Paris',
    hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    min: 20,
    max: 38,
    avg: 2.3,
    AvgCookieCustomer:[],
    getNum: function () {
        for (var i = 0 ; i < this.hour.length() ; i++){
            let numberOfCustomer = math.floor(getRandomArbitrary(this.min, this.max));
            this.AvgCookieCustomer.push(Math.floor(numberOfCustomer*this.avg));
        }
    },
    render: function(){
        /* in render :
        article [h2 , p , ul , img , div]
        */
        const parentElement = document.getElementById('Salmoon_Cookies');

        let pElement = document.createElement('p');
        parentElement.appendChild(pElement);
        pElement.textContent = `${this.location} has a ${this.max} max value and ${this.min} min value.`;
 
        let h2Element = document.createElement('h2');
        h2Element.textContent = this.location;
        parentElement.appendChild(h2Element);

        let divElement = document.createElement('div');
        parentElement.appendChild(divElement);

        let ulElement = document.createElement( 'ul' );
        divElement.appendChild( ulElement );

        let total = 0;

        for (let i = 0 ; i <= this.hour.length() ; i++ ){
            if (i == 14){
                let liElement=document.createElement('li');
                liElement.textContent= 'Total: ' + total + ' cookies';
                ulElement.appendChild( liElement );
            }
            else{
                let liElement = document.createElement('li');
                let cookiesNumber = this.getNum();
                liElement.textContent = this.hour[i] + ': ' + cookiesNumber + ' Cookies';
                ulElement.appendChild(liElement);
                total = total + cookiesNumber;
            }
        }
       
    }
};
// Lima obj
let lima = {
    location: 'lima',
    hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    min: 2,
    max: 16,
    avg: 4.6,
    AvgCookieCustomer:[],
    getNum: function () {
        for (var i = 0 ; i < this.hour.length() ; i++){
            let numberOfCustomer = math.floor(getRandomArbitrary(this.min, this.max));
            this.AvgCookieCustomer.push(Math.floor(numberOfCustomer*this.avg));
        }
    },
    render: function(){
        /* in render :
        article [h2 , p , ul , img , div]
        */
        const parentElement = document.getElementById('Salmoon_Cookies');

        let pElement = document.createElement('p');
        parentElement.appendChild(pElement);
        pElement.textContent = `${this.location} has a ${this.max} max value and ${this.min} min value.`;
 
        let h2Element = document.createElement('h2');
        h2Element.textContent = this.location;
        parentElement.appendChild(h2Element);

        let divElement = document.createElement('div');
        parentElement.appendChild(divElement);

        let ulElement = document.createElement( 'ul' );
        divElement.appendChild( ulElement );

        let total = 0;

        for (let i = 0 ; i <= this.hour.length() ; i++ ){
            if (i == 14){
                let liElement=document.createElement('li');
                liElement.textContent= 'Total: ' + total + ' cookies';
                ulElement.appendChild( liElement );
            }
            else{
                let liElement = document.createElement('li');
                let cookiesNumber = this.getNum();
                liElement.textContent = this.hour[i] + ': ' + cookiesNumber + ' Cookies';
                ulElement.appendChild(liElement);
                total = total + cookiesNumber;
            }
        }
    }
};


seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();