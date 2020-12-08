export const CART_SUMMARY = `
    <cart-summary>
        <div class="snipcart-cart-summary">
            <section class="snipcart-cart-summary__content">
                <div class="snipcart-cart-summary__actions snipcart__box--header">
                    <h1 class="snipcart-cart-summary__title snipcart__font--subtitle">{{ $localize('cart.summary') }}</h1>
                    <a class="snipcart__actions--link" href="/#/cart">{{ $localize('actions.edit') }}</a>
                </div>

                <overridable
                    name="cart-summary"
                    section="items"
                >
                    <cart-summary-items-list class="snipcart-cart-summary__items"></cart-summary-items-list>
                </overridable>

                <hr class="snipcart-cart-summary__separator" />

                <loading-overlay>
                    <div class="snipcart-cart-summary__totals">
                        <cart-summary-fees></cart-summary-fees>
                    </div>
                </loading-overlay>
            </section>

            <footer class="snipcart-cart-summary__footer">
                <featured-payment-methods class="snipcart-featured-payment-methods--no-background" />
            </footer>
        </div>
    </cart-summary>
`;
