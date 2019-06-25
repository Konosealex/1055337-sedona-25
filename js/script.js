var searchForm = document.querySelector(".hotels-search-form");
var hotelSearchButton = document.querySelector(".interested-button-search");
var dateIn = searchForm.querySelector("[name = date-out]");
var dateOut = searchForm.querySelector("[name = date-in]");
var adults = searchForm.querySelector("[name = adult-number]");

searchForm.classList.add("form-hidden");

hotelSearchButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchForm.classList.toggle("form-hidden");
  if (searchForm.classList.contains("form-error")) {
    searchForm.classList.remove("form-error");
  }
});

searchForm.addEventListener("submit", function (evt) {
  if (searchForm.classList.contains("form-error")) {
    searchForm.classList.remove("form-error");
    getComputedStyle(searchForm).color;
  };
  if (!dateIn.value || !dateOut.value || !adults.value || adults.value==0) {
    evt.preventDefault();
    searchForm.classList.add("form-error");
  }
});
