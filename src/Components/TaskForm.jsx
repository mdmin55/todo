import { useState } from 'react'
import Button from '../Ui/button'
import { BASE_URL, BASE_USER } from '../Unils/Const'

const TaskForm = () => {
	const [task, setTask] = useState({
		title: '',
		description: '',
		username: BASE_USER,
	})

	const addTask = async (e) => {
		e.preventDefault()
		await fetch(`${BASE_URL}/create_task/`, {
			method:'POST',
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify({
				title: task.title,
				description: task.description,
				username: task.username
				
		})
		
	})
	// history.go(0)
	}
	
	return (
		<form className='flex flex-col gap-y-4'>
			<div className='flex flex-col gap-y-2'>
				<label placeholder='What are your plans?' htmlFor='title' className='text-xl font-bold'>
					<p className='ml-[260px]'>Задача</p>
				</label>
				<input
					type='text'
					name='title'
					id='title'
					className='bg-main shadow-lg border-none  outline-none p-2 self-center w-[500px] rounded-xl font-semibold'
					onChange={e => setTask({ ...task, [e.target.name]: e.target.value })}
				/>
			</div>
			{/* <div className='flex flex-col gap-y-2'>
				<label htmlFor='description' className='text-xl font-bold'>
					Описание
				</label>
				<textarea
					type='text'
					name='description'
					id='description'
					className='bg-main shadow-lg border-none outline-none p-2 rounded-xl font-semibold'
					onChange={e => setTask({ ...task, [e.target.name]: e.target.value })}
				/>
			</div> */}
			<Button text={'Добавить'} click={addTask} />
		</form>
	)
}

export default TaskForm