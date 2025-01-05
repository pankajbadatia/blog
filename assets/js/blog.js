document.addEventListener("DOMContentLoaded", function () {
    const posts = document.querySelectorAll(".blog-card");
    const searchInput = document.getElementById("search-input");
    const resetButton = document.getElementById("reset-filter");
    const yearTabs = document.querySelectorAll(".year-tab");
    const monthTabsContainer = document.querySelector(".month-tabs");

    // Generate Month Tabs Dynamically
    yearTabs.forEach((tab) => {
        tab.addEventListener("click", function () {
            const selectedYear = this.dataset.year;

            // Clear existing months
            monthTabsContainer.innerHTML = "";

            // Generate months dynamically
            const months = Array.from(posts)
                .filter(post => post.dataset.month.startsWith(selectedYear))
                .map(post => post.dataset.month.split("-")[1])
                .filter((value, index, self) => self.indexOf(value) === index); // Unique months

            months.forEach((month) => {
                const monthButton = document.createElement("button");
                monthButton.classList.add("month-tab");
                monthButton.innerText = month;
                monthButton.dataset.month = `${selectedYear}-${month}`;
                monthTabsContainer.appendChild(monthButton);

                // Month Filtering
                monthButton.addEventListener("click", function () {
                    const selectedMonth = this.dataset.month;
                    posts.forEach(post => {
                        post.style.display = post.dataset.month === selectedMonth ? "block" : "none";
                    });
                });
            });

            // Show all posts for the selected year
            posts.forEach(post => {
                post.style.display = post.dataset.month.startsWith(selectedYear) ? "block" : "none";
            });
        });
    });

    // Search Functionality
    searchInput.addEventListener("input", function () {
        const query = this.value.toLowerCase();
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
