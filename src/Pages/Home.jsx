import { useState, useEffect } from 'react'
import Task from '../Components/Task'
import TaskForm from './../Components/TaskForm'

import { BASE_URL } from './../Unils/Const'
import Loader from '../Components/Loader'


const Home = () => {
	const [data, setData] = useState()
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`${BASE_URL}/get_all_tasks`);
				const data =await response.json();
				
				setData(data);
				
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}

		fetchData();
	}, [])
	return (
		<>
			<TaskForm />
			<div className='mt-10'></div>
			{loading ? (
				<Loader/>
			) : (
				data.map(task => (
					<Task
						id={task.id}
						username={task.username}
						title={task.title}
						description={task.description}
						isFinished={task.is_finished}
						key={task.id}
					/>
				))
			)}
		</>
	)
}

export default Home