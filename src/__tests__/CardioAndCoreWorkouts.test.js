import { render, screen } from '@testing-library/react';
import CardioAndCoreWorkouts from '../components/CardioAndCoreWorkouts';

describe('CardioAndCoreWorkouts Component', () => {
    test('renders correctly', () => {
        render(<CardioAndCoreWorkouts />);
        const heading = screen.getByText('CARDIO AND CORE');
        expect(heading).toBeInTheDocument();
    });

    test('renders all exercise headings and iframes', () => {
        render(<CardioAndCoreWorkouts />);
        const exerciseHeadings = [
            'Jumping Jacks :',
            'Skipping Rope :',
            'Standing Side Stretch :',
            'Hip Flexor Stretch :',
            'Shoulder Stretch :',
            'Toe Touch :',
            '1. Leg Raises :',
            '2. Flutter Kicks :',
            '3. Russian Twist :',
            '4. Bicycle Crunches :',
            '5. Alternate V Ups :',
            '6. Windshield Wipers :',
            '7. Crunches :',
            '8. Plank Knee to Elbow :',
            '9. Planks :',
            '10. Hollow Body Hold :',
            '11. Cardiovascular Exercise : 20 - 30 mins :',
            'Standing Quadriceps Stretch :',
            'Standing Hamstring Stretch :',
            'Standing Calf Stretch :',
            "Child's Pose :",
            'Seated Forward Fold :',
            'Triceps Stretch :',
            'Sphinx Pose :',
            'Spinal Twist :'
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