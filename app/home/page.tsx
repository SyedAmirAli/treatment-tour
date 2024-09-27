'use client';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import CategoryBanner from './CategoryBanner';
import WithHeader from './header';
import ElementCard from './ElementCard';

export default function Root() {
    return (
        <Provider store={store}>
            <WithHeader>
                <CategoryBanner />
                <ElementCard />
            </WithHeader>
        </Provider>
    );
}
