import './Feedback.scss'
import FeedbackCard from './FeedbackCard/FeedbackCard'

function Feedback() {
	return (
		<section className="feedback">
			<div className="container feedback-container">
				<div className="feedback-side-text">
					<h2>Відгуки наших клієнтів</h2>
					<span>
						Реальні історії людей, які знайшли своє житло разом з нами. Дякуємо за довіру!
					</span>
				</div>
				<div className="feedback-cards">
					<FeedbackCard />
					<FeedbackCard />
					<FeedbackCard />
				</div>
			</div>
		</section>
	)
}

export default Feedback
