function riddleSolver(matrix) {
    let gemsWasRemoved
    do
    {
        gemsWasRemoved = false;
        let rowMatched = [];
        let columnMatched = [];
        for(let i = matrix.length-1; i >= 0; i--)
        {
            rowMatched = [];
            columnMatched = [];
            for(let j = matrix[i].length-1; j >= 0; j--)
            {
                if(matrix[i][j])
                {
                    rowMatched.unshift([i,j])
                    columnMatched.unshift([i,j])        
                    if(j > 0)
                        for(let k = j-1;k >=-1;k--)
                        {

                            if(matrix[i][k] == matrix[i][j]){
                                rowMatched.unshift([i,k]); 
                                continue;
                            } 
                            else if(rowMatched.length >= 3){
                                rowMatched.forEach(item => {
                                    matrix[item[0]][item[1]] = 0;
                                });
                                gemsWasRemoved = true;
                                rowMatched = []
                                break;    
                            } 
                            else
                            {
                                rowMatched = []
                                break;
                            }
                        }
                    for(let k = i-1;k > -1; k--){
                        if(matrix[k][j] === matrix[i][j]) 
                        {
                            columnMatched.unshift([k,j]);
                            continue;
                        }
                        else if(columnMatched.length >= 3){
                            columnMatched.forEach(item => {
                                matrix[item[0]][item[1]] = 0;
                            });
                            gemsWasRemoved = true;
                            columnMatched = []           
                            break;    
                        } 
                        else 
                        {
                            columnMatched = []
                            break;
                        }
                    }
                }
            }
        }
        for(let i = matrix.length-1; i >= 0; i--)
        {
            for(let j = matrix[i].length-1; j >= 0; j--)
            {
                if(matrix[i][j] === 0) {
                    for(let k = i-1;k >=0; k--){
                        if(matrix[k][j] !== 0) 
                        {
                            matrix[i][j] = matrix[k][j] 
                            matrix[k][j] = 0;
                            break;
                        }
                        
                    }
                }
            }
        }
    } while(gemsWasRemoved)
    return matrix;
}
module.exports.riddleSolver = riddleSolver