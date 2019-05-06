import { contain } from 'react-contain-helper';
import PropTypes from 'prop-types';
import CircleButton from './component';

CircleButton.PropTypes = {

}

const initState = () => ({
	hover: false,
	active: false,
});

const mapSetStateToProps = (
	{ hover, active },
	{ children, className, size, color, hoverColor, activeColor, tooltipConfig },
	setState,
) => ({
	hover,
	active,
	children,
	className,
	size,
	color,
	hoverColor,
	activeColor,
	tooltipConfig: {
		enable: false,
		direction: 'left',
		className: undefined,
		text: '',
		width: 100,
		...tooltipConfig,
	},

	onHover() {
		setState({ hover: true });
	},
	onLeave() {
		setState({ hover: false });
	},
	onClick() {
		setState({ active: !active });
	},
});

export default contain(initState, mapSetStateToProps)(CircleButton);
