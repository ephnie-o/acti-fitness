import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Workouts from '../components/Workouts';

describe('Workouts Component', () => {
    test('renders correct section headings', () => {
        render(<Router><Workouts /></Router>);
        expect(screen.getByText('WORKOUT ROUTINE')).toBeInTheDocument();
        expect(screen.getByText('OPTIONAL SECTION')).toBeInTheDocument();
    });
});