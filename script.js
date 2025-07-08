// Load and display users on homepage
if (location.pathname.endsWith("index.html") || location.pathname.endsWith("/")) {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const users = data;  // Flat list of users
        const tbody = document.querySelector("#user-table tbody");

        users.forEach(user => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><a href="profile.html?name=${encodeURIComponent(user.Name)}">${user.Name}</a></td>
                <td>${user.Score}</td>
                <td>${user.Rating}</td>
            `;
            tbody.appendChild(tr);
        });
    });
}

// Load profile data
if (location.pathname.endsWith("profile.html")) {
    const params = new URLSearchParams(location.search);
    const userName = params.get("name");

    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const users = data;
        const user = users.find(u => u.Name === userName);

        if (user) {
            document.getElementById("user-name").textContent = user.Name;

            const detailsDiv = document.getElementById("user-details");
            Object.entries(user).forEach(([key, value]) => {
                const p = document.createElement("p");
                p.textContent = `${key}: ${value}`;
                detailsDiv.appendChild(p);
            });
        } else {
            document.getElementById("profile-container").innerHTML = "<h2>User not found</h2>";
        }
    });
}
