import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
:root{
    --white: #fff;
    --background: #f2f3f5;
    --gray-line: #dcdde0;
    --text: #666666;
    --text-highlight: #b3b9ff;
    --title: #2e384d;
    --red: #e83f5b;
    --green: #4cd62b;
    --blue: #5965e0;
    --blue-dark: #4953b8;
    --blue-twitter: #2aa9e0;
}
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
body {
    color: var(--text);
    background-color: var(--background);
}
body, input, textarea, button {
    font: 400 1rem 'Inter', sans-serif;
}
button {
    cursor: pointer;
}
a {
    color: inherit;
    text-decoration: none;
}
@media(max-width: 1080px) {
    html {
        font-size: 93.75%;
    }
}
@media(max-width: 720px) {
    html {
        font-size: 87.5%;
    }
}

`

export default GlobalStyled