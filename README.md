#class codes that were done in class

Two basic web development projects demonstrating server-side and client-side programming.

## Project 1: Simple HTTP Server (Node.js)

**What it does:** Creates a web server that responds with "Hello, world!" to any request.

**How to run:**
1. Save code as `server.js`
2. Run `node server.js`
3. Open `http://localhost:3000` in browser

**Key concepts:**
- Creates HTTP server using Node.js
- Listens on port 3000
- Sends plain text response

## Project 2: AJAX Joke Fetcher (HTML/JavaScript)

**What it does:** Web page with a button that fetches random Chuck Norris jokes without refreshing the page.

**How to run:**
1. Save code as `joke-fetcher.html`
2. Open file in web browser
3. Click "Get Joke" button

**Key concepts:**
- Uses Fetch API to call external joke API
- Updates page content dynamically
- Handles errors gracefully

## Main Differences

| Node.js Server | AJAX Client |
|----------------|-------------|
| Runs on server | Runs in browser |
| Serves content | Requests content |
| Needs Node.js | Needs internet connection |

## Requirements

- **Server:** Node.js installed
- **Client:** Modern web browser with internet

Both examples demonstrate fundamental web development concepts in simple, working code.
