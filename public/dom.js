const recommendedBooksCont = document.querySelector('.recommended-books');
const inputField = document.querySelector('#search-input');
const searchBtn = document.querySelector('#button');
const searchSection = document.querySelector('.search-result-section');
const errMsg = document.querySelector('.err-msg');

const showBookRecommend = (data, parentOf, index) => {
  const dataArr = data.items;
  for (let i = 0; i < index; i += 1) {
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

requestApi('/recommend', recommendedBooksCont, 20);

// Search section

inputField.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    searchBtn.click();
  }
});
// client side input handler
const showResult = () => {
  if (!inputField.value) {
    errMsg.textContent = '*enter your book to search';
    return;
  }
  errMsg.textContent = '';
  searchSection.textContent = '';
  const inputText = inputField.value;
  const query = inputText.split(' ').join('-');
  createElement(searchSection, 'results-title', 'h2').textContent = 'Results'
  requestApi(`/search?q=${query}`, searchSection, 5);
  inputField.value = '';
};
searchBtn.addEventListener('click', showResult);
