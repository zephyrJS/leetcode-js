/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    this._bit = 0;
    function isValid(num){
        var tmp = Math.pow(2, num - 1);
        if((this._bit & tmp) !== 0){
            return false;
        }else{
            this._bit = this._bit | tmp;
            return true;
        }
    }
    
    var i = 0, j = 0, m = 0, n =0, cell = 0;
    //row
    for(i = 0; i < 9; i++){
        for(j = 0; j < 9; j++){
            cell = parseInt(board[i][j]);
            if(!isValid(cell)){
                return false;
            }
        }
        this._bit = 0;
    }
    //column
    for(i = 0; i < 9; i++){
        for(j = 0; j < 9; j++){
            cell = parseInt(board[j][i]);
            if(!isValid(cell)){
                return false;
            }
        }
        this._bit = 0;
    }
    //square
    for(i = 0; i <= 6; i+=3){
        for(j = 0; j <=6 ; j+=3){
            for(m = 0; m < 3; m++){
                for(n = 0; n < 3; n++){
                    cell = parseInt(board[m + i][n + j]);
                    if(!isValid(cell)){
                        return false;
                    }
                }
            }
            this._bit = 0;
        }
    }
    return true;
};

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = new Array(9),
        cols = new Array(9),
        boxs = new Array(9);
    for (let k = 0; k < 9; k++) {
        rows[k] = new Array(9);
        cols[k] = new Array(9);
        boxs[k] = new Array(9);
    }

    for(let i = 0; i < board.length; ++ i)
        for(let j = 0; j < board[i].length; ++ j)
            if(board[i][j] != '.') {
                let num = board[i][j] - '0' - 1;
                let k = Math.floor(i / 3) * 3 + Math.floor(j / 3);		
                if(rows[i][num]==1 || cols[j][num]==1 || boxs[k][num]==1)
                    return false;
                rows[i][num] = cols[j][num] = boxs[k][num] = 1;
            }
    return true;
};