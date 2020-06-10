import * as React from 'react'
import CoolChipCheckin from '../main'
import { render, waitForElement } from '@testing-library/react'
import { act } from 'react-dom/test-utils';

jest.mock('../../../lib/lib');

describe('<CoolChipCheckin />', () => {
  it('Will render without errors', async () => {
    await render(<CoolChipCheckin />)
  })

  it('Will render the correct number of rows', async () => {
    const { getByTestId } = await render(<CoolChipCheckin />);
    act(() => {
      waitForElement(() => getByTestId('people-rows')).then((userList) => {
        const rows = userList.childNodes.length;
        expect(rows).toEqual(2)
      })
    });
  })
})
