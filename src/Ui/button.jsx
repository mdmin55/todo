import PropTypes from 'prop-types';
const Button = ({ text, click }) => {
	return (
		<button
			className='outline-none border-none self-center w-[250px] bg-main p-2 rounded-lg text-xl font-bold shadow-lg duration-200 hover:bg-hover'
			type='submit'
			onClick={click}
		>
			{text}
		</button>
	)
}
Button.propTypes = {
    text: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired
  };
export default Button