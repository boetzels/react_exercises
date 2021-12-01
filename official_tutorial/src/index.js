import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function getWinner(squares){
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    for(let i=0; i<lines.length; i++){
        const [a,b,c] = lines[i].slice();
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a]
    }
    return null
}

function Square(props){
    return (
        <button className="square" onClick={props.onClick}>{props.value}</button>
    );
}

/*class Square extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value : null, 
        };
    }

    render() {
        return (
            <button
                className="square"
                onClick={() => this.props.onClick()}
            >
                {this.props.value}
            </button>
        );
    }
}*/
  
class Board extends React.Component {
    renderSquare(i) {
        return(
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    
  
    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
  
class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            history: [{squares: Array(9).fill(null)}],
            xIsNext: true,
            stepNumber: 0,
            reverseOrder: false,
        };
    }

    handleClick(i){
        const history = this.state.history.slice(0,this.state.stepNumber + 1);
        const mysquares = history[history.length - 1].squares.slice()
        if (mysquares[i] || getWinner(mysquares)) return;

        mysquares[i] = this.state.xIsNext ? 'X' : 'O';

        this.setState({
            history: history.concat([{squares: mysquares}]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length,
        });
    }

    reverseHistory(){
        this.setState({
            reverseOrder: !this.state.reverseOrder,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];

        let lastSquares = [];
        const moves = history.map((step, move) => {
            let lastMove = null;
            for (let x = 0; x < lastSquares.length; x++) {
                if (step.squares[x] !== lastSquares[x]) {
                    lastMove = x; 
                    break;
                }
            }
            lastSquares = step.squares;

            const movePosition = (lastMove || lastMove === 0) ? ' { Move was ('+(Math.floor(lastMove / 3) + 1)+';'+(lastMove % 3 + 1)+')' : '';
            
            const desc = move ?
                'Go to move '+move :
                'Go to start';
            return (<li key={move}><button onClick={()=> this.jumpTo(move)}>{desc}</button> {movePosition}</li>)
            }
        );

        if (this.state.reverseOrder)
            moves.reverse()

        let status = '';
        const winner = getWinner(current.squares);

        if (winner) {
            status = 'The winner is: '+winner;
        }
        else {
            status = 'Next player: '+(this.state.xIsNext ? 'X' : 'O');
        }

        const sort = <button onClick={() => this.reverseHistory()}>Reverse order</button>;

        return (
            <div className="game">
                <div className="game-board">
                    <Board 
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{ status }</div>
                    <div>{ sort }</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}
  
// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
  