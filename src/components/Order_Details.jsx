function Order_details({ is_in_bag }) {
    
    function calculate_total_amount() {
        let total_amount = 0;
        is_in_bag.forEach(item => total_amount += item.price * item.quantity);
        return total_amount.toFixed(2);
    }

    return ( 
        <>
            <section className="summary">
                <strong>Order Details</strong>
                    <table>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                        {is_in_bag.map(item =>
                            <tr>
                                <td>{item.quantity}x {item.name}</td>
                                <td>{"GHS"} {(item.price * item.quantity).toFixed(2)}</td>
                            </tr>     
                        )}
                           
                            
                            <tr>
                                <th>Total</th>
                            <th>{"GHS"} {calculate_total_amount()}</th>
                            </tr>
                        </tbody>
                    </table>
                </section>
        </>
    )
}

export default Order_details