import { render, screen } from '@testing-library/react';
import UpperBodyWorkouts from '../components/UpperBodyWorkouts';

describe('UpperBodyWorkouts Component', () => {
    test('renders component without crashing', () => {
        render(<UpperBodyWorkouts />);
    });

    test('renders correct section headings', () => {
        render(<UpperBodyWorkouts />);
        expect(screen.getByText('UPPER BODY FOCUS')).toBeInTheDocument();
    });

    test('renders all exercise headings and iframes', () => {
        render(<UpperBodyWorkouts />);
        const exerciseHeadings = [
            'Jumping Jacks :',
            'Skipping Rope :',
            'Standing Side Stretch :',
            'Hip Flexor Stretch :',
            'Shoulder Stretch :',
            'Toe Touch :',
            '1. Bench Press with Weights :',
            '1. Bench Press with Resistance Bands :',
            '2. Bent - Over Rows with Weights :',
            '2. Resistance Band Bent - Over Rows :',
            '3. Biceps Curls with Weights :',
            '3. Resistance Band Biceps Curls :',
            '4. Overhead Shoulder Press with Weights :',
            '4. Band Overhead Press :',
            '5. Lateral Raise with Weights :',
            "5. Resistance Band Lateral Raise :",
            '6. Push Ups :',
            '7. Tricep Dips :',
            'Triceps Stretch :',
            'Chest Opener Stretch :',
            'Shoulder Stretches :',
            "Child's Pose :",
            'Neck Stretch :',
            'Wrist Flexor Stretch :',
            'Cat Cow Stretch :',
            'Upper Body Stretch :'
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