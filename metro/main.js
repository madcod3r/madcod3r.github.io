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
    currentDate = new Date();

let dateFormat = function(dateTime) {
    return dateTime.today() + " " + dateTime.timeNow()
};

let changeCurrentTime = function() {
    currentDate = new Date();
    $currentTime.text(dateFormat(currentDate));
};

changeCurrentTime();

setInterval(changeCurrentTime, 1000);