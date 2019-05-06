import React from  'react';
import classnames from 'classnames';

import styles from './index.css';

const setColor = (hover, active, color, hoverColor, activeColor) => {
	if(hover) {
		return hoverColor
	} else if(active) {
		return activeColor
	}

	return color;
};

const setTooltipPosition = (tooltipConfig, size) => {
	if (tooltipConfig.direction === 'top') {
		return `0 0 0 -${tooltipConfig.width / 2}px`;
	} else if (tooltipConfig.direction === 'left') {
		return `${(size / 2) - 18}px 0 0 0`;
	} else if (tooltipConfig.direction === 'right') {
		return `${(size / 2) - 18}px 0 0 0`;
	}

	// direction === 'buttom'
	return `0 0 0 -${tooltipConfig.width / 2}px`;
};


const CircleButton = ({
	// state
	hover,
	active,

	// props
	children,
	className,
	size,
	color,
	hoverColor,
	activeColor,
	tooltipConfig,

	// action
	onHover,
	onLeave,
	onActive,
}) => (
	<div className={classnames(styles.circleButton, styles.wrapper)}>
		<div className={classnames(styles.button, className, {
			[styles.hover]: hover,
			[styles.active]: active,
		})}
		style={{
			background: setColor(hover, active, color, hoverColor, activeColor)
			width: size,
			height: size,
			borderRadius: size / 2.
		}}
		>
			{children}
		</div>
		{
			(tooltipConfig.enable && (hover || active)) &&
				<div
					className={classnames(
						styles.tooltip,
						tooltipConfig.className,
						styles[tooltipConfig.direction]
					)}
					style={{
						width: `${tooltipConfig.width}px`
						margin: setTooltipPosistion(tooltipConfig, size)
					}}
				>
					{tooltipConfig.text}
				</div>
		}
	</div>
)

export default CircleButton;
