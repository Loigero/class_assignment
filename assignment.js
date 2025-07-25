
<html>
<head>
<title>AJAX Joke Example</title>
</head>
<body>
<h2>Want a Joke?</h2>
<button onclick="getJoke()">Get Joke</button>
<p id="joke"></p>
<script>
function getJoke() {
fetch('https://api.chucknorris.io/jokes/random') // Step 1: Send AJAX request
.then(response => response.json()) // Step 2: Parse JSON response
.then(data => {
document.getElementById('joke').innerHTML = data.value; // Step 3: Display joke
})
.catch(error => {
console.error('Error:', error);
document.getElementById('joke').innerHTML = 'Failed to load joke.';
});
}
</script>
</body>
</html>
