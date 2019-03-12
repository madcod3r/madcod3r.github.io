let metroLines = [{
    color: 'Green',
    stations: [
    {
        name: 'Syrets'
    }, {
        name: 'Dorohozhychi'
    }, {
        name: 'Lukianivska'
    }, {
        name: 'Lvivska Brama'
    }, {
        name: 'Zoloti Vorota'
    }, {
        name: 'Palats Sportu'
    }, {
        name: 'Klovska'
    }, {
        name: 'Pecherska'
    }, {
        name: 'Druzhby Narodiv'
    }, {
        name: 'Vydubychi'
    }, {
        name: 'Telychka'
    }, {
        name: 'Slavutych'
    }, {
        name: 'Osokorky'
    }, {
        name: 'Pozniaky'
    }, {
        name: 'Kharkivska'
    }, {
        name: 'Vyrlytsia'
    }, {
        name: 'Boryspilska'
    }, {
        name: 'Chervony Khutir'
    }]
}, {
    color: 'Red',
    stations: [
    {
        name: 'Akademmistechko'
    }, {
        name: 'Zhytomyrska'
    }, {
        name: 'Sviatoshyn'
    }, {
        name: 'Nyvky'
    }, {
        name: 'Beresteiska'
    }, {
        name: 'Shuliavska'
    }, {
        name: 'Politekhnichnyi Instytut'
    }, {
        name: 'Vokzalna'
    }, {
        name: 'Universytet'
    }, {
        name: 'Teatralna'
    }, {
        name: 'Khreschatyk'
    }, {
        name: 'Arsenalna'
    }, {
        name: 'Dnipro'
    }, {
        name: 'Hidropark'
    }, {
        name: 'Livoberezhna'
    }, {
        name: 'Darnytsia'
    }, {
        name: 'Chernihivska'
    }, {
        name: 'Lisova'
    }]
}, {
    color: 'Blue',
    stations: [
        {
        name: 'Heroiv Dnipra'
    }, {
        name: 'Minska'
    }, {
        name: 'Obolon'
    }, {
        name: 'Petrivka'
    }, {
        name: 'Tarasa Shevchenka'
    }, {
        name: 'Kontraktova Ploshcha'
    }, {
        name: 'Poshtova Ploshcha'
    }, {
        name: 'Maidan Nezalezhnosti'
    }, {
        name: 'Ploshcha Lva Tolstoho'
    }, {
        name: 'Olimpiiska'
    }, {
        name: 'Palats "Ukrayina" '
    }, {
        name: 'Lybidska'
    }, {
        name: 'Demiivska'
    }, {
        name: 'Holosiivska'
    }, {
        name: 'Vasylkivska'
    }, {
        name: 'Vystavkovyi Tsentr'
    }, {
        name: 'Ipodrom'
    }, {
        name: 'Teremky'
    }]
}];

console.log(metroLines);

let schedule = [

];

let calculationOfTrainTime = [
    [2.05, 5.30, 10.25, 12.20, 14.35, 16.50, 18.50, 21.40, 26.35, 28.15, 31.15, 34.20, 36.35, 38.40, 41.00], // from Syrets to Chervoniy Khutir
    [2.10, 4.25,  6.25,  9.15, 12.05, 13.50, 18.45, 21.40, 23.45, 26.05, 28.15, 30.10, 34.40, 38.05, 40.30]
];

// For todays date;
Date.prototype.today = function () {
    return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
};

// For the time now
Date.prototype.timeNow = function () {
    return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
};

let $currentTime = $('#currentTime'),
    $timeToTrain = $('#timeToTrain'),
    currentDate = new Date(),
    startingStation = 'Pozniaky';

let dateFormat = function(dateTime) {
    return dateTime.today() + " " + dateTime.timeNow()
};

let changeCurrentTime = function() {
    currentDate = new Date();
    $currentTime.text(dateFormat(currentDate));
};

changeCurrentTime();

setInterval(changeCurrentTime, 1000);