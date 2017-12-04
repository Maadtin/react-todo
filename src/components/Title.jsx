import React from 'react';
import styled from 'styled-components'

const SubTitle = styled.h2`
	color: red;
`

const Title = props => {
	return (
		<SubTitle />
		<h1>{props.title}</h1>
	);
};

export default Title;