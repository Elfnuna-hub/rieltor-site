import mapImage from '@/assets/jpg/mapImage.jpg'
import geoLocation from '@/assets/svg/common/geoLocation.svg'
import PropertyCard from '@/components/PropertyCard/PropertyCard'
import GreenButton from '@/components/ui/GreenButton/GreenButton'
import './PopularProperties.scss'

function PopularProperties() {
	return (
		<section className="popular-properties">
			<div className="container popular-properties-container">
				<div className="real-estate">
					<div className="real-estate-info">
						<div className="real-estate-info-text">
							<h2>Популярні об'єкти</h2>
							<span>Найкращі пропозиції для вас</span>
						</div>
						<GreenButton>Переглянути всі об'єкти</GreenButton>
					</div>
					<div className="real-estate-cards">
						<PropertyCard />
						<PropertyCard />
						<PropertyCard />
						<PropertyCard />
					</div>
				</div>

				<div className="real-estate-sidebar">
					<div className="sell-property">
						<div className="sell-property-text">
							<h3>Хочете продати свою нерухомість?</h3>
							<span>
								Рієлтор знайде покупця та організує продаж від початку до угоди
							</span>
						</div>
						<GreenButton>Зв'язатися з нами</GreenButton>
					</div>
					<div className="map-property">
						<div className="map-property-bordered">
							<img
								src={mapImage}
								alt="map"
							/>
						</div>
						<div className="map-property-text">
							<img
								src={geoLocation}
								alt="geo"
							/>
							<h4>Знайдіть нерухомість на карті</h4>
							<span>Переглядайте об'єкти за розташуванням</span>
							<a
								href="/"
								className="map-property-text-button"
							>
								<span>Перейти до карти</span>
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clip-path="url(#clip0_259_386)">
										<path
											d="M-2 8H14M8 1L14 8L8 15"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</g>
									<defs>
										<clipPath id="clip0_259_386">
											<rect
												width="16"
												height="16"
												fill="white"
											/>
										</clipPath>
									</defs>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PopularProperties
