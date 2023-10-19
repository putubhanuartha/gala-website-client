import AboutGala from "./components/about-gala/about-gala";
import Greetings from "./components/greetings/greetings";
import Hero from "./components/hero";
import Throwback from "./components/throwback/throwback";
import Performance from "./components/performance/performance";
export default function Home() {
	return (
		<main className="min-h-screen">
			<Hero />
			<AboutGala />
			<Greetings />
			<Performance/>
			<Throwback />
			
		</main>
	);
}
