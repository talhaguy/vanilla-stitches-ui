import { Button, ButtonSize, ButtonType } from "./Button";

export interface SnipCartAddToCartDataAttributes {
    id: string;
    price: string;
    url: string;
    image: string;
    name: string;
}

export interface AddToCartButtonProps {
    item: SnipCartAddToCartDataAttributes;
}

export function AddToCartButton({
    item: { id, price, url, image, name },
}: AddToCartButtonProps) {
    return (
        <div
            className="snipcart-add-item"
            data-item-id={id}
            data-item-price={price}
            data-item-url={url}
            data-item-image={image}
            data-item-name={name}
            data-testid="button-cont"
        >
            <Button
                label={"Add to Cart"}
                type={ButtonType.Button}
                size={ButtonSize.Large}
            />
        </div>
    );
}
