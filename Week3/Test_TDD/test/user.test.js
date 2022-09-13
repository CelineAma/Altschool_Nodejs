const user = require("../src/user")

test ("User object is returned properly", ()=> {
    const userObj = user.getUserDetails()
    expect(userObj.firstname).toBe("Emeka")
    expect(userObj.surname).toBe("Okafor")
    expect(userObj).toHaveProperty("age")
    expect(userObj.age).toBe(30)
    expect(userObj.height).toBeLessThan(150)
})