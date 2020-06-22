import checkForName from './nameChecker'

test("Check for name", () => {
    expect(checkForName('hulu')).toBe(undefined)
})