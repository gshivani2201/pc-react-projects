import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('renders same text passed into title prop', async () => {
  render(<Header title='My Header' />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

it('renders same text passed into title prop', async () => {
  render(<Header title='My Header' />);
  const headingElement = screen.getByRole('heading', { name: 'My Header' });
  expect(headingElement).toBeInTheDocument();
});

// it('renders same text passed into title prop', async () => {
//   render(<Header title='My Header' />);
//   const headingElement = screen.getByTitle('Header');
//   expect(headingElement).toBeInTheDocument();
// });

it('renders same text passed into title prop', async () => {
  render(<Header title='My Header' />);
  const headingElement = screen.getByTestId('header-1');
  expect(headingElement).toBeInTheDocument();
});

//FIND BY

it('renders same text passed into title prop', async () => {
  render(<Header title='My Header' />);
  const headingElement = await screen.findByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

//QUERY BY
it('renders same text passed into title prop', async () => {
  render(<Header title='My Header' />);
  const headingElement = screen.queryByText(/dogs/i);
  expect(headingElement).not.toBeInTheDocument();
});

//GETALL BY
// it('renders same text passed into title prop', async () => {
//   render(<Header title='My Header' />);
//   const headingElements = screen.getAllByRole('heading');
//   expect(headingElements.length).toBe(2);
// });