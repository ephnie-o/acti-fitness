import { render, screen } from '@testing-library/react';
import Snack, { mealsData } from '../components/Snack';

describe('Snack Component', () => {
    test('renders correct section heading', () => {
        render(<Snack />);
        expect(screen.getByText('Snack Options')).toBeInTheDocument();
    });

    test('renders meals data correctly', () => {
        render(<Snack />);
        mealsData.forEach(meal => {
            expect(screen.getByText(meal.title)).toBeInTheDocument();
            expect(screen.getByText(meal.description)).toBeInTheDocument();
        });
    });

    test('renders meal images correctly', () => {
        render(<Snack />);
        mealsData.forEach(meal => {
            const image = screen.getByAltText(meal.title);
            expect(image).toBeInTheDocument();
            expect(image).toHaveAttribute('src', meal.image);
        });
    });
});