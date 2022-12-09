type authConfig = {
    username: string;
    status: number;
}

export const authProvider = {
    login({username}:authConfig) {
        localStorage.setItem("username", username);
        return Promise.resolve();
    },
    logout: () => {
        localStorage.removeItem("username");
        return Promise.resolve();
    },
    checkError: ({status}:authConfig) => {
        if (status === 401 || status === 403){
        localStorage.removeItem("username");
        return Promise.reject();
    }
    return Promise.resolve()
    },
    checkAuth: () => {
        return localStorage.getItem("username") ? Promise.resolve() : Promise.reject();
    },
    getPermissions: () => Promise.resolve(),
};