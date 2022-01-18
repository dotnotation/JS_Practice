export const addSelectOptions = (dogs) => {
    const selectTag = document.querySelector(".dog-filter");
    ["All", ...new Set(dogs.map((dog) => dog.breed))].forEach((breed) => {
      selectTag.insertAdjacentHTML(
        "beforeend",
        `<option value="${breed}">${breed}</option>`
      );
    });
  };