/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 双for暴力解题
// let twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }
//
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));

// 哈希表
let twoSum2 = (nums, target) => {
  let ids = new Map(); // 创建一个空的 Map 用于存储数字及其索引
  for (let i = 0; i < nums.length; i++) { // 遍历数组 nums
    if (ids.has(target - nums[i])) { // 检查 Map 中是否有一个数值，这个数值为 target - nums[i]
      return [ids.get(target - nums[i]), i]; // 如果存在，返回这个数值的索引和当前数值的索引
    }
    ids.set(nums[i], i); // 如果不存在，将当前数值及其索引存入 Map
  }
}
console.log(twoSum2([2, 7, 11, 15], 9));
console.log(twoSum2([3, 2, 4], 6));
console.log(twoSum2([3, 3], 6));
