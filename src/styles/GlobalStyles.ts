import { memo } from 'react'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    padding:0;
    margin:0;
    vertical-align:baseline;
    list-style:none;
    border:0;
    font-family: serif;
}

html, body, #root {
    height: 100vh;
    background-color: #252B42;
}

a {
    color: inherit;
    text-decoration: none;
}

`
export default memo(GlobalStyle)
