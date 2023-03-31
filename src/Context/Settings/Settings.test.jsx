import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Context, { ToDoContext } from '.';

describe('Settings Context', () => {
  it('state loads as expected', () => {
    render(
      <Context>
        <ToDoContext.Consumer>
          {
            ({displayCount, sort, complete}) => (
              <ul>
                <li data-testid="displayCount">{displayCount}</li>
                <li data-testid="sort">{sort}</li>
                <li data-testid="complete">{complete.toString()}</li>
              </ul>
            )
          }
        </ToDoContext.Consumer>
      </Context>
    );
    let sortLi = screen.getByTestId('sort');
    let completeLi = screen.getByTestId('complete');
    let displayCountLi = screen.getByTestId('displayCount');

    expect(completeLi).toHaveTextContent('false');
    expect(sortLi).toHaveTextContent('difficulty');
    expect(displayCountLi).toHaveTextContent('3');
  })
})