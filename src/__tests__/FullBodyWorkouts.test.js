import { render, screen } from '@testing-library/react';
import FullBodyWorkouts from '../components/FullBodyWorkouts';

describe('FullBodyWorkouts Component', () => {
    test('renders correctly', () => {
        render(<FullBodyWorkouts />);
        const heading = screen.getByText('FULL BODY HIGH-INTENSITY INTERVAL TRAINING (HIIT)');
        expect(heading).toBeInTheDocument();
    });

    test('renders all exercise headings and iframes', () => {
        render(<FullBodyWorkouts />);
        const exerciseHeadings = [
            'Jumping Jacks :',
            'Skipping Rope :',
            'Standing Side Stretch :',
            'Hip Flexor Stretch :',
            'Shoulder Stretch :',
            'Toe Touch :',
            '1. Jump Squats :',
            '2. Mountain Climbers :',
            '3. Burpees :',
            '4. Plank with Shoulder Taps :',
            '5. Bicycle Crunches :',
            '6. High Knees :',
            'Standing Quadriceps Stretch :',
            'Standing Hamstring Stretch :',
            'Standing Calf Stretch :',
            "Child's Pose :",
            'Seated Forward Fold :',
            'Cat - Cow Stretch :',
            'Overhead Stretch :',
            'Triceps Stretch :'
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