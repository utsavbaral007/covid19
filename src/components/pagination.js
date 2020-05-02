import React from 'react'
import '../App.css'
export default function Pagination(props) {
	const pageNumbers = []
	for (
		let i = 1;
		i <= Math.ceil(props.totalCountries / props.postPerPage);
		i++
	) {
		pageNumbers.push(i)
	}
	return (
		<div className="pagination">
			{pageNumbers.map((numbers) => (
				<a
					onClick={() => {
						props.paginate(numbers)
					}}
				>
					{numbers}
				</a>
			))}
		</div>
	)
}
