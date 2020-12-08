export const ADDRESS_FIELDS = `
<address-fields>
    <div>
        <overridable name="address-fields" section="top"></overridable>
        <fieldset class="snipcart-form__set">
            <div class="snipcart-form__row">
              <div class="snipcart-form__field snipcart-form__cell--large">
                <snipcart-label
                  class="snipcart__font--tiny"
                  for="address1"
                >{{ $localize('address_form.address1') }}</snipcart-label>
                <snipcart-input name="address1"></snipcart-input>
                <snipcart-error-message name="address1"></snipcart-error-message>
              </div>
        
              <div class="snipcart-form__field snipcart-form__cell--tidy">
                <snipcart-label
                  class="snipcart__font--tiny"
                  for="address2"
                >{{ $localize('address_form.address2') }}</snipcart-label>
                <snipcart-input name="address2"></snipcart-input>
                <snipcart-error-message name="address2"></snipcart-error-message>
              </div>
            </div>
        
            <div class="snipcart-form__field">
              <snipcart-label
                class="snipcart__font--tiny"
                for="city"
              >{{ $localize('address_form.city') }}</snipcart-label>
              <snipcart-input name="city"></snipcart-input>
              <snipcart-error-message name="city"></snipcart-error-message>
            </div>
        
            <div class="snipcart-form__field">
              <snipcart-label
                class="snipcart__font--tiny"
                for="country"
              >{{ $localize('address_form.country') }}</snipcart-label>
              <snipcart-typeahead type="dropdown" name="country" autocomplete="country"></snipcart-typeahead>
              <snipcart-error-message name="country"></snipcart-error-message>
            </div>
        
            <div class="snipcart-form__row">
              <div class="snipcart-form__field snipcart-form__cell--large">
                <snipcart-label
                  class="snipcart__font--tiny"
                  for="province"
                >{{ $localize('address_form.province') }}</snipcart-label>
                <snipcart-typeahead type="dropdown" name="province" autocomplete="province state"></snipcart-typeahead>
                <snipcart-error-message name="province"></snipcart-error-message>
              </div>
        
              <div class="snipcart-form__field snipcart-form__cell--tidy">
                <snipcart-label
                  class="snipcart__font--tiny"
                  for="postalCode"
                >{{ $localize('address_form.postalCode') }}</snipcart-label>
                <snipcart-input name="postalCode"></snipcart-input>
                <snipcart-error-message name="postalCode"></snipcart-error-message>
              </div>
            </div>
        </fieldset>
    </div>
</address-fields>
`;
