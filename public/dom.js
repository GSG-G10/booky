const showBookRecommend = (response) => {
    console.log("show");
};
const requestApi = () => {
    fetch('/recommend').then((response) => showBookRecommend(response));
};

window.onload = (e) => {
    requestApi();
}