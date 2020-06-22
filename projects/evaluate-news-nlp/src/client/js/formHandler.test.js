// const handleSubmit = require('./handleSubmit')

import handleSubmit from './formHandler'

test("Check handleSubmit", () => {
    expect(handleSubmit(event.preventDefault())).toBeCalled()

})
