import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export function storable<T>(key: string, initValue: T) {
	const storedValue = browser ? localStorage.getItem(key) : null;

	const store = writable<T>(
		browser ? (storedValue ? JSON.parse(storedValue) : initValue) : initValue
	);

	store.subscribe((value) => {
		if (browser) {
			localStorage.setItem(key, JSON.stringify(value));
		}
	});

	return store;
}
