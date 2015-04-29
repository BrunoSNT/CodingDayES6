'use strict';

import Game  from './src/game';

let game = new Game(40, 20);

setInterval(() => {
    console.log(game.render());
    game.step();
}, 100);
