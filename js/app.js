'use strict';

function getRandomCustomerNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let seattle = {
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
    }
};


let tokyo = {
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
    }
};



let dubai = {
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
    }
};

let paris = {
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
    }
};

let lima = {
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
    }
};
