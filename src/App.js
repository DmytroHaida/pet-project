import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Content from './components/Content';
import Header from './components/Header';
function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Content />
				<div className="footer">React PIZZA ©2021</div>
			</div>
		</BrowserRouter>
	);
}
export default App;
