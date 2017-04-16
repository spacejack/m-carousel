import * as m from 'mithril'

export default {
	view() {
		return [
			m('h1', "Mithril Carousel Demo"),
			m('p', {style: {fontSize: '1.3em'}},
				m('a', {href: '/carousel/1', oncreate: m.route.link}, "View Carousel")
			),
			m('p', {style: {marginTop: '8em'}},
				m('a', {href: 'https://github.com/spacejack/m-carousel'}, "Source on Github")
			)
		]
	}
} as m.Component<{},{}>
