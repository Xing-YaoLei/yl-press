# 力扣
## 1. 两数之和

给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值  target  的那 两个 整数，并返回它们的数组下标。[](https://leetcode.cn/problems/two-sum)

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。
示例 1：

> 输入：nums = [2,7,11,15], target = 9
>
> 输出：[0,1]
>
> 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

示例2：

> 输入：nums = [3,2,4], target = 6
>
> 输出：[1,2]

示例 3：

>输入：nums = [3,3], target = 6
>
>输出：[0,1]

题解：

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(!nums) return []
    let m = new Map()
    for(let i = 0; i < nums.length; i++){
        let cut = target - nums[i]
        if(m.has(cut)){
            return [m.get(cut),i]
        }
        m.set(nums[i],i)
    }
};
```

## 7. 整数反转

给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。[](https://leetcode.cn/problems/reverse-integer)

如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

假设环境不允许存储 64 位整数（有符号或无符号）。

示例 1：

```
输入：x = 123
输出：321
```

示例2：

```
输入：x = -123
输出：-321
```

示例 3：

```
输入：x = 120
输出：21
```

示例 4：

```
输入：x = 0
输出：0
```

**提示：**

- `-231 <= x <= 231 - 1`

题解：

```js
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let flag = false
    if(x < 0){
        x = -x
        flag = true
    }
    let result = x.toString().split('').reverse().join('')
    if(flag == true){
        result = '-' + x.toString().split('').reverse().join('')
    }
    return result > 2147483647 || result < -2147483647 ? 0 : result
};
```

