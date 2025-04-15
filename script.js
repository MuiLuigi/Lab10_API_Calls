//Task 1
document.getElementById('button1').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            displayData(data);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function displayData(data) {
    const tableBody = document.getElementById('data');
    tableBody.innerHTML = 'Data title: ' + data.title + ' - Data body: ' + data.body; // Clear previous data
}


//Task 2
