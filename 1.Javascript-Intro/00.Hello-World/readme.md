# JavaScript - Hello world !

### Learning Goals

- How do I add JavaScript to an HTML document ?
- What is the JavaScript console ?
- How do I display something in the console ?

## JavaScript and HTML

Just like with CSS, if you want to add JavaScript to your website, you have to include it in your HTML. There are two different ways of adding your script to your page. 

Adding a `<script>` tag to your page allows you to embed JavaScript code directly in your HTML.

```html
<script>
  // Your JS code
</script>
```

It's better to have your JavaScript code in a separate file. You can link to your script by using the same `<script>` tag with an `src` property which points to you script.


```html 
<script src='path/to/script.js'></script>
```

When you add a `<script>` to your page, you should include it before the closing `</body>` tag. This way you ensure that the visual elements (HTML and CSS) are loaded first.

## Hello world!

Time to create a webpage with JavaScript. Create an HTML document and add a `<script>` tag to the end of the `<body>`. 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
</head>
<body>
    <script>
      // your JS code
    </script>
</body>
</html>
```

Next, we want to display the message 'Hello World' in the console. 

When working with JavaScript the console is a very useful tool to debug your code. There are different ways to output something from your JavaScript code to the console. In this example we will be using the [console.log()](https://developer.mozilla.org/en-US/docs/Web/API/Console/log) function.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
</head>
<body>
    <script>
      console.log('Hello World');
    </script>
</body>
</html>
```

When you save this document and open it in the browser you won't see anything displayed on our webpage. 
Next, open the developer tools in your browser and navigate to the console. Is there any output in the console? 

**Return to**:  [Overview](../)  
