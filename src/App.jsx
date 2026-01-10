import './App.css';
import Item from './components/Item';
import Order_details from './components/Order_Details';
import { useState } from 'react';

function App() {

    const [items, setItems] = useState(
        [
         {
            id: 1, 
            photo: "barcelona.png",
            name: "Barcelona",
            price: 109.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {

            id: 2, 
            photo: "milan.png",
            name: "Milan",
            price: 99.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 3, 
            photo: "chelsea.webp",
            name: "Chelsea",
            price: 99.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {  
            id: 4, 
            photo: "real_madrid.webp",
            name: "Real Madrid",
            price: 119.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 5, photo: "benfica.png",
            name: "Benfica",
            price: 89.49,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 6, 
            photo: "manchester.webp",
            name: "Manchester City",
            price: 129.79,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 7, 
            photo: "bayern.webp",
            name: "Bayern",
            price: 119.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 8, 
            photo: "psg.png",
            name: "PSG",
            price: 94.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 9, 
            photo: "ajax.webp",
            name: "Ajax",
            price: 89.99,
            active: false,
            quantity: 1, 
            isInBag: false
        }  
    ]);

    const shopName = "Jersey Shop Made with React JS";
    let is_in_bag = items.filter(item => item.isInBag);

    function select_handler(id) {
        let item = items.filter(item => item.id === id)[0];
        item.isInBag = !item.isInBag;
        setItems(items.map(el => el.id === id? item : el));
    }

    function quantity_handler(e, id, increment) {
        e.stopPropagation();
        let item = items.filter(item => item.id === id)[0];
        item.quantity += increment;
        setItems(items.map(el => el.id === id? item : el));
    }

    return ( 
        <>
            <section className="items">
                <h4>{shopName}</h4>

                {items.map(item => 

                    <Item
                        select_product={(id) => select_handler(id)}
                        Change_quantity={(e, id, increment) => quantity_handler(e, id, increment)}
                        item={item}
                        key={item.id}
                    />
                    
                ) }
                
            </section>
            {/* show order details when an item is selected.. 2 is just a prop */}
            {is_in_bag.length > 0 && <Order_details is_in_bag={is_in_bag} />}
            
            
        </>
    );


}

export default App
