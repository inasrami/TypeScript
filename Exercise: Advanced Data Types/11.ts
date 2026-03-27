type OrderStatus = "Pending" | "Shipped" | "Delivered";

interface Dish {
    dishName: string;
    price: number;
    isVegan: boolean;
    getDishInfo(): string;
}

interface OrderDetails {
    orderId: number;
    quantity: number;
    orderStatus: OrderStatus;
    getOrderSummary(): string;
    updateOrderStatus(): void;
    getOrderStatus(): string;
}

class CustomerOrder implements Dish, OrderDetails {
    dishName: string;
    price: number;
    isVegan: boolean;
    orderId: number;
    quantity: number;
    orderStatus: OrderStatus = "Pending";

    constructor(dishName: string, price: number, isVegan: boolean, orderId: number, quantity: number) {
        this.dishName = dishName;
        this.price = price;
        this.isVegan = isVegan;
        this.orderId = orderId;
        this.quantity = quantity;
    }

    getDishInfo() {
        return `${this.dishName} - Price: $${this.price}, Vegan: ${this.isVegan ? 'Yes' : 'No'}`;
    }

    getOrderSummary() {
        return `Order ID: ${this.orderId} - Dish: ${this.dishName}, Quantity: ${this.quantity}, Total Price: $${this.price * this.quantity}, Status: ${this.orderStatus}`;
    }

    updateOrderStatus() {
        if (this.orderStatus === "Pending") {
            this.orderStatus = "Shipped";
        } else if (this.orderStatus === "Shipped") {
            this.orderStatus = "Delivered";
        }
    }

    getOrderStatus() {
        return `Order Status: ${this.orderStatus}`;
    }
}

interface FullOrder extends CustomerOrder {
    discount: number;
    deliveryAddress: string;
    getFinalPrice(): string;
}