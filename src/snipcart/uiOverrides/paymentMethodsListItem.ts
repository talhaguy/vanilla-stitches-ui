export const PAYMENT_METHODS_LIST_ITEM = `
<payment-methods-list-item>
    <li class="snipcart-payment-methods-list-item">
        <button type="button"
          class="snipcart-payment-methods-list-item__button"
          @click="onClick"
          :title="this.$localize('payment.checkout_with_method', { method: methodLabel })"
        >
          <span v-if="!isDeferredPayment" class="snipcart-payment-methods-list-item__label">
            {{ \`\${$localize('payment.checkout_with')}\`}}
            <img
              v-if="paymentMethod.iconUrl"
              :src="paymentMethod.iconUrl"
              :alt="methodLabel"
              class="snipcart-payment-methods-list-item__icon"
            />
            <icon
              v-else-if="hasIcon"
              :name="\`method-\${paymentMethod.id}\`"
              :alt="methodLabel"
              class="snipcart-payment-methods-list-item__icon"
            ></icon>
            <template v-else>else 1 {{ methodLabel }}</template>
          </span>
          <span v-else class="snipcart-payment-methods-list-item__label">
            Pay With Cash/Check
          </span>
          <span class="snipcart-payment-methods-list-item__arrow">
            <icon name="continue-arrow" class="snipcart__icon--blue-dark" />
          </span>
        </button>
    </li>
</payment-methods-list-item>
`;
