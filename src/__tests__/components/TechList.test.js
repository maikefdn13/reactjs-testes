import React from 'react'
import { cleanup, render, fireEvent } from '@testing-library/react'

import TechList from '~/components/TechList';

afterEach(cleanup)

describe('TechList component', () => {
  it('Should be able to add new tech', () => {
   const { getByText, getByTestId, debug } =  render(<TechList />)
   debug();

   fireEvent.click(getByText('Adicionar'))

   debug();
   
   expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
  })
})