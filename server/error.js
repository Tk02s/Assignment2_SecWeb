const errorMessage=`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Unauthorized Access</title>
  <style>
    body {
      margin: 0;
      height: 100vh;
      background-color: #ff4d4d;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .error-box {
      background-color: #fff;
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
      text-align: center;
      max-width: 500px;
    }

    .error-box h1 {
      color: #d8000c;
      margin-bottom: 20px;
    }

  </style>
</head>
<body>
  <div class="error-box">
    <h1>🚫 You are not authorized to access this page</h1>
    
  </div>
</body>
</html>
`;
module.exports={errorMessage}