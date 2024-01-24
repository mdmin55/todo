<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
import DoneIcon from '@mui/icons-material/Done'
import DoneAllIcon from '@mui/icons-material/DoneAll'
import DeleteIcon from '@mui/icons-material/Delete'

import { BASE_URL } from '../Unils/Const.js'
import PropTypes from 'prop-types';

const Task = ({ username, title, isFinished, id }, key) => {
	const deleteTask = async (e) => {
		e.preventDefault();
		await fetch(`${BASE_URL}/delete_task?task_id=${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		}
		});
		history.go(0);
	};

	const finished = async(e) => {
		e.preventDefault()
		await fetch(`${BASE_URL}/update_task?task_id=${id}`, {
			method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
		body: JSON.stringify({is_finished:true})	
		});
		history.go(0)
	};

	return (
		<div className='bg-main p-2 mt-2 rounded-lg' key={key}>
			<div className='flex justify-between'>
				<p className='text-xl font-bold'>
					[{username}] {title.charAt(0).toUpperCase() + title.slice(1)}:
				</p>
				<div className='flex gap-x-1'>
					{isFinished == true ? (
						<>
							<DoneAllIcon
								sx={{ fontSize: 35 }}
								className='rounded-full p-1 hover:bg-black/20'
							/>
							<button type='submit' onClick={deleteTask}>
								<DeleteIcon
									sx={{ fontSize: 35 }}
									className='rounded-full p-1 hover:bg-black/20'
								/>
							</button>
						</>
					) : (
						<button type='submit' onClick={finished}>
							<DoneIcon
								sx={{ fontSize: 35 }}
								className='rounded-full p-1 hover:bg-black/20'
							/>
						</button>
					)}
				</div>
			</div>
			<p
				className={`text-lg font-semibold ${
					isFinished == true ? 'line-through text-black/20' : ''
				}`}
			>
				
			</p>
		</div>
	)
}
Task.propTypes = {
    username: PropTypes.string.isRequired,
    title: PropTypes.func.isRequired,
	description: PropTypes.func.isRequired,
	id: PropTypes.func.isRequired,
	isFinished: PropTypes.func.isRequired
  };

export default Task