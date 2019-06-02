# Match Three Logic ECMAScript

# How does it work? About function solveRiddle

We pass 2D array as a argument to solveRiddle function. Size of an array may be different, let's A[n][m] be a 2D array, where n is amount of rows and m is amount of columns of our matrix. </br>
## 
[a<sub>00</sub> a<sub>01</sub> a<sub>02</sub> ... a<sub>0m</sub>] </br>
     [a<sub>10</sub> a<sub>11</sub> a<sub>12</sub> ... a<sub>1m</sub>] </br>
     [a<sub>20</sub> a<sub>21</sub> a<sub>22</sub> ... a<sub>2m</sub>] </br>
A =  [... ... ... ... ... ... ... ]</br>
     [... ... ... ... ... ... ... ]</br>
     [a<sub>n0</sub> a<sub>n1</sub> a<sub>n2</sub> ... a<sub>nm</sub>] </br>


A way of iteration over our **A** array

We have following matrix 
     [3 8 7] </br>
A =  [2 2 2] </br>
     [2 4 1] </br>
Iteration: 1,2, 2,3,2,1,7,2,3

We create a bufor for our data, which are matched elements horizontally and matched elements vertically.

let rowMatched = columnsMatched = [];

During we are visiting each node(cell), we need to compare it's value with the value of it's left neighbour.If the values are the same we need to add coordinates of the node,we were comparing to, to the buffor variable(rowsMatched). Repeat this step until we find value which is different than current a<sub>i,j</sub> node or we reach left border of A matrix.
If value on the left of current a<sub>i,j</sub> node is different, we check if our buffor variable's length is greater or equal to 3, if yes we can change values of elements within rowsMatched to 0.</br>
Otherwise do the same with current a<sub>i,j</sub> node, but this time check it vertically. 
    
     
     
