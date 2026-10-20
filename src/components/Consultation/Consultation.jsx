import human from '@/assets/svg/common/human.svg'
import consultationSvg from '@/assets/svg/consultation/consultationSvg.svg'
import consultationTimeSvg from '@/assets/svg/consultation/consultationTimeSvg.svg'
import Telegram from '@/assets/svg/contacts/telegram.svg'
import Viber from '@/assets/svg/contacts/viber.svg'
import GreenButton from '../ui/GreenButton/GreenButton'
import './Consultation.scss'

function Consultation() {
	return (
		<section className="consultation">
			<div className="container consultation-container">
				<div className="consultation-main">
					<div className="consultation-main-img">
						<img
							src={consultationSvg}
							alt="consultation"
						/>
					</div>
					<div className="consultation-main-text">
						<h3>Потрібна консультація?</h3>
						<span>
							Зателефонуйте або напиші рієлтору напряму — відповімо на ваші
							запитання та допоможемо підібрати нерухомість
						</span>
					</div>
				</div>
				<div className="consultation-info">
					<div className="consultation-info-number">
						<span className="phone-svg phone-svg--white" />
						<span className="phone-number-text">+38 (050) 123 45 67</span>
					</div>
					<div className="consultation-info-text">
						<div className="rieltor">
							<img
								src={human}
								alt="human"
							/>
							<span>рієлтор Бражненко Юрій</span>
						</div>
						<div className="time-work">
							<img
								src={consultationTimeSvg}
								alt="годинник"
							/>
							<span>Щодня 9:00-20:00</span>
						</div>
					</div>
				</div>
				<div className="consultation-buttons">
					<GreenButton
						icon={Telegram}
						reverse
						className="consultation-button"
					>
						Пишіть в Телеграм
					</GreenButton>
					<GreenButton
						icon={Viber}
						reverse
						className="consultation-button"
					>
						Пишіть у Вайбер
					</GreenButton>
				</div>
			</div>
		</section>
	)
}

export default Consultation
