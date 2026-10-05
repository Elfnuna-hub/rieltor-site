import cardImage from '@/assets/jpg/cardImage.jpg'
import geoLocation from '@/assets/svg/common/geoLocation.svg'
import squareHouse from '@/assets/svg/propertyCard/squareHouse.svg'
import countRooms from '@/assets/svg/propertyCard/countRooms.svg'
import squareLand from '@/assets/svg/propertyCard/squareLand.svg'
import countPhoto from '@/assets/svg/propertyCard/countPhoto.svg'
import arrowRight from '@/assets/svg/propertyCard/arrowRight.svg'
import heart from '@/assets/svg/common/heart.svg'
import './PropertyCard.scss'

function PropertyCard() {
	return (
		<div className="property-card">
			<div className="property-gallery">
				<div className="property-gallery-main">
					<img
						src={cardImage}
						alt="#"
					/>
					<button className="property-gallery-main--selected">
						<img src={heart} alt="#" />
					</button>
				</div>
				<ul className="property-gallery-thumbnails">
					<li className="property-gallery-thumbnail">
						<img
							src={cardImage}
							alt="#"
						/>
					</li>
					<li className="property-gallery-thumbnail">
						<img
							src={cardImage}
							alt="#"
						/>
					</li>
					<li className="property-gallery-thumbnail">
						<img
							src={cardImage}
							alt="#"
						/>
					</li>
					<li className="property-gallery-thumbnail property-gallery-thumbnail--overlay">
						<img
							src={cardImage}
							alt="#"
						/>
						<span>
							+4{' '}
							<img
								src={countPhoto}
								alt=""
							/>
						</span>
					</li>
				</ul>
			</div>

			<div className="property-info">
				<div className="property-location">
					<img
						src={geoLocation}
						alt="#"
					/>
					<span>Полтавська обл., м. Миргород</span>
				</div>

				<h3 className="property-title">Сучасний будинок в передмісті</h3>

				<ul className="property-features">
					<li className="property-feature">
						<img
							src={squareHouse}
							alt="#"
						/>
						<span>120 м²</span>
					</li>
					<li className="property-feature">
						<img
							src={countRooms}
							alt="#"
						/>
						<span>4 кімнати</span>
					</li>
					<li className="property-feature">
						<img
							src={squareLand}
							alt="#"
						/>
						<span>5 соток</span>
					</li>
				</ul>

				<div className="property-footer">
					<span className='property-footer-price'>120 000$</span>
					<a className="property-footer-button">
						Детальніше
						<img src={arrowRight} alt=">" />
					</a>
				</div>
			</div>
		</div>
	)
}

export default PropertyCard
