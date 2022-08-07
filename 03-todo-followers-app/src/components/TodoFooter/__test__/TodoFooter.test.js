import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

const MockTodoFooter = ({numberOfIncompleteTasks}) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks = {numberOfIncompleteTasks} />
    </BrowserRouter>
  )
}

it('renders the correct amount of incomplete tasks', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks = {1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeInTheDocument();
});

it('renders that the element contains p HTML', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks = {1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toContainHTML('p');
});