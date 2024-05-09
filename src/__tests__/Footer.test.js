import { render } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer Component', () => {
    test('displays contact icons', () => {
        const { getByTestId } = render(<Footer />);
        expect(getByTestId('phone-icon')).toBeInTheDocument();
        expect(getByTestId('email-icon')).toBeInTheDocument();
        expect(getByTestId('whatsApp-icon')).toBeInTheDocument();
        expect(getByTestId('telegram-icon')).toBeInTheDocument();
        expect(getByTestId('X-icon')).toBeInTheDocument();
    });
});