interface AppState {
	enabledGroups: boolean[];
	settingsShown: boolean;
}

const defaultState: AppState = { enabledGroups: [true, false, false, false], settingsShown: false };

const stateFromLocalStorage: Partial<AppState> = JSON.parse(
	localStorage.getItem('hangul_trainer_state') ?? '{}'
);

function createState(stateToSet: AppState) {
	const value: AppState = $state(stateToSet);

	return new Proxy(value, {
		get(target, prop) {
			return target[prop as keyof AppState];
		},
		set(target, prop, newValue) {
			target[prop as keyof AppState] = newValue;
			localStorage.setItem('hangul_trainer_state', JSON.stringify(target));
			return true;
		}
	}) as AppState;
}

const appState = createState({ ...defaultState, ...stateFromLocalStorage });

export default appState;
