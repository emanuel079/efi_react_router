import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.span`
  color: ${(props) => props.color || '#000'};
  background-color: ${(props) => props.backgroundColor || 'rgba(0, 0, 0, 0)'};
  font-size ${(props) => props.fontSize || '15'}px;
  ${(props) => props.onClick && 'cursor: pointer;'};
  border-radius:${(props) => props.borderRadius || '0'}px;
  padding: ${(props) => props.padding || '0'};
`;

const Icon = (props) => {
  const { name, fontSize, color, onClick, backgroundColor, borderRadius, padding, customStyle } =
    props;

  return (
    <Container
      fontSize={fontSize}
      color={color}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      padding={padding}
      className={name}
      onClick={onClick}
      style={customStyle}
    />
  );
};

Icon.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.number,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Icon;
