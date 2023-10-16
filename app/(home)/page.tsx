import AboutGala from "./components/about-gala/about-gala";
import Hero from "./components/hero";

export default function Home() {
	return (
		<main className="min-h-screen">
			<Hero />
			<AboutGala />
		</main>
	);
}
