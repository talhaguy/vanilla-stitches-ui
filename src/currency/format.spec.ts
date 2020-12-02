import { Currency } from "./Currency";
import { formatPrice } from "./format";

describe("format", () => {
    describe("formatPrice()", () => {
        it("should format the price with a currency symbol", () => {
            expect(formatPrice(Currency.PhillipinesPeso, 123)).toBe("₱123.00");
            expect(formatPrice(Currency.PhillipinesPeso, 12.3)).toBe("₱12.30");
            expect(formatPrice(Currency.PhillipinesPeso, 101.56)).toBe(
                "₱101.56"
            );
            expect(formatPrice(Currency.PhillipinesPeso, 234.457)).toBe(
                "₱234.46"
            );
            expect(formatPrice(Currency.PhillipinesPeso, 234.454)).toBe(
                "₱234.45"
            );
            expect(formatPrice(Currency.PhillipinesPeso, 1234.56)).toBe(
                "₱1,234.56"
            );
            expect(formatPrice(Currency.PhillipinesPeso, 12345.67)).toBe(
                "₱12,345.67"
            );
            expect(formatPrice(Currency.PhillipinesPeso, 1234567.89)).toBe(
                "₱1,234,567.89"
            );
        });
    });
});
