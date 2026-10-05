import heroRieltor from '@/assets/jpg/heroRieltor.png'
import calendar from '@/assets/svg/hero/calendar.svg'
import human from '@/assets/svg/hero/human.svg'
import prize from '@/assets/svg/hero/prize.svg'
import GreenButton from '@/components/ui/GreenButton/GreenButton'
import './Hero.scss'

function Hero() {
	return (
		<section className="hero">
			<div className="container hero-container">
				<div className="info-block">
					<div className="info-block-text">
						<span className="info-block-suptitle">
							Нерухомість Полтавської області
						</span>
						<h1 className="info-block-title">
							Знайдіть свій ідеальний <br />
							дім на <span>Полтавщині</span>
						</h1>
						<div className="info-block-subtitle">
							Квартири, будинки, котеджі, земельні ділянки <br />
							та комерційна нерухомість — усе в одному місці
						</div>
					</div>
					<div className="info-block-buttons">
						<GreenButton>Відкрити каталог</GreenButton>
						<button className="salary-button">Продати нерухомість</button>
					</div>
					<div className="achivment-block">
						<ul className="achivment-list">
							<li className="achivment-item">
								<img
									src={human}
									alt="#"
								/>
								<span className="achivment-text">
									<span>1000+</span>
									<br />
									задоволених клієнтів
								</span>
							</li>
							<li className="achivment-item">
								<img
									src={prize}
									alt="#"
								/>
								<span className="achivment-text">
									<span>500+</span>
									<br />
									успішних угод
								</span>
							</li>
							<li className="achivment-item">
								<img
									src={calendar}
									alt="#"
								/>
								<span className="achivment-text">
									<span>5 років</span>
									<br />
									на ринку нерухомості
								</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="rieltor-block">
					<img
						src={heroRieltor}
						alt="#"
						className="rieltor-img"
					/>
					<div className="rieltor-block-insert">
						<div className="rieltor-block-text">
							<div className="rieltor-title">
								<span className="rieltor-name">Юрій Бражненко</span>
								<span className="rieltor-subtitle">Рієлтор</span>
							</div>
							<span className="rieltor-block-subtitle">
								Допоможу знайти нерухомість, <br />
								яка вам підходить.
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
