import PropTypes from 'prop-types';
const Wrapper = ({children}) => {
    return <div className='bg-white w h-fit p-5 rounded-xl m-5 shadow-xl'>{children}</div>
   }
   Wrapper.propTypes = {
    children: PropTypes.string.isRequired
  };
   export default Wrapper