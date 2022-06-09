let noSpace = require("./removeTheStringSpaces")

test("asdf kjsdfh sdfkdf", ()=>{
    expect(noSpace("One two")).toBe("Onetwo")
})