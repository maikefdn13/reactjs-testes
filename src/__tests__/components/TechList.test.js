import React from 'react'
import { cleanup, render, fireEvent } from '@testing-library/react'

import TechList from '~/components/TechList';

afterEach(cleanup)

describe('TechList component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('Should be able to add new tech', () => {
   const { getByText, getByTestId, getByLabelText } =  render(<TechList />)  
   
   fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js'} } );
   fireEvent.submit(getByTestId('tech-form'));  
   
   expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
   expect(getByLabelText('Tech')).toHaveValue('');
  })

  it('should store techs in storage', () => {
    let { getByTestId,  getByText, getByLabelText } =  render(<TechList />)  
    
    fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js'} } );
    fireEvent.submit(getByTestId('tech-form'));  

    cleanup();

    ({ getByTestId, getByLabelText, getByLabelText } =  render(<TechList />)) 
    
    expect(localStorage.setItem).toHaveBeenLastCalledWith('techs', JSON.stringify(['Node.js']));
    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));

  });
})