import React, { useState } from 'react';

export const CheckoutContext = React.createContext();

export const CheckoutProvider = (props) => {
	const [values, setValues] = useState({
		firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    region: '',
    zip: '',
		country: '',
		cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
	});
	return(
		<CheckoutContext.Provider value={[values, setValues]}>
			{props.children}
		</CheckoutContext.Provider>
	)
}

