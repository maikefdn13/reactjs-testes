import React from 'react'
import { cleanup, render, fireEvent } from '@testing-library/react'

import TechList from '~/components/TechList';

afterEach(cleanup)

describe('TechList component', () => {
  it('Should be able to add new tech', () => {
   const { getByText, getByTestId, getByLabelText , debug } =  render(<TechList />)
   debug();
   
   fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js'} } );
   fireEvent.submit(getByTestId('tech-form'));

   debug();
   
   expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
   expect(getByLabelText('Tech')).toHaveValue('');
  })

 // it('should store techs in storage', )
})