import { render, screen } from '@testing-library/react';
import LegsAndGlutesWorkouts from '../components/LegsAndGlutesWorkouts';

describe('LegsAndGlutesWorkouts Component', () => {
    test('renders component without crashing', () => {
        render(<LegsAndGlutesWorkouts />);
    });

    test('renders correct section headings', () => {
        render(<LegsAndGlutesWorkouts />);
        expect(screen.getByText('LOWER BODY FOCUS')).toBeInTheDocument();
    });

    test('renders all exercise headings and iframes', () => {
        render(<LegsAndGlutesWorkouts />);
        const exerciseHeadings = [
            'Jumping Jacks :',
            'Skipping Rope :',
            'Standing Side Stretch :',
            'Hip Flexor Stretch :',
            'Shoulder Stretch :',
            'Toe Touch :',
            '1. Squats with Weights :',
            '1. Squats without Weights :',
            '2. Deadlifts :',
            '2. Good Mornings :',
            '3. Lunges with Weights :',
            '3. Lunges without Weights :',
            '4. Hip Thrusts with Weights :',
            '4. Hip Thrusts without Weights :',
            '5. Sumo Squats with Weights :',
            "5. Sumo Squats without Weights :",
            '6. Donkey Kicks with Resistant Bands :',
            "6. Donkey Kicks without Resistant Bands :",
            'Standing Quadriceps Stretch :',
            'Hamstring Stretch :',
            'Groin Stretch :',
            "Hip Flexor :",
            'Calf Stretch :',
            'Glute Stretch :',
            'Lower Back Stretch :',
            'IT band Stretch :'
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