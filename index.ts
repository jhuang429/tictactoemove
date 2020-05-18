const player1: string = "X";
const player2: string = "O";
let current_player = player1;
let array: Array<number> = [0,1,2,3,4,5,6,7,8];
let move_piece= "";

const space = document.querySelectorAll(".space");
const text = document.getElementById("text");

space[0].addEventListener('click',turn,false)
space[1].addEventListener('click',turn,false)
space[2].addEventListener('click',turn,false)
space[3].addEventListener('click',turn,false)
space[4].addEventListener('click',turn,false)
space[5].addEventListener('click',turn,false)
space[6].addEventListener('click',turn,false)
space[7].addEventListener('click',turn,false)
space[8].addEventListener('click',turn,false)

function alternatePlayer(){
    if (current_player == player1){
        current_player = player2;
        text.innerHTML = `${current_player}'s turn`
    }
    else if (current_player == player2){
        current_player = player1;
        text.innerHTML = `${current_player}'s turn`
    }
}

function turn(square){
    let taken = check_if_space_is_taken(square)
    let correct_piece = check_if_cell_is_players_piece(square)
    if(move_piece !== "") {
            move(square)
            check_winner()
            move_piece = ""
    }
    else if (taken == false) {
        place_tile(square)
        check_winner()
    }
    else if (taken == true){
        if (correct_piece == true) {
            intialize_move(square)
        };
    }     
}


function intialize_move(square) {
    let cell_id = space[square.target.id].id
    let move_piece = current_player
    document.getElementById(cell_id).innerHTML = ""
    array[cell_id] = ""
}

function check_if_space_is_taken(square) {
        let cell_id = space[square.target.id].id
        if (array[cell_id] !== "X" || array[cell_id] !== "O"){
            return false
        }
        else 
            return true
}

function check_if_cell_is_players_piece(square) {
    let cell_id = space[square.target.id].id
    if (array[cell_id] === current_player){
        return true
    }
    else 
        return false
}

function move(square) {
    let taken = check_if_space_is_taken(square)
    let cell_id = space[square.target.id].id
    if(taken == false ) {
    document.getElementById(cell_id).innerHTML = move_piece
    array[cell_id] = move_piece
    }
}


function place_tile(square) {
    let cell_id = space[square.target.id].id
    document.getElementById(cell_id).innerHTML = current_player
    array[cell_id] = current_player
}

function check_winner() {
    if(
    (array[0] == array[1] && array[1] == array[2]) ||
    (array[3] == array[4] && array[4] == array[5]) ||
    (array[6] == array[7] && array[7] == array[8]) ||
    (array[0] == array[3] && array[3] == array[6]) ||
    (array[1] == array[4] && array[4] == array[7]) ||
    (array[2] == array[5] && array[5] == array[8]) ||
    (array[0] == array[4] && array[4] == array[8]) ||
    (array[2] == array[4] && array[4] == array[6]) )
    {text.innerHTML=`${current_player} is the winner!`}
    else {alternatePlayer() }
}