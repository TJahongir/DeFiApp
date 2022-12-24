import "./styles/App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeatureOne from "./components/FeatureOne";
import DailyStats from "./components/DailyStats";

function App() {
	return (
		<div className="App">
			<Header />
			<HeroSection />
			<FeatureOne />
			<DailyStats />
		</div>
	);
}

export default App;
