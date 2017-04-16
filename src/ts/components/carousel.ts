import * as m from 'mithril'

export interface Attrs {
	// Contents for each panel (supplied as attrs to each panel component instance)
	contents: any[]
	// App provides panel component
	panel: m.ComponentTypes<any,any>
	// Position of carousel (0...contents.length-1)
	position?: number
}

/** Carousel component */
export default {
	view ({attrs: {contents, panel, position = 0}}) {
		return m('.carousel',
			m('.panels',
				{
					style: {
						transform: 'translateX(' + (-position * 100) + '%' + ')'
					}
				},
				contents.map((content: any, i) => {
					return m(panel, {content, panelId: i})
				})
			)
		)
	}
} as m.Component<Attrs,{}>
