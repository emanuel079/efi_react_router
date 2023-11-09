import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordInput = ({
  name,
  value,
  onChange,
  onBlur,
  placeholder = '',
  withIcon = false,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='d-flex'>
      <Col className='d-flex position-relative align-items-center'>
        <Form.Control
          {...rest}
          type={showPassword ? 'text' : 'password'}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
        />
        <Col className='d-flex align-items-center position-absolute' style={{ right: '10px' }}>
          <p onClick={() => setShowPassword(!showPassword)} className='c-pointer'>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </p>
        </Col>
      </Col>
    </div>
  );
};

export default PasswordInput;
