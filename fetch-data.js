document.addEventListener('DOMContentLoaded', function() {
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const dataContainer = document.getElementById('api-data');
        
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const users = await response.json();

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create a list to hold the user names
            const userList = document.createElement('ul');

            // Loop through the users and create a list item for each name
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            // Append the list to the data container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Clear the loading message and display an error message
            dataContainer.innerHTML = '';
            dataContainer.textContent = 'Failed to load user data.';
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    // Invoke the fetchUserData function on DOMContentLoaded
    fetchUserData();
});
