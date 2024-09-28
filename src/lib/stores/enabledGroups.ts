import { storable } from './storable';

const enabledGroups = storable('enabledGroups', [true, false, false, false]);

export default enabledGroups;
