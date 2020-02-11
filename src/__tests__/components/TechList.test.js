import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cleanup, render, fireEvent } from '@testing-library/react';

import { addTech } from '~/store/modules/techs/actions';
import TechList from '~/components/TechList';

jest.mock('react-redux');

afterEach(cleanup)

describe('TechList component', () => {
  it('should tender tech list', () => {
    useSelector.mockImplementation(cb => cb({
      techs: ['Node.js', 'ReactJS']
    }     
    ));

    const { getByText, getByTestId } = render(<TechList />)

    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    expect(getByTestId('tech-list')).toContainElement(getByText('ReactJS'));
  }); 
  
  it('should be able to add new tech', () => {
    const { getByTestId, getByLabelText, debug } = render(<TechList />)

    const dispatch = jest.fn();
  
    useDispatch.mockReturnValue(dispatch);   

    fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
    fireEvent.submit(getByTestId('tech-form'));
    //console.log(dispatch.mock.calls);
    expect(dispatch).toHaveBeenCalledWith(addTech('Node.js'));
  });
});