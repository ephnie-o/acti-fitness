import { render, screen } from '@testing-library/react';
import WorkoutCard from '../components/WorkoutCard';

describe('WorkoutCard Component', () => {
    const mockSrc = 'mock-source';
    const mockText = 'Mock Text';

    test('renders component without crashing', () => {
        render(<WorkoutCard src={mockSrc} text={mockText} />);
    });

    test('renders card with correct image source', () => {
        render(<WorkoutCard src={mockSrc} text={mockText} />);
        const imageElement = screen.getByAltText('Workout Image');
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src', mockSrc);
    });

    test('renders card with correct button text', () => {
        render(<WorkoutCard src={mockSrc} text={mockText} />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement.textContent).toBe(mockText);
    });
});