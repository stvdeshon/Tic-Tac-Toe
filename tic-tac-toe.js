const gameBoard = (() => {

    const board = ['','','','','','','','',''];
    

    return {};
})();

const gameFlow = (() => {

    const winner = () => {
        //announce winner
    }
})();

const FactoryPlayer = (name) => {

    
    const getName = () => console.log(name);

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

const stv = FactoryPlayer('stv');

stv.selectCell();

