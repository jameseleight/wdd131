let numberReviews = getNumberReviews() || 0;
numberReviews++;
setNumberReviews();
const pageNumReviews = document.getElementById("numReviews")
pageNumReviews.textContent = numberReviews;

function setNumberReviews() {
  localStorage.setItem('TotalNumberOfReviews', JSON.stringify(numberReviews));
}

function getNumberReviews() {
  return JSON.parse(localStorage.getItem('TotalNumberOfReviews'));
}