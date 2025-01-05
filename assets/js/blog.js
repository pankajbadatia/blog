document.addEventListener("DOMContentLoaded", function () {
    // Sidebar Tree Menu Toggle (Year and Month Collapse)
    const toggles = document.querySelectorAll(".tree-toggle");
    toggles.forEach((toggle) => {
        toggle.addEventListener("click", function () {
            const nextElement = this.nextElementSibling;
            if (nextElement.style.display === "block") {
                nextElement.style.display = "none";
            } else {
                nextElement.style.display = "block";
            }
        });
    });

    // Month Filtering for Posts
    const monthLinks = document.querySelectorAll(".tree-months a");
    const posts = document.querySelectorAll(".blog-post-card, .blog-post-item");

    monthLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Get selected year-month key
            const filterKey = this.getAttribute("href").substring(1);

            // Show/hide posts based on the selected filter
            posts.forEach((post) => {
                const postDate = post.querySelector(".blog-post-date").textContent.trim();
                const postYear = new Date(postDate).getFullYear();
                const postMonth = new Date(postDate).toLocaleString("default", { month: "long" });

                if (`${postYear}-${postMonth}` === filterKey) {
                    post.style.display = "block";
                } else {
                    post.style.display = "none";
                }
            });
        });
    });

    // Search Functionality
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const query = this.value.toLowerCase();
            posts.forEach((post) => {
                const title = post.querySelector("h3, a").innerText.toLowerCase();
                if (title.includes(query)) {
                    post.style.display = "block";
                } else {
                    post.style.display = "none";
                }
            });
        });
    }
});
