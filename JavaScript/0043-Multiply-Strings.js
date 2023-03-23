// https://leetcode.com/problems/multiply-strings/

// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"
 

// Constraints:

// 1 <= num1.length, num2.length <= 200
// num1 and num2 consist of digits only.
// Both num1 and num2 do not contain any leading zero, except the number 0 itself.

var multiply = function(num1, num2)
{
    let a = num1;
    let b = num2;
    
    if(parseInt(a) == 0 || parseInt(b) == 0){return "0";}

    a = a.split('').reverse();
    b = b.split('').reverse();
    var result = [];

    for(var i = 0; a[i] >= 0; i++)
    {
        for(var j = 0; b[j] >= 0; j++)
        {
            if(!result[i + j]){result[i + j] = 0;}
            result[i + j] += a[i] * b[j];
        }
    }

    for(var i = 0; result[i] >= 0; i++)
    {
        if(result[i] >= 10)
        {
            if(!result[i + 1]){result[i + 1] = 0;}

            result[i + 1] += parseInt(result[i] / 10);
            result[i] %= 10;
        }
    }

    return result.reverse().join(''); 
}