//问题1
const shoppingList = ["牛奶","鸡蛋", "面包"]; 
//问题2
shoppingList.push("番茄", "蓝莓");
console.log(shoppingList);
shoppingList.pop();
console.log(shoppingList);
//问题3.1
if (shoppingList.length > 5) {
console.log('你的购物车满了');
}
//问题3.2
let i = 0;
for (;i<shoppingList.length;) {
    console.log([i+1] + '.' + shoppinglist[i] + '<br>' );
    i++;
}

//问题4
//插入变量，将${}插入字符串中
function checkItem(item) {
    if (shoppingList.includes(item)) {
        return'${item} is in the shopping list.';
    } else {
        return'${item} is not in the shopping list.';
    }
}
//问题4.2
let item = {
    name: "鸡蛋",
    price: 16,
    quantity:1,
}




