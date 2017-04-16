import * as m from 'mithril'

export interface Content {
	title: string
	body: string
	image: string
}

export interface Attrs {
	content: Content
	panelId: number
}

/**
 * Carousel panel component
 */
export default {
	view ({attrs: {content, panelId}}) {
		return m('.panel',
			{
				style: {
					transform: 'translateX(' + (panelId * 100) + '%' + ')'
				}
			},
			m('.image',
				{
					style: {
						backgroundImage: 'url(img/' + content.image + ')'
					}
				},
			),
			m('.text',
				m('h1', content.title),
				m('p', content.body)
			)
		)
	}
} as m.Component<Attrs,{}>
