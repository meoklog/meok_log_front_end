<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Homepage - meok log</title>
  <link rel="stylesheet"
        href="{{ url_for('static', filename='main.css') }}">
</head>
<body>

  <!-- @if NODE_ENV='dev' -->
  <div class="topbar__dev">
    <i>Development Build</i>
  </div>

  <!-- @endif -->

  <h1>Welcome to meok log!</h1>
  
  <div data-main="app"></div>
  <script src="{{ url_for('static', filename='main.js') }}" charset="utf-8"></script>
</body>
</html>
