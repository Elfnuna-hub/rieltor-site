import './Advantages.scss'

import advantagesChoose from '@/assets/svg/advantages/advantagesChoose.svg'
import advantagesHome from '@/assets/svg/advantages/advantagesHome.svg'
import advantagesManager from '@/assets/svg/advantages/advantagesManager.svg'
import advantagesTrust from '@/assets/svg/advantages/advantagesTrust.svg'

function Advantages() {
	return (
		<section className="advantages">
			<div className="container advantages-container">
				<div className="advantages-info">
					<h3 className="advantages-title">Чому обирають саме нас?</h3>
					<span className="advantages-subtitle">
						Ми робимо, для вас, процес купівлі, продажу та оренди <br />
						нерухомості простим, безпечним та комфортним.
					</span>
				</div>
				<ul className="advantages-list">
					<li className="advantages-item">
						<div className="advantages-item-circle">
							<img
								className="adnvantages-item-circle-img"
								src={advantagesHome}
								alt="#"
							/>
						</div>
						<div className="advantages-item-text">
							<span className="advantages-item-title">Великий вибір</span>
							<span className="advantages-item-subtitle">
								Актуальні об’єкти по всій Полтавській області
							</span>
						</div>
					</li>
					<li className="advantages-item">
						<div className="advantages-item-circle">
							<img
								className="adnvantages-item-circle-img"
								src={advantagesManager}
								alt="#"
							/>
						</div>
						<div className="advantages-item-text">
							<span className="advantages-item-title">Особистий менеджер</span>
							<span className="advantages-item-subtitle">
								Супровід на всіх етапах угоди
							</span>
						</div>
					</li>
					<li className="advantages-item">
						<div className="advantages-item-circle">
							<img
								className="adnvantages-item-circle-img"
								src={advantagesTrust}
								alt="#"
							/>
						</div>
						<div className="advantages-item-text">
							<span className="advantages-item-title">
								Перевірена нерухомість
							</span>
							<span className="advantages-item-subtitle">
								Юридична чистота та безпека
							</span>
						</div>
					</li>
					<li className="advantages-item">
						<div className="advantages-item-circle">
							<img
								className="adnvantages-item-circle-img"
								src={advantagesChoose}
								alt="#"
							/>
						</div>
						<div className="advantages-item-text">
							<span className="advantages-item-title">Досвід та репутація</span>
							<span className="advantages-item-subtitle">
								Більше 5 років на ринку нерухомості
							</span>
						</div>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default Advantages
