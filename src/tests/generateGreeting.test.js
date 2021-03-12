const generateGreeting = (name = "Anonymous") => `Hello ${name}!`
// --> Bad Case
// const generateGreeting = name => `Hello ${name}! and Sawa!`

test("should generate greeting from name", () => {
  expect(generateGreeting("Mike")).toBe("Hello Mike!")
})

test("should generate greeting for no name", () => {
  expect(generateGreeting()).toBe("Hello Anonymous!")
})