const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  console.log(method);
  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment No 1</title><head>');
    res.write('<body>');
    res.write('<h1>User List</h1>');
    res.write('<ul>');
    res.write('<li><b>Name:</b> User 1</li>');
    res.write('<li><b>Name:</b> User 2</li>');
    res.write('<li><b>Name:</b> User 3</li>');
    res.write('<li><b>Name:</b> User 4</li>');
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  } else if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      console.log(message);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  } else if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment No 1: Enter User</title><head>');
    res.write('<h1>Create User</h1>');
    res.write('<form method="POST" action="/create-user" >');
    res.write('Name: <input name="name" type="text"><br><br>');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    res.write('Assignment 1');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Assignment No 1: Not Found</title><head>');
  res.write('<h1>The route is not catter for, Sorry!</h1>');
  res.write('<p>Return <a href="/" title="home" >Home</a>');
  res.write('</body>');
  res.write('</html>');
  res.end();
};
module.exports = requestHandler;
