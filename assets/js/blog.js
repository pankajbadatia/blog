document.addEventListener("DOMContentLoaded", function () {
    // Sidebar Tree Menu Toggle
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

    // Search Functionality
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const query = this.value.toLowerCase();
            const posts = document.querySelectorAll(".blog-post-card, .blog-post-item");
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
