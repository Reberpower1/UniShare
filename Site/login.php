<?php
echo 'PHP is working';
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $email = $_POST["email"];
    $password = $_POST["password"];

    // TODO: Add your login logic here

    // Example login logic
    if ($email == "admin@example.com" && $password == "password") {
        // Successful login
        echo "Login efetuado com sucesso!";
    } else {
        // Invalid credentials
        // Connect to the database
        $servername = getenv("DB_HOST");
        $dbusername = getenv("DB_USERNAME");
        $dbpassword = getenv("DB_PASSWORD");
        $dbname = getenv("DB_NAME");

        $conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Prepare and execute the SQL query
        $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
        $result = $conn->query($sql);

        // Check if the query returned any rows
        if ($result->num_rows > 0) {
            // Successful login
            echo "Login efetuado com sucesso!";
        } else {
            // Invalid credentials
            echo "Password ou nome de utilizador inválidos!";
        }

        // Close the database connection
        $conn->close();
        echo "Password ou nome de utilizador inválidos!";
    }
}

?>

<!-- HTML form for login -->
<form method="POST" action="">
    <label for="username">Username:</label>
    <input type="text" name="username" id="username" required><br>

    <label for="password">Password:</label>
    <input type="password" name="password" id="password" required><br>

    <input type="submit" value="Login">
</form>