import React from 'react';
import { useSelector } from 'react-redux';
import { cleanup, render } from '@testing-library/react';

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
});