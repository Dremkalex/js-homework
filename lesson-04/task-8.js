const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
// f(arr); // 12
const arr2 = [[[[[1,2]]]]];
// f(arr2); // 3
const arr3 = [[[[[1,2]]],2],1];
// f(arr3); // 6
const arr4 = [[[[[]]]]];
// f(arr4); // 0
const arr5 = [[[[[],3]]]];
// f(arr5); // 3

function f(array) {
    if(!Array.isArray(array)) {
        throw new Error('1st parametr is required and should be an array')
    }
    function flattenDeep (array){
        const deepFlattenArray = array.reduce((curr, next) => {
            if(typeof next !== 'number' && !Array.isArray(next)) {
                throw new Error('Unexpection value! Value should be a number or an array')
            } else if(Array.isArray(next) && next.length !== 0) {
                return curr.concat(flattenDeep(next));
            } else if(Array.isArray(next) && next.length === 0 || typeof next === 'number') {
                return curr.concat(next);
            }}, []);
            return deepFlattenArray;
    }
    return flattenDeep(array).length === 0 ? 0 : flattenDeep(array).reduce((acc, item) => acc + item, 0);
}
 console.log(f(arr));