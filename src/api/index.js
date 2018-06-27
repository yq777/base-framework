import {ajaxPost} from "../utils/instance";

export const registerUser = (username, password) => ajaxPost('/api/manager/registry', {username, password});

export const loginUser = (username, password) => ajaxPost('/api/manager/login', {username, password});

export const logoutUser = () => ajaxPost('/api/manager/logout');
