// console.log("hello world");
var hit = 0;

function changeImage() {
    // console.log("abc");
    var img = document.getElementById("comic");

    hit = hit + 1;
    // console.log(hit);
    if (hit % 2 == 0) { // 如果是偶数
        img.src = "images/b.jpg";
        // console.log("偶数");
        // 尝试改变样式
        img.style.border = "5px solid blue";
    } else {
        img.src = "images/a.jpg";
        // console.log("奇数");
        img.style.border = "5px solid green";
    }
}
