import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import About from '../components/About';

test('renders "Workouts" button', () => {
    render(
      <Router>
        <About />
      </Router>
    );
    const workoutsButton = screen.getByRole('button', { name: 'Workouts' });
    expect(workoutsButton).toBeInTheDocument();
});