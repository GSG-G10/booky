const requestApi = (url, parent, index) => {
  fetch(url).then((response) => response.json())
    .then((data) => showBookRecommend(data, parent, index))
    .catch((err) => console.log(err));
};

const createElement = (parent, className, tag) => {
  const ele = document.createElement(tag);
  parent.appendChild(ele);
  ele.classList.add(className);
  return ele;
};
