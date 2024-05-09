import { render, screen } from '@testing-library/react';
import Breakfast, { mealsData } from '../components/Breakfast';

describe('Breakfast Component', () => {
    test('renders correctly', () => {
      render(<Breakfast />);
      const heading = screen.getByText('Breakfast Options');
      expect(heading).toBeInTheDocument();
    });

    test('renders each breakfast option with title, description, and video', () => {
      render(<Breakfast />);
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