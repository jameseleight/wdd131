let numberReviews = getNumberReviews() || 0;
numberReviews++;
setNumberReviews();

function setNumberReviews() {
  localStorage.setItem('TotalNumberOfReviews', JSON.stringify(numberReviews));
}

function getNumberReviews() {
  return JSON.parse(localStorage.getItem('TotalNumberOfReviews'));
}