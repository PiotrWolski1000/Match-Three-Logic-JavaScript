# Match Three Logic ECMAScript
Imagine you play one of these Match Three type of games (e.g. Candy Crush). Have you ever wondered how do they solved the problem of checking if there are at least 3 (or more)  the same gems in a row(horizontally or vertically)? Now you don't have to do that, here it is the solveRiddle function. </br>
 
## Solution 

We pass 2D array as a argument to solveRiddle function. Size of an array may be different than just n x n, let A[n][m] be a 2D array, where n is amount of rows and m is amount of columns of our matrix. </br>
## 2D array schema, we can present it as a follows: 

let A = [
    [a<sub>00</sub> a<sub>01</sub> a<sub>02</sub> ... a<sub>0m</sub>]
    [a<sub>10</sub> a<sub>11</sub> a<sub>12</sub> ... a<sub>1m</sub>]
    [a<sub>20</sub> a<sub>21</sub> a<sub>22</sub> ... a<sub>2m</sub>]
    [... ... ... ... ... ... ... ]
    [... ... ... ... ... ... ... ]
    [a<sub>n0</sub> a<sub>n1</sub> a<sub>n2</sub> ... a<sub>nm</sub>]
]

## A way of iteration over our **A** array:
We have following array: 
```javascript
let A = [[3 8 7], 
         [2 2 2], 
         [2 4 1]] 
```
Iteration over this matrix, in my case would look like this: _1, 4, 2, 2, 2, 2, 7, 8, 3._

## Algorithm

We create a bufor for our data, which are matched elements horizontally and matched elements vertically.

```javascript
let rowMatched = columnsMatched = [];
```

During we are visiting each node(cell), we need to compare it's value with the value of it's left neighbour.If the values are the same we need to add coordinates of the node,we were comparing to, to the buffor variable(rowsMatched). </br>
Repeat this step until we find value which is different than current a<sub>i,j</sub> node or we reach left border of A matrix. </br>
If value on the left of current a<sub>i,j</sub> node is different, we check if our buffor variable's length is greater or equal to 3, if yes we can change values of elements within rowsMatched to 0.</br>
Otherwise do the same with current a<sub>i,j</sub> node, but this time check it vertically. 
    
     
     
