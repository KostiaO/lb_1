const A = ['red', 'green', 'blue'];
const B = ['yellow', 'purple', 'orange', 'white'];
const C = ['white', 'brown', 'black', 'grey', 'pink', 'green'];

const U = ['pink', 'white', 'red'];



function Union(...sets) {
    return new Set(sets.reduce((arr, set) => [...arr, ...set], []));
}

// console.log(Union(A, U, C));

function Intersection(...sets) {
    let counter = 0;
    
    return sets[0].filter(el => {
        counter = 0;
        
        for (let i = 1; i < sets.length; i++) {
            if (sets[i].includes(el)) {
                counter++;
            }
        }
        
        return counter >= sets.length - 1;
    });
}

// console.log(Intersection(U, B, C));

function Complement(...sets) {
    const deletedElems = [];
    let result = [];
    
    for (const set of sets) {
        let copyOfSet = [...set];
        
        for (const el of result) {
            if (copyOfSet.includes(el)) {
                result = result.filter(element => element !== el);
                copyOfSet = copyOfSet.filter(element => element !== el);
                deletedElems.push(el);
            }
        }
        
        copyOfSet = copyOfSet.filter(el => !deletedElems.includes(el));
        
        result = [...result, ...copyOfSet];
    }
    
    return result;
}

// console.log(Complement(U, A, C, B));

function Difference(set1, ...sets) {
    const unionOfSetsToMinus = [...Union(...sets)];
    
    return set1.filter(el => !unionOfSetsToMinus.includes(el));
}

console.log(Difference(B, A, U));