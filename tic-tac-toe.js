
const FactoryPlayer = (name) => {

    const getName = () => name;
    
    return {getName};
}

const gameBoard = (() => {

    const board = ['','','','','','','','',''];
    const cell = document.querySelectorAll('.cells');

    function selection() {
        let playerOneTurn = true;

        const turns = (e) => {
            const target = e.target;
            const parent = target.parentNode;
            const index = [].indexOf.call(parent.children, target);
            if (playerOneTurn && e.target.style.backgroundImage === '') {
                e.target.style.backgroundImage = 'url(x.png)' 
                playerOneTurn = false;
                board.splice(index, 1, 'x');
                winModal(playerOne.getName());
               
                return;
            }
            if (!playerOneTurn && e.target.style.backgroundImage === '') {
                e.target.style.backgroundImage = 'url(o.png)' 
                playerOneTurn = true;
                board.splice(index, 1, 'o');
                winModal(playerTwo.getName());
            }
        }
        cell.forEach((square) => {
                square.addEventListener('click', turns);
        })
    }

    //create(), winner(), and reset() will need access to these
    const modal = document.querySelector('#modal');
    const submit = document.querySelector('#submit');
    const winner = document.querySelector('#winner');
    const resetBtn = document.querySelector('#restart');
    //these are the inputs for players one and two
    const first = document.getElementById('first');
    const second = document.getElementById('second');
    //this displays the vs. message above the board
    const vs = document.querySelector('#vs');
    function createPlayer() {
      
        submit.addEventListener('click', (e) => {
        playerOne =  FactoryPlayer(first.value || 'Player One');
        playerTwo = FactoryPlayer(second.value || 'The Computer');  
        modal.classList.add('close');
        vs.textContent = `${playerOne.getName()} VS ${playerTwo.getName()}`;
        e.preventDefault();
        });
    }

    function winModal(player) {
        const announceWin = document.getElementById('announcement');
        if (board[0] === 'x' && board[1] === 'x' && board[2] === 'x' ||
        board[3] === 'x' && board[4] === 'x' && board[5] === 'x' ||
        board[6] === 'x' && board[7] === 'x' && board[8] === 'x' ||
        board[0] === 'x' && board[3] === 'x' && board[6] === 'x' ||
        board[1] === 'x' && board[4] === 'x' && board[7] === 'x' ||
        board[2] === 'x' && board[5] === 'x' && board[8] === 'x' ||
        board[0] === 'x' && board[4] === 'x' && board[8] === 'x' ||
        board[2] === 'x' && board[4] === 'x' && board[6] === 'x') {
            announceWin.textContent = `${player} has won!`;
            winner.classList.add('show');
        }else if (board[0] === 'x' && board[1] === 'x' && board[2] === 'x' ||
        board[3] === 'o' && board[4] === 'o' && board[5] === 'o' ||
        board[6] === 'o' && board[7] === 'o' && board[8] === 'o' ||
        board[0] === 'o' && board[3] === 'o' && board[6] === 'o' ||
        board[1] === 'o' && board[4] === 'o' && board[7] === 'o' ||
        board[2] === 'o' && board[5] === 'o' && board[8] === 'o' ||
        board[0] === 'o' && board[4] === 'o' && board[8] === 'o' ||
        board[2] === 'o' && board[4] === 'o' && board[6] === 'o') {
            announceWin.textContent = `${player} has won!`
            winner.classList.add('show');
        } else if (board[0] !== '' && board[1] !== '' && board[2] !== '' &&
        board[3] !== '' && board[4] !== '' && board[5] !== '' &&
        board[6] !== '' && board[7] !== '' && board[8] !== '') {
            announceWin.textContent = 'It\'s a tie!';
            winner.classList.add('show');
        }
    }

    function reset() {
        //reset everything to default
        winner.classList.remove('show');
    }

    resetBtn.addEventListener('click', reset);
    createPlayer();
    selection();

    return {};
})();