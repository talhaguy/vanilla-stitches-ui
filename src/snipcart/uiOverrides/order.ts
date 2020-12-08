export const ORDER = `
<order section="content-header">
    <div class="snipcart__box snipcart-order__box snipcart-order__box__header">
        <div class="snipcart__box--title">
            <div class="snipcart__box--badge snipcart__box--badge snipcart__box--badge-highlight snipcart__font--bold snipcart__font--secondary">
                <icon name="checkmark" class="snipcart__icon--white snipcart__icon--large"></icon>
            </div>
            <div>
                <h1 class="snipcart__font--subtitle">{{ $localize('confirmation.thank_you_for_your_order') }}</h1>
            </div>
        </div>
        <div v-if="isConfirmationAsync" class="snipcart-order__async-confirmation-notice">
            <flash-message type="success">
                {{ $localize('confirmation.async_confirmation_notice') }}
            </flash-message>
        </div>
        <div v-else class="snipcart-order__invoice-number">
            {{ $localize('cart.invoice_number') }}: <em class="snipcart-order__invoice-number--highlight snipcart__font--black snipcart__font--secondary">{{ cart.invoiceNumber}}</em>
        </div>
    </div>
</order>
`;
