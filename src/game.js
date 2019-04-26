'use strict';

import Board from './board';
import {chunk} from 'chunk';

class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;

        this.board = new Board(width, height);
    }

    step() {  // cada rodada do jogo
            //return cell;
    }

    render(aliveChar = '#', deadChar = '_', newLineChar = '\n') {
        let chunks = chunk(this.board.cells, this.width);
        return chunks.map(row => row.map(cell => cell.alive ? aliveChar : deadChar).join('')).join(newLineChar);
    }
}

export default Game;
