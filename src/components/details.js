import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Summary from './summary'
import '../App.css'
import Pagination from './pagination'

export default function Details() {
	const [countries, setCountries] = useState([])
	const [date, setDate] = useState(null)
	const [global, setGlobal] = useState([])
	const [loading, setLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const [postPerPage] = useState(25)

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber)
	}

	useEffect(() => {
		const getSummary = async () => {
			const response = await axios.get('https://api.covid19api.com/summary')
			const data = response.data
			console.log(data.Countries)
			setCountries(data.Countries)
			setGlobal(data.Global)
			setDate(data.Date)
			setLoading(false)
		}
		getSummary()
	}, [])

	const indexOfLastPage = currentPage * postPerPage
	const indexofFirstPage = indexOfLastPage - postPerPage
	const currentPages = countries.slice(indexofFirstPage, indexOfLastPage)

	if (loading)
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		)
	return (
		<div>
			<Summary summary={global} currentDate={date} />
			<table>
				<thead>
					<tr>
						<th>Country</th>
						<th>New Confirmed</th>
						<th>New Deaths</th>
						<th>Total Deaths</th>
						<th>New Recovered</th>
						<th>Total Recovered</th>
					</tr>
				</thead>
				<tbody>
					{currentPages.map((country) => (
						<tr key={country.CountryCode}>
							<td>{country.Country}</td>
							<td>{country.NewConfirmed}</td>
							<td>{country.NewDeaths}</td>
							<td>{country.TotalDeaths}</td>
							<td>{country.NewRecovered}</td>
							<td>{country.TotalRecovered}</td>
						</tr>
					))}
				</tbody>
			</table>
			<Pagination
				postPerPage={postPerPage}
				totalCountries={countries.length}
				paginate={paginate}
			/>
		</div>
	)
}
