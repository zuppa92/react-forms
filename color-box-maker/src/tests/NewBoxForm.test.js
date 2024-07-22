import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from '../components/NewBoxForm';

it('renders without crashing', () => {
  render(<NewBoxForm />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});

it('calls addBox with correct data', () => {
  const addBox = jest.fn();
  const { getByLabelText, getByText } = render(<NewBoxForm addBox={addBox} />);
  
  fireEvent.change(getByLabelText('Width:'), { target: { value: '100' } });
  fireEvent.change(getByLabelText('Height:'), { target: { value: '100' } });
  fireEvent.change(getByLabelText('Background Color:'), { target: { value: 'red' } });
  fireEvent.click(getByText('Add Box'));
  
  expect(addBox).toHaveBeenCalledWith({
    id: expect.any(String),
    width: '100',
    height: '100',
    backgroundColor: 'red'
  });
});
