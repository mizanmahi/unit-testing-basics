export function saveUserToDB(user) {
    // pretend DB call
    return { id: 1, ...user };
}

export function registerUser(user) {
    return saveUserToDB(user);
}
