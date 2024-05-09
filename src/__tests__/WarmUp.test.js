import { render, screen } from '@testing-library/react';
import WarmUp from '../components/WarmUp';

describe('WarmUp Component', () => {
    test('renders correctly', () => {
        render(<WarmUp />);
        const heading = screen.getByText('1. Warm-Up (5 - 10 minutes):');
        expect(heading).toBeInTheDocument();
    });

    test('renders all exercise headings and iframes', () => {
        render(<WarmUp />);
        const exerciseHeadings = [
            'Jumping Jacks :',
            'Skipping Rope :',
            'Standing Side Stretch :',
            'Hip Flexor Stretch :',
            'Shoulder Stretch :',
            'Toe Touch :'
        ];

        exerciseHeadings.forEach((heading) => {
            const exerciseHeading = screen.getByText(heading);
            expect(exerciseHeading).toBeInTheDocument();
        });

        const iframes = screen.getAllByTitle('Youtube Video');
        expect(iframes.length).toBe(exerciseHeadings.length);
        iframes.forEach((iframe, index) => {
            expect(iframe).toHaveAttribute('src');
            expect(iframe).toHaveAttribute('src', expect.stringContaining('https://www.youtube-nocookie.com/embed/'));
            const heading = screen.getByText(exerciseHeadings[index]);
            expect(heading).toBeInTheDocument();
        });
    });
});