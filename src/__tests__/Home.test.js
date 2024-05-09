import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../components/Home';

describe('Home Component', () => {
    test('displays contact icons', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        expect(screen.getByTestId('phone-icon')).toBeInTheDocument();
        expect(screen.getByTestId('email-icon')).toBeInTheDocument();
        expect(screen.getByTestId('whatsApp-icon')).toBeInTheDocument();
        expect(screen.getByTestId('telegram-icon')).toBeInTheDocument();
        expect(screen.getByTestId('X-icon')).toBeInTheDocument();
    });

    test('renders navigation buttons correctly', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        expect(screen.getByText('About')).toBeInTheDocument();
        expect(screen.getByText('Meals')).toBeInTheDocument();
    });

    test('renders workout category cards correctly', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        expect(screen.getByText('Full Body HIIT')).toBeInTheDocument();
        expect(screen.getByText('Upper Body')).toBeInTheDocument();
        expect(screen.getByText('Legs and Glutes')).toBeInTheDocument();
        expect(screen.getByText('Cardio and Core')).toBeInTheDocument();
    });
});