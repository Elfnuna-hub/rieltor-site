import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Advantages from '@/components/Advantages/Advantages'
import PopularProperties from '@/components/PopularProperties/PopularProperties'
import Feedback from '@/components/Feedback/Feedback'
import Consultation from '@/components/Consultation/Consultation'

function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Advantages />
			<PopularProperties />
			<Feedback />
			<Consultation />
		</>
	)
}

export default Home
