import React, { Component } from 'react'
import { render } from 'react-dom'
import Library from './Library'


let bookList = [
{"title":"The Sun Also Rises", "author": "Earnest Hemingway" },
{"title":"Goldfinch", "author": "Donna Tartt" , "pages": 400},
{"title":"Fountainhead", "author": "Ayn rand" , "pages": 350}

]



render(
<Library books={bookList}/> ,
document.getElementById('root')
)