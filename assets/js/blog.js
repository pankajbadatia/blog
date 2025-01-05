document.addEventListener("DOMContentLoaded", function () {
    const posts = document.querySelectorAll(".blog-card");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const resetButton = document.getElementById("reset-filter");
    const yearTabs = document.querySelectorAll(".tree-toggle");
    const monthLinks = document.querySelectorAll(".tree-months a");

    // Sidebar Toggle
    yearTabs.forEach(tab => {
        tab.addEventListener("click", function () {
            const months = this.nextElementSibling;
            months.style.display = months.style.display === "block" ? "none" : "block";
        });
    });

    // Month Filtering
    monthLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const selectedMonth = this.dataset.month;

            posts.forEach(post => {
                const postMonth = post.getAttribute("data-month");
                post.style.display = postMonth === selectedMonth ? "block" : "none";
            });
        });
    });

    // Search Functionality
    searchButton.addEventListener("click", function () {
        const query = searchInput.value.toLowerCase();
        posts.forEach(post => {
            const title = post.querySelector(".blog-card-title a").innerText.toLowerCase();
            const excerpt = post.querySelector(".blog-card-excerpt").innerText.toLowerCase();
            post.style.display = title.includes(query) || excerpt.includes(query) ? "block" : "none";
        });
    });

    // Reset Filter
    resetButton.addEventListener("click", function () {
        searchInput.value = "";
        posts.forEach(post => post.style.display = "block");
    });
});
