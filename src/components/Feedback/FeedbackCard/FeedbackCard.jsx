import '@/assets/svg/feedback/commentsHouseSvg.png'
import person from '@/assets/svg/feedback/person.svg'
import quotes from '@/assets/svg/feedback/quotes.svg'
import './FeedbackCard.scss'

function FeedbackCard() {
	return (
		<div className="feedback-card">
			<div className="feedback-card-info">
				<img
					className="person-svg"
					src={person}
					alt="person"
				/>
				<div className="person-details">
					<span className="name">Ірина К.</span>
					<span className="city">м. Миргород</span>
				</div>
			</div>
			<div className="feedback-card-main">
				<img
					src={quotes}
					alt="quotes"
					className="feedback-card-main-svg"
				/>
				<div className="feedback-card-main-text">
					<span className="text">
						Зверталися за допомогою у виборі будинку для нашої сім’ї. Дуже
						вдячні за підтримку на кожному етапі — від переглядів до оформлення
						документів. Все було чесно, професійно і з турботою.
					</span>
					<span className="date">18.10.2026</span>
				</div>
			</div>
		</div>
	)
}

export default FeedbackCard
