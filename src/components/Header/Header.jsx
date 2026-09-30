import './Header.scss'

import heart from '@/assets/svg/heart.svg'
import logo from '@/assets/svg/logo.svg'
import phone from '@/assets/svg/phone.svg'
import telegram from '@/assets/svg/telegram.svg'
import tiktok from '@/assets/svg/tiktok.svg'
import viber from '@/assets/svg/viber.svg'

function Header() {
	return (
		<header className="header">
			<div className="container header-container">
				<a
					href="/"
					className="rieltor-logo"
				>
					<img
						src={logo}
						alt=""
					/>
				</a>

				<nav className="navigation">
					<ul className="navigation-list">
						<li className="navigation-item">
							<button className="navigation-button header-text">Головна</button>
						</li>
						<li className="navigation-item">
							<button className="navigation-button header-text">Про нас</button>
						</li>
						<li className="navigation-item">
							<button className="navigation-button header-text">Об'єкти</button>
						</li>
						<li className="navigation-item">
							<button className="navigation-button header-text">Відгуки</button>
						</li>
						<li className="navigation-item">
							<button className="navigation-button header-text">Контакти</button>
						</li>
					</ul>
				</nav>

				<div className="contacts">
					<div className="socials">
						<a
							href="/"
							className="socials-link"
						>
							<img
								src={telegram}
								alt="TG"
								className="socials-svg header-svg"
							/>
						</a>
						<a
							href="/"
							className="socials-link"
						>
							<img
								src={tiktok}
								alt="TikTok"
								className="socials-svg header-svg"
							/>
						</a>
						<a
							href="/"
							className="socials-link"
						>
							<img
								src={viber}
								alt="Viber"
								className="socials-svg header-svg"
							/>
						</a>
					</div>

					<a
						href="/"
						className="phone-number"
					>
						<img
							src={phone}
							alt="Tel"
							className="phone-number-svg header-svg"
						/>
						<span className="phone-number-text header-text">+38 (050) 123 45 67</span>
					</a>
				</div>

				<button className="selected">
					<img
						src={heart}
						alt="heart"
						className="selected-svg header-svg"
					/>
					<span className="selected-text header-text">Обране</span>
					<div className="selected-count">
						<span className="selected-count-text header-text">0</span>
					</div>
				</button>
			</div>
		</header>
	)
}

export default Header
