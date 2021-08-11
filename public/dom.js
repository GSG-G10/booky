<<<<<<< HEAD
const recommendedBooksCont = document.querySelector('.recommended-books');

const createElement = (parent, className, tag) => {
    const ele = document.createElement(tag);
    parent.appendChild(ele);
    ele.classList.add(className);
    return ele;
};

const showBookRecommend = (data, parentOf) => {
    console.log(data.items[0].volumeInfo);

    for (let i = 0; i < 12; i++) {

        const divParent = createElement(parentOf, 'card-cont', 'div');
        const coverImg = data.items[i].volumeInfo.imageLinks.thumbnail;
        const title = data.items[i].volumeInfo.title;
        const auther = data.items[i].volumeInfo.authors[0];
        const description = data.items[i].volumeInfo.description;
        createElement(divParent, 'img', 'div').style.backgroundImage = `url('${coverImg}')`;
        createElement(divParent, 'title', 'div').innerHTML = title;
        createElement(divParent, 'auther', 'div').innerHTML = auther;
        createElement(divParent, 'description', 'div').innerHTML = description;

    }
=======
// eslint-disable-next-line no-unused-vars
const createElement = (parent, className, tag) => {
  const ele = document.createElement(tag);
  parent.appendChild(ele);
  ele.classList.add(className);
};

const showBookRecommend = () => {
    console.log('show');
>>>>>>> e6d2803a242291470ba6df673cd325a1f365cd6e
};
const requestApi = () => {
    fetch('/recommend').then((response) => response.json())
        .then((data) => showBookRecommend(data, recommendedBooksCont));
};

window.onload = (e) => {
<<<<<<< HEAD
    requestApi();
};
=======
  requestApi();
};
document.querySelector('#button').addEventListener('click', () => {
  fetch('/search').then((res) => res.json()).then(console.log);
})
>>>>>>> e6d2803a242291470ba6df673cd325a1f365cd6e
