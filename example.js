function riddleSolver(matrix) {
    let howMany = 0;
    let gemsWasRemoved
    do
    {
        gemsWasRemoved = false;
        let rowMatched = [];
        let columnMatched = [];
        for(let i = matrix.length-1; i >= 0; i--)
        {
            //reset buffers
            rowMatched = [];
            columnMatched = [];
            console.log('ROW: ', i);
            console.log('checking rows..')
            for(let j = matrix[i].length-1; j >= 0; j--)
            {
                console.log('COLUMN: ', j)
                if(matrix[i][j])//if element is not empty
                {
                    console.log("we're at: [", i,',',j,'], comparing to', matrix[i][j])
                    //add current gem([i,j]) to array with contender to be removed 
                    rowMatched.unshift([i,j])
                    columnMatched.unshift([i,j])
                    
                    //row matches
                    if(j > 0)
                        for(let k = j-1;k >=-1;k--)
                        {

                            if(matrix[i][k] == matrix[i][j]){//if its equal to current i,j element
                                rowMatched.unshift([i,k]); 
                                console.log('added to ', rowMatched, ' value: ', matrix[i][k])
                                continue;
                            } 
                            else if(rowMatched.length >= 3){//if next element is not equal, we need to check if matched list is >= 3
                                rowMatched.forEach(item => {
                                    matrix[item[0]][item[1]] = 0;
                                });
                                gemsWasRemoved = true;
                                // j = k - rowMatched.length-1;//if uncommented, decreases complexity of row matches searching, but cant run verticall search with this
                                rowMatched = []
                                console.log('reseting bufor, changed sth to 0!')
                                break;    
                            } 
                            else//else there wasnt enough items to match and element wasnt equal, we're starting doing the same from 'next' element, which is actually previous(i,j -1) 
                            {
                                console.log('not enough elements to match: ', rowMatched.length)
                                rowMatched = []
                                break;
                            }
                        }
                    //column matches
                    console.log('checking columns..')
                    for(let k = i-1;k > -1; k--){
                        if(matrix[k][j] === matrix[i][j]) 
                        {
                            columnMatched.unshift([k,j]);
                            console.log('added to ', columnMatched, ' value: ', matrix[k][j])
                            continue;
                        }
                        else if(columnMatched.length >= 3){//if next element is not equal, we need to check if matched list is >= 3
                            columnMatched.forEach(item => {
                                matrix[item[0]][item[1]] = 0;
                            });
                            gemsWasRemoved = true;
                            console.log('reseting bufor, changed sth to 0!')
                            columnMatched = []
                            
                            break;    
                        } 
                        else//else there wasnt enough items to match and element wasnt equal, we're starting doing the same from 'next' element, which is actually previous(i,j -1) 
                        {
                            console.log('not enough elements to match: ', columnMatched.length)
                            columnMatched = []
                            break;
                        }
                    }
                }
            console.log('j--')
        }
        console.log('i--')
        }
        //checks if drop 
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
        howMany++;
    } while(gemsWasRemoved)
    console.log("'function' was invoked ", howMany, ' times.')
    return matrix;
}
module.exports.riddleSolver = riddleSolver