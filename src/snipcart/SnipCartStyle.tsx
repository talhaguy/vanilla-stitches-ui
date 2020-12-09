import { createGlobalStyle } from "styled-components";

export const SnipCartStyle = createGlobalStyle`
    //font

    .snipcart,
    .snipcart__font--secondary,
    .snipcart__font--subtitle {
        font-family: ${(props) => props.theme.FONTS.SANS};
        font-size: 1.8rem;
        color: ${(props) => props.theme.COLORS.BLACK};
    }

    .snipcart__font--std {
        font-size: 1.8rem;
    }

    .snipcart__font--tiny {
        font-size: 1.4rem;
    }

    // icons

    // .snipcart-checkout-step__icon .snipcart__icon path {
    .snipcart-checkout-step .snipcart__icon path,
    snipcart-payment-methods-list-item__arrow .snipcart__icon path {
        fill: ${(props) => props.theme.COLORS.DARK_TURQOISE};
    }

    // heading

    .snipcart__font--subtitle {
        font-size: 2.4rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: normal;
    }

    // page

    .snipcart-modal__container,
    .snipcart-modal {
        background-color: ${(props) => props.theme.COLORS.WHITE};
    }

    // header

    .snipcart-cart-header {
        background-color: ${(props) => props.theme.COLORS.WHITE};
        filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
        margin-bottom: 40px;

        @media (min-width:1024px) {
            filter: none;
            margin-bottom: 16px;
        }
    }


    // header close cart/checkout

    .snipcart-modal__close {
        font-family: ${(props) => props.theme.FONTS.SANS};
        color: ${(props) => props.theme.COLORS.GOLD};
        letter-spacing: 1px;
        text-transform: uppercase;
        font-size: 1.8rem;
    }

    .snipcart-modal__close-title {
        height: initial;
    }

    .snipcart-modal__close:hover {
        text-decoration: underline;
    }

    .snipcart-cart-header__close-button .snipcart__icon--blue-light path {
        fill: ${(props) => props.theme.COLORS.GOLD};
    }

    // header mini cart

    .snipcart-cart-header__count .snipcart__icon:first-child, /* cart */
    .snipcart-modal__header-summary-title .snipcart__icon:first-child /* checkout */ {
        display: none;
    }

    .snipcart-modal__header-summary-title .snipcart__icon path {
        fill: ${(props) => props.theme.COLORS.GOLD};
    }

    .snipcart-cart-header__count::before, /* cart */
    .snipcart-modal__header-summary-title::before /* checkout */ {
        content: "";
        display: block;
        background-image: url("/icon/shopping_bag-black-18dp.svg");
        background-size: 20px 20px;
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }

    // cart footer

    .snipcart-cart__footer {
        @media (min-width:768px) {
            padding-left: 20px;
            padding-right: 20px;
        }
    }

    // step panel

    .snipcart__box {
        border: 1px solid ${(props) => props.theme.COLORS.DARK_GRAY};
    }
   
    // number badges

    .snipcart__box--badge {
        border: none;
        height: 34px;
        width: 34px;
        border: 1px solid ${(props) => props.theme.COLORS.DARK_GRAY};
    }

    .snipcart__box--badge-highlight {
        background: ${(props) => props.theme.COLORS.DARK_TURQOISE};
        color: ${(props) => props.theme.COLORS.WHITE};
        border: none;
    }

    .snipcart__box--badge .snipcart__icon path {
        fill: ${(props) => props.theme.COLORS.DARK_TURQOISE};
    }

    .snipcart-billing-completed,
    .snipcart-shipping-completed {
        .snipcart__box--badge {
            background-color: ${(props) => props.theme.COLORS.DARK_TURQOISE};
            border: none;

            .snipcart__icon path {
                fill: ${(props) => props.theme.COLORS.WHITE};
            }
        }
    }

    // order summary

    .snipcart-cart-summary {
        border: 1px solid ${(props) => props.theme.COLORS.DARK_GRAY};
    }

    // input

    /* don't apply these styles to cart promo input */
    .snipcart-input:not(.snipcart-input--no-style) {
        border: 1px solid ${(props) => props.theme.COLORS.DARK_GRAY};

        &:focus-within {
            border: 2px solid ${(props) => props.theme.COLORS.DARK_TURQOISE};
            box-shadow: none;
        }

        &:focus-within .snipcart-input__input {
            padding-left: 15px;
        }
    }

    .snipcart-input--invalid {
        border: 1px solid ${(props) => props.theme.COLORS.BRIGHT_RED};
    }

    .snipcart-error-message--input {
        color: ${(props) => props.theme.COLORS.BRIGHT_RED};
    }

    // input label

    .snipcart-form__label {
        color: ${(props) => props.theme.COLORS.DARK_GRAY};
    }

    .snipcart-form__label {
        font-size: 1.4rem;
    }

    // cart promo button and input

    .snipcart-discount-box__button {
        border: 1px solid ${(props) => props.theme.COLORS.DARK_TURQOISE};
    }

    .snipcart-discount-box__form{
        border: 1px solid ${(props) => props.theme.COLORS.BLACK};

        .snipcart-input {
            height: 54px;
        }

        &:focus-within {
            border: 2px solid ${(props) => props.theme.COLORS.DARK_TURQOISE};
            padding-left: 15px;
            padding-right: 15px;

            .snipcart-input {
                height: 52px;
            }
        }
    }

    // checkbox

    .snipcart-checkbox + label::before {
        border: 2px solid ${(props) => props.theme.COLORS.DARK_TURQOISE};
        backgrou1d-color: ${(props) => props.theme.COLORS.WHITE};
    }

    .snipcart-checkbox:focus + label::before,
    .snipcart-checkbox:hover + label::before {
        border: 2px solid ${(props) => props.theme.COLORS.GOLD};
    }

    .snipcart-checkbox:checked + label::before {
        border: 2px solid ${(props) => props.theme.COLORS.DARK_TURQOISE};
        background-color: ${(props) => props.theme.COLORS.DARK_TURQOISE};
    }

    .snipcart-checkbox:hover:checked + label::before,
    .snipcart-checkbox:focus:checked + label::before {
        border: 2px solid ${(props) => props.theme.COLORS.GOLD};
        background-color: ${(props) => props.theme.COLORS.GOLD};
    }

    .snipcart-checkbox:checked + label::after {
        left: 7px;
        top: 11px;
    }

    // button

    .snipcart-cart-button,
    .snipcart-cart-button--highlight {
        background-image: none;
        background-color: ${(props) => props.theme.COLORS.DARK_TURQOISE};
        text-transform: uppercase;
        color: ${(props) => props.theme.COLORS.WHITE};
        font-size: 2rem;
        letter-spacing: 1px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        padding: 15px;

        .snipcart__icon {
            path {
                fill: ${(props) => props.theme.COLORS.WHITE};
            }
        }
    }

    // link

    .snipcart__actions--link {
        font: 1.8rem ${(props) => props.theme.FONTS.SANS};
        color: ${(props) => props.theme.COLORS.GOLD};
        letter-spacing: 1px;
        text-transform: uppercase;

        &:hover {
            text-decoration: underline;
        }
    }

    // select

    .snipcart-form__select {
        height: initial;
        border: 1px solid ${(props) => props.theme.COLORS.DARK_GRAY};
    }

    .snipcart-form__select:focus {
        border: 2px solid ${(props) => props.theme.COLORS.DARK_TURQOISE};
        padding: 15px;
    }

    // quantity box

    .snipcart-item-quantity__quantity {
        border: 1px solid ${(props) => props.theme.COLORS.BLACK};

        .snipcart__icon {
            border-radius: 20px;
            background-color: ${(props) => props.theme.COLORS.DARK_TURQOISE};

            path {
                fill: ${(props) => props.theme.COLORS.WHITE};
            }
        }
    }

    // shipping checkbox

    .snipcart-form-radio:checked + label::before {
        background: ${(props) => props.theme.COLORS.DARK_TURQOISE};
    }

    .snipcart-shipping-rates-list-item--highlight {
        border: 1px solid ${(props) => props.theme.COLORS.DARK_TURQOISE};
    }

    // shipping method

    .snipcart-shipping-rates-list-item {
        display: flex;
    }

    // payment method

    .snipcart-payment-methods-list {
        margin-top: 40px;
    }

    .snipcart-payment-methods-list-item {
        border: 1px solid ${(props) => props.theme.COLORS.DARK_TURQOISE};
    }

    // order confirmation

    .snipcart-order__details {
        .snipcart-order__box__header {
            .snipcart__box--badge {
                .snipcart__icon {
                    path {
                        fill: ${(props) => props.theme.COLORS.WHITE};
                    }
                }
            }
        }

        .snipcart__box {
            margin-top: 20px;

            .snipcart__icon {
                path {
                    fill: ${(props) => props.theme.COLORS.DARK_TURQOISE};
                }
            }
        }

        .snipcart-cart-summary-expanded-item__quantity {
            font-size: 1.8rem;
            line-height: 20px;
            font-family: 'PT Sans',sans-serif;
        }

        .snipcart-order__invoice-number--highlight {
            margin-left: 5px;
        }
    }
`;
