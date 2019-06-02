# Match Three Logic ECMAScript
## Introduction
Imagine you play one of these Match Three type of games (e.g. Candy Crush). Have you ever wondered how do they solved the problem of checking if there are at least 3 (or more)  the same gems in a row(horizontally or vertically)? Now you don't have to do that, here it is, the solveRiddle function. </br>
## Environment
Function was tested in Node **v11.1.0**.
 ## Usage
 Simply import this function with 
 ```javascript
 require('./example')
 ```
# About this solution 

We pass 2D array as a argument to solveRiddle function. Size of an array may be different than just n x n, let A[n][m] be a 2D array, where n is amount of rows and m is amount of columns of our matrix. </br>
## 2D array schema, we can present as follows: 

[a<sub>00</sub> a<sub>01</sub> a<sub>02</sub> ... a<sub>0m</sub>] </br>
[a<sub>10</sub> a<sub>11</sub> a<sub>12</sub> ... a<sub>1m</sub>] </br>
[a<sub>20</sub> a<sub>21</sub> a<sub>22</sub> ... a<sub>2m</sub>] </br>
[... ... ... ... ... ... ... ] </br>
[... ... ... ... ... ... ... ] </br>
[a<sub>n0</sub> a<sub>n1</sub> a<sub>n2</sub> ... a<sub>nm</sub>] </br>

## A way of iteration over array:
We have following array: 
```javascript
let A = [[3 8 7], 
         [2 2 2], 
         [2 4 1]] 
```
Iteration over this matrix, in my case would look like this: _1, 4, 2, 2, 2, 2, 7, 8, 3._ It's easy to notice, that we're iterating array **backwards**

And this how the loops are looking, written in JS:
```javascript
for(let i = matrix.length-1; i >= 0; i--)
        {
            for(let j = matrix[i].length-1; j >= 0; j--)
            {
                console.log(matrix[i][j])
            }
        }
```
## Algorithm

We create a bufor for our data, which are matched elements horizontally and matched elements vertically.

```javascript
let rowsMatched = columnsMatched = [];
```

1. During visiting each node(cell), we need to compare it's value with the value of it's left neighbour.If the values are the same we need to add coordinates of the node, we were comparing to, to the buffor variable(rowsMatched). </br>
Repeat this step until we find value which is different than current a<sub>i,j</sub> node or we reach left border of A matrix. </br>
2. If value on the left of current a<sub>i,j</sub> node is different, we check if our buffor variable's length is greater or equal to 3, if yes we can change values of elements within rowsMatched to 0.</br>
Otherwise do the same with current a<sub>i,j</sub> node, but this time check it vertically.</br>
3. If we went from a<sub>n,m</sub> to a<sub>0,0</sub> checking for matches, we need now to check if there are gaps(0, which stands for empty cell) between non-zero values in the array. If there are, non-zero values should be dropping on the bottom, until it reaches another non-zero value or lowest array's row.  </br>
4.The problem is, that after dropping gems, it's still possible, that new situation on the board meets with another 3 or more gems in a row, the solution to this problem is to run steps, described in paragraphs 1-3 over and over again, until there will be no gaps between non-zero values. </br>

That all means, that complexity of this algorithm is **polynomial**.
    
     
     
