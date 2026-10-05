import './GreenButton.scss'
import rightArrowBtn from "@/assets/svg/common/rightArrowBtn.svg";

function GreenButton({ children }) {
	return (
		<a href="/" className='green-button'>
			<span>{children}</span>
			<img
				src={rightArrowBtn}
				alt=">"
			/>
		</a>
	)
}

export default GreenButton
