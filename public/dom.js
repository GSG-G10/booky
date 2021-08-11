const requestApi = () => {
    fetch('/recommend').then((response) => {
        showBookRecommend(response);
    });
};
const showBookRecommend = (response) => {
    console.log(response);
}
requestApi();