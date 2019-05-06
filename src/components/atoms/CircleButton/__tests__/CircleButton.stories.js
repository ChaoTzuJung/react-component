import React from 'react';
import { withKnobs, color, number, select, object } from '@storybook/addon-knobs';

import { storiesOf } from 'util/facade';

import CircleButton from 'components/atoms/CircleButton';

const stories = storiesOf('atoms/[ buttons ]/CircleButton', module);

stories.addDecorator(withKnobs);

stories.add('__interactive', () => {
	const circleButton = (
		<div>
			<CircleButton
				size={number('size', 40)}
				color={color('color', '#C0C0C0')}
				hoverColor={color('hoverColor', '#ECECEC')}
				activeColor={color('activeColor', '#ECECEC')}
			>
				i
			</CircleButton>
		</div>
	);

	return circleButton;
});

stories.add('with default', () => {
	const circleButton = (
		<div>
			<CircleButton>i</CircleButton>
		</div>
	);

	return circleButton;
});

stories.add('with tooltip', () => {
	const circleButton = (
		<div style={{ marginLeft: '100px', marginTop: '100px' }}>
			<CircleButton
				tooltipConfig={{
					enable: true,
					direction: select(
						'tooltip direction',
						['top', 'left', 'right', 'bottom'],
						'left',
					),
					text: 'tips',
				}}
			>
				i
			</CircleButton>
		</div>
	);

	return circleButton;
});
