const createElement = (parent,className,tag) => {
    const ele = document.createElement(tag)
    parent.appendChild(ele);
    ele.classList.add(className)

}

const showBookRecommend = (response) => {
    console.log('show');
};
const requestApi = () => {
  fetch('/recommend').then((response) => showBookRecommend(response));
};

window.onload = (e) => {
  requestApi();
};
document.querySelector('#button').addEventListener('click', () => {
    fetch('/search').then(res => res.json()).then(console.log)
})