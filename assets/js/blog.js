document.addEventListener("DOMContentLoaded", function () {
    const posts = document.querySelectorAll(".blog-post-card");
    const monthLinks = document.querySelectorAll(".tree-months a");
    const searchInput = document.getElementById("search-input");
    const resetButton = document.getElementById("reset-filter");

    // Sidebar Tree Menu Toggle
    document.querySelectorAll(".tree-toggle").forEach(toggle => {
        toggle.addEventListener("click", function () {
            const sibling = this.nextElementSibling;
            sibling.style.display = sibling.style.display === "block" ? "none" : "block";
        });
    });

    // Month Filtering
    monthLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const filterMonth = this.getAttribute("data-month");

            posts.forEach(post => {
                const postMonth = post.getAttribute("data-month");
                post.style.display = postMonth === filterMonth ? "block" : "none";
            });
        });
    });

    // Search Functionality
    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const query = this.value.toLowerCase();
            posts.forEach(post => {
                const title = post.querySelector(".blog-post-title a").innerText.toLowerCase();
                post.style.display = title.includes(query) ? "block" : "none";
            });
        });
    }

    // Reset Filter
    if (resetButton) {
        resetButton.addEventListener("click", function () {
            searchInput.value = "";
            posts.forEach(post => (post.style.display = "block"));
        });
    }
});
