export function getSnipCartGlobal(): SnipcartGlobal {
    return {
        store: {
            getState: jest.fn(),
        },
        events: {
            on: jest.fn(),
        },
        api: {
            theme: {
                customization: {
                    registerPaymentFormCustomization: jest.fn(),
                },
            },
        },
    };
}
