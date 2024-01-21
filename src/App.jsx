import Header from './Components/Header'
import Wrapper from './Components/Wrapper'
import Home from './Pages/Home'


function App() {
	return (
		<>
			<Wrapper>
				<Header />
				<h1 className='underline'></h1>
				<Home />
			</Wrapper>
		
		</>
	)
}

export default App