import React, { Component } from 'react'

export const Book = ({title="No title",author="No author", pages=0, freeBookmark}) => {
	return(
<section>
<h2>{title}</h2>
<p>by: {author}</p>
<p>pages: {pages} pages</p>
<p>free book mark today : {freeBookmark ? 'yes!':'no!'}</p>
</section>
		)
}