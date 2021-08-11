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
};
const requestApi = () => {
    fetch('/recommend').then((response) => response.json())
        .then((data) => showBookRecommend(data, recommendedBooksCont));
};

window.onload = (e) => {
    requestApi();
};