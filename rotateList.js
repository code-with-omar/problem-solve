//             1->2->3->4-5
// rotate 1    5->1->2->3->4
// rotate 2    4->5->1->2->3


var rotateRight = function (head, k) {
    let rotate1 = head.slice(-k);
    let rotate2 = head.slice(0,-k);
    console.log(rotate1)
    console.log(rotate2)
    return rotate1.concat(rotate2)
};
console.log(rotateRight([1, 2, 3, 4, 5], 2))