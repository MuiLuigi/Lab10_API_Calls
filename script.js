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
document.getElementById('button2').addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/2', true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) { // 4 means the request is complete
            if (xhr.status === 200) { // 200 means the request was successful
                const data = JSON.parse(xhr.responseText);
                console.log(data);
                displayData(data);
            } else {
                console.error('Error fetching data:', xhr.statusText);
            }
        }
    };

    xhr.errorMessage = function() {
        dispayError('The request failed. Please check the connection.');
    }

    xhr.send();
});

function displayData2(data2) {
    const tableBody2 = document.getElementById('data');
    tableBody2.innerHTML = 'Data title: ' + data2.title + ' - Data body: ' + data2.body; // Clear previous data
}


//Task 3
window.onload = function() {
    document.getElementById('formRegistration').addEventListener('submit', formSubmission);
    document.getElementById('update').addEventListener('click', postUpdate);
}

function formSubmission(s) {
    s.preventDefault();
    const dataTitle = document.getElementById('name').value;
    const dataContent = document.getElementById('username').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: dataTitle,
            body: dataContent
        })
    }) 
    .then(response => {
        if (!response.ok) {
            throw new Error('POST failed');
        }
        return response.json();
    })
    .then(responseData => {
        displayData3(responseData);
    })
    .catch(error => {
        console.error("Error fetching the data", error);
    })
}

function displayData3(data3) {
    const tableBody3 = document.getElementById('data');
    tableBody3.innerHTML = 'The form has been submitted successfully!' + '\nData title: ' + data3.title + ' - Data body: ' + data3.body + ' - ' + data3.id; // Clear previous data
}


//Task 4
function postUpdate() {
    const updatedTitle = document.getElementById('name2').value;
    const updatedContent = document.getElementById('username2').value;
    const id = document.getElementById('updates').value;

    if (!updatedContent || !updatedTitle) {
        return "Error. Please enter the field";
    }

    const xhr = new XMLHttpRequest();
    xhr.open('PUT', `https://jsonplaceholder.typicode.com/posts/${id}`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) { // 4 means the request is complete
            if (xhr.status === 200) { // 200 means the request was successful
                const data = JSON.parse(xhr.responseText);
                console.log(data);
                displayData(data);
            } else {
                console.error('Error fetching data:', xhr.statusText);
            }
        }
    };

    xhr.onerror = function() {
        displayError("Network error during request.");
    }

    const updates = JSON.stringify({
        title: updatedTitle,
        body: updatedContent
    });

    xhr.send(updates);
}