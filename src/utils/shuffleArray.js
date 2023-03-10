/*
-- To shuffle an array a of n elements (indices 0..N-1):
for i from Nā1 downto 1 do
     j ā random integer such that 0 ā¤ j ā¤ i
     exchange a[j] and a[i]
 */
/**
 *
 * @param {Array} arr
 */

module.exports = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let j = Math.round(Math.random() * i);
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
};
