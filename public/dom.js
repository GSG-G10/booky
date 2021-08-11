const createElement = (parent,class,tag) => {
    const ele = document.createElement(tag)
    parent.appendChild(ele);
    ele.classList.add(class)

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