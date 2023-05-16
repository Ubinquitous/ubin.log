import axios from 'axios'
import React from 'react'

const Home = () => {
	React.useEffect(() => {
		axios.get('api/category').then((r) => {
			console.log(r)
		})
	})

	return <div>h1</div>
}

export default Home
