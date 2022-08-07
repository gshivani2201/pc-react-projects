import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../Todo';
import { BrowserRouter } from 'react-router-dom';

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  )
}

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole('button', { name: /Add/i });
  tasks.forEach(task => {
      fireEvent.change(inputElement, { target: { value: task } });
      fireEvent.click(buttonElement);
  })
}

describe("Todo", () => {
  it('renders same text passed into title prop', async () => {
    render(<MockTodo />);
    addTask(["Buy Groceries"])
    const divElement = screen.getByText(/Buy Groceries/i)
    expect(divElement).toBeInTheDocument();
  });

  it('renders multiple div items', async () => {
    render(<MockTodo />);
    addTask(["Go Grocery Shopping", "Pet my dog", "Hydrate"])
    const divElements = screen.getAllByTestId('task-container')
    expect(divElements.length).toBe(3);
  });

  it('task should not have completed class when initially rendered', async () => {
    render(<MockTodo />);
    addTask(["Buy Groceries"])
    const divElement = screen.getByText(/Buy Groceries/i)
    expect(divElement).not.toHaveClass("todo-item-active")
  });

  it('task should have completed class when clicked', async () => {
    render(<MockTodo />);
    addTask(["Buy Groceries"])
    const divElement = screen.getByText(/Buy Groceries/i)
    fireEvent.click(divElement)
    expect(divElement).toHaveClass("todo-item-active")
  });
})