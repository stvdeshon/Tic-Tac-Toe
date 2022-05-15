const gameBoard = (() => {

    const board = ['','','','','','','','',''];
    
    function turns() {
        //this conditional actually works
        const stv = FactoryPlayer('stv');

        if (3 === 3) {

            stv.selectCell();
        }
    }
    return {turns};
})();

const FactoryPlayer = (name) => {

    
    const getName = () => name; //console.log(name);

    const selectCell = () => {
        const cell = document.querySelectorAll('.cells');
        const marker = (e) => {
            e.target.style.backgroundImage = 'url(x.png)';

            // some condition -> cell.style.backgroundImage = 'url(o.png)';
        }
        cell.forEach((square) => {
            square.addEventListener('click', marker);
        })
    }

    return {getName, selectCell};
}

// const gameFlow = (() => {

//  winner = () => {
    
    // }

//     return {};
// })();

gameBoard.turns();

