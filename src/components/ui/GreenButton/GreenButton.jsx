import rightArrowBtn from '@/assets/svg/common/rightArrowBtn.svg'
import './GreenButton.scss'

function GreenButton({
	children,
	icon = rightArrowBtn,
	reverse = false,
	href = '/',
	className = '',
}) {
	return (
		<a
			href={href}
			className={`green-button ${reverse ? 'green-button--reverse' : ''} ${className}`}
		>
			<span>{children}</span>
			<img
				src={icon}
				alt=''
			/>
		</a>
	)
}

export default GreenButton
