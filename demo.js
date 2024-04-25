const findMin = (nums) => {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] > nums[right]) {
            left = mid + 1;
            console.log(left)
        }
        else {
            right = mid;
            console.log(right)
        }
    }
    return nums[left];
}
const nums2 = [4, 5, 6, 7, 0, 1, 2];
findMin(nums2); 