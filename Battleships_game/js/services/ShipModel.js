battleShips.factory('ShipModel', function ShipModel(boardConfig) {
    var shipModel = function() {
        this.boardSize = 10;
        this.numShips = 3;
        this.shipsSunk = 0;
        this.ships = [{
            locations: [0, 0, 0],
            hits: ["", "", ""]
        }, {
            locations: [0, 0, 0, 0, 0],
            hits: ["", "", "", "", ""]
        }, {
            locations: [0, 0, 0],
            hits: ["", "", ""]
        }],
        this.shipLength = [
            this.ships[0].locations.length,
            this.ships[1].locations.length,
            this.ships[2].locations.length
        ];
    };


    shipModel.prototype.generateShipLocations = function() {
        var locations;
        for (var i = 0; i < this.numShips; i++) {
            do {
                locations = this.generateShip(this.shipLength[i]);
                console.log('local locations in do');
                console.log(locations);
            } while (this.collision(locations));
            this.ships[i].locations = locations;
        }

        console.log("Ships array: ");
        console.log(this.ships);
    };


    shipModel.prototype.generateShip = function(shipLength) {
        var direction = Math.floor(Math.random() * 2);
        var row, col;
        if (direction === 1) { // horizontal
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - shipLength + 1));
        } else { // vertical
            row = Math.floor(Math.random() * (this.boardSize - shipLength + 1));
            col = Math.floor(Math.random() * this.boardSize);
        }
        var newShipLocations = [];
        for (var i = 0; i < shipLength; i++) {

            if (direction === 1) {
                newShipLocations.push(row + "" + (col + i));
            } else {
                newShipLocations.push((row + i) + "" + col);
            }
        }

        return newShipLocations;
    };

    shipModel.prototype.collision = function(locations) {

        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];

            for (var j = 0; j < locations.length; j++) {

                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        return false;
    };


    shipModel.prototype.isSunk = function(ship , thisLenght) {
        for (var i = 0; i < thisLenght; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    };


    return new shipModel();
});