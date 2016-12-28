import * as m from 'mithril'
import home from './components/home'
import carouselPage from './components/carousel-page'

m.route(document.body, '/', {
	'/': home,
	'/carousel/:panelId': carouselPage
})
