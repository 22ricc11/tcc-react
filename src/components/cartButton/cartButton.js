import React from 'react'

import { FaShoppingCart } from 'react-icons/fa';

function CartButton(){
    return(
        <button type='button' className='cart'>
            <FaShoppingCart/>
        </button>
    )
}

export default CartButton;