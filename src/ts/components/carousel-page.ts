import * as m from 'mithril'
import carousel from './carousel'
import panel from './panel'

/** Contents for each panel in the carousel */
const CONTENTS = [
	{title: "Panel One", image: 'panel1.jpg', body: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Et harum quidem rerum facilis est et expedita distinctio."},
	{title: "Panel Two", image: 'panel2.jpg', body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
	{title: "Panel Three", image: 'panel3.jpg', body: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."},
	{title: "Panel Four", image: 'panel4.jpg', body: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."},
	{title: "Panel Five", image: 'panel5.jpg', body: "Et harum quidem rerum facilis est et expedita distinctio. Consectetur adipisicing elit, sed do eiusmod tempor."}
]

interface Attrs {
	// This value comes from router
	panelId: string
}

export default {
	view({attrs: {panelId}}) {
		// Router will provide us with the current panel ID.
		// Convert to an index in CONTENTS array.
		const position = clamp((Number(panelId) || 1) - 1, 0, CONTENTS.length - 1)

		return (
			m('.carousel-page',
				// Render the carousel component.
				m(carousel, {panel, contents: CONTENTS, position}),
				// Indicator of which panel we're on
				m('.indicators',
					CONTENTS.map((content, i) => {
						return m('.indicator', {
							class: position === i ? 'indicator-active' : undefined,
							onclick: () => {m.route.set('/carousel/' + (i + 1))}
						})
					})
				),
				// Prev/Next buttons
				m('.nav-block',
					m('button',
						{
							type: 'button',
							onclick: () => {
								m.route.set('/carousel/' + (pmod(position - 1, CONTENTS.length) + 1))
							}
						},
						"PREV"
					),
					m('button',
						{
							type: 'button',
							onclick: () => {
								m.route.set('/carousel/' + (pmod(position + 1, CONTENTS.length) + 1))
							}
						},
						"NEXT"
					)
				)
			)
		)
	}
} as Mithril.Component<Attrs,{}>

function clamp (n: number, min: number, max: number) {
	return Math.min(Math.max(n, min), max)
}

/**  Always positive modulus */
export function pmod (n: number, m: number) {
	return ((n % m + m) % m)
}
