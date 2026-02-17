import * as userService from "./userService";

it("should call saveUserToDB when registering user", () => {
    const spy = vi
        .spyOn(userService, "saveUserToDB")
        .mockReturnValue({ id: 1, name: "John" });

    const result = userService.registerUser({ name: "John" });

    expect(spy).toHaveBeenCalledWith({ name: "John" });
    expect(result).toEqual({ id: 1, name: "John" });

    spy.mockRestore();
});

// Now you’re testing:
// Service logic
// Without actually touching database
