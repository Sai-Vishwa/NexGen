console.log("Hi");
function trigger(){
    const date = document.getElementById('date');
    const area = document.getElementById('area');
    fetch("/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            date: date.value,   // No need for template literals if you're just accessing the value
            area: area.value
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);  // Optional: Handle errors more gracefully
    });
    
}