import { render, screen } from '@testing-library/react';
import Lunch, { mealsData } from '../components/Lunch';

describe('Lunch Component', () => {
    test('renders correctly', () => {
      render(<Lunch />);
      const heading = screen.getByText('Lunch / Dinner Options');
      expect(heading).toBeInTheDocument();
    });

    test('renders each lunch / dinner option with title, description, and video', () => {
      render(<Lunch />);
      mealsData.forEach((meal) => {
        const title = screen.getByText(meal.title);
        const description = screen.getByText((content, node) => {
            const hasText = (node) => node.textContent === meal.description;
            const nodeHasText = hasText(node);
            const childrenDontHaveText = Array.from(node.children).every(
                (child) => !hasText(child)
            );
            return nodeHasText && childrenDontHaveText;
        });
        const iframe = screen.getByTitle(`Youtube Video ${meal.id}`);
        expect(title).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        expect(iframe).toBeInTheDocument();
        const src = `https://www.youtube-nocookie.com/embed/${meal.src}`;
        expect(iframe).toHaveAttribute('src', src);
      });
    });
});