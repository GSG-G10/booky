const recommendedBooksCont = document.querySelector('.recommended-books');

const createElement = (parent, className, tag) => {
  const ele = document.createElement(tag);
  parent.appendChild(ele);
  ele.classList.add(className);
  return ele;
};
const showBookRecommend = (data, parentOf) => {
  const dataArr = data.items;
  for (let i = 0; i < 12; i += 1) {
    const dataKeys = Object.keys(dataArr[i]);
    if (dataKeys.indexOf('volumeInfo') > 0) {
      const divParent = createElement(parentOf, 'card-cont', 'div');
      const coverImg = dataArr[i].volumeInfo.imageLinks.thumbnail;
      const { title } = dataArr[i].volumeInfo;
      const auther = dataArr[i].volumeInfo.authors;
      const { description } = dataArr[i].volumeInfo;
      createElement(divParent, 'img', 'img').src = coverImg;
      createElement(divParent, 'title', 'div').textContent = title;
      createElement(divParent, 'auther', 'div').textContent = auther;
      createElement(divParent, 'description', 'div').textContent = description;
    }
  }
};
const requestApi = () => {
  fetch('/recommend').then((response) => response.json())
    .then((data) => showBookRecommend(data, recommendedBooksCont))
    .catch((err) => console.log(err.message));
};

requestApi();
document.querySelector('#button').addEventListener('click', () => {
  fetch('/search').then((res) => res.json()).then(console.log);
});
