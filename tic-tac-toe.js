
const FactoryPlayer = (name) => {

    const getName = () => name;
    
    return {getName};
}

const gameBoard = (() => {

    const board = ['','','','','','','','',''];
    const cell = document.querySelectorAll('.cells');


    function selection() {
        let playerOneTurn = true;

        const marker = (e) => {
            const target = e.target;
            const parent = target.parentNode;
            const index = [].indexOf.call(parent.children, target);
            if (playerOneTurn && e.target.style.backgroundImage === '') {
                e.target.style.backgroundImage = 'url(x.png)' 
                playerOneTurn = false;
                board.splice(index, 1, 'x');

                console.log(playerOneTurn);
                console.log(index);
                console.log(board);
                return;
            }
            if (!playerOneTurn && e.target.style.backgroundImage === '') {
                e.target.style.backgroundImage = 'url(o.png)' 
                playerOneTurn = true;
                board.splice(index, 1, 'o');

                console.log(playerOneTurn);
                console.log(index);
                console.log(board);
                return;
            }
        }
        cell.forEach((square) => {
                square.addEventListener('click', marker);
        })
    }

    //create(), winner(), and reset() will need access to these
    const modal = document.querySelector('#modal');
    const submit = document.querySelector('#submit');
    //these are the inputs for players one and two
    const first = document.getElementById('first');
    const second = document.getElementById('second');
    //this displays the vs. message above the board
    const vs = document.querySelector('#vs');
    function createPlayer() {
      
        submit.addEventListener('click', () => {
        playerOne =  FactoryPlayer(first.value || 'You');
        playerTwo = FactoryPlayer(second.value || 'Computer');  
        modal.classList.add('close');
        vs.textContent = `${playerOne.getName()} VS ${playerTwo.getName()}`
        console.log(playerOne.getName());
        });
    }

    function winner() {
        //display winner popup and offer reset button
    }

    createPlayer();
    selection();

    return {};
})();