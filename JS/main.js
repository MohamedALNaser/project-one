let liNavArr = document.querySelectorAll("header  ul.hed li");
console.log(liNavArr);
let arr = ["work", "about", "blog", "contact"];
liNavArr.forEach(function (ele, i) {
	ele.classList.add(arr[i]);
	ele.innerHTML = `<a href="#${arr[i]} " style=" color: #000;font-size: 20px;text-decoration: none;"> ${arr[i]} </a>`;
});
