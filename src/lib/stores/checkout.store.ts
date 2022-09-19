import { writable } from 'svelte/store';
import type { ContactSchema } from '$lib/schemas/contact.schema';

interface IContactStore {
	first_name: string;
	last_name: string;
	email: string;
	id: string;
	phone: string;
	church: string;
}

type CustomerData = Pick<
	IContactStore,
	'email' | 'first_name' | 'last_name' | 'id' | 'phone' | 'church'
>;

const createCheckoutStore = () => {
	const { set, subscribe, update } = writable<Partial<IContactStore>>();

	const setCustomerData = (contactData: CustomerData) => {
		const { email, first_name, last_name, phone, id, church } = contactData;
		set({ email, first_name, last_name, phone, id, church });
	};

	return {
		subscribe,
		setContactData: setCustomerData
	};
};

export const checkoutStore = createCheckoutStore();
