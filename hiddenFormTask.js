function listWithSelectedColorOnTop(arr, str) 
{
    let searchedElements = new Array
    for(let i = 0;i < arr.length; i++)
        if (arr[i].toLowerCase() == str.toLowerCase())
        {
            searchedElements.push(arr[i])
            arr.splice(i--,1)
        } 
    if(searchedElements > 0)
        arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).unshift(...searchedElements.reverse())
    return arr;
}
module.exports = listWithSelectedColorOnTop
// module.exports.listWithSelectedColorOnTop = listWithSelectedColorOnTop