const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const matches = selectedFilter === "all" || card.dataset.category === selectedFilter;
      card.classList.toggle("hidden", !matches);
    });
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
