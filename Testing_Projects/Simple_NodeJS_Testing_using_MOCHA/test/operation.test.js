let op = require("../src/operation.js")
let assert = require("assert")

describe("operation testing",()=>{

    it("Addition testing",()=>{
        let result1 = op.add(10,20)
        assert.equal(result1,30)
    })
    it("Substraction testing",()=>{
        let result1 = op.sub(10,20)
        assert.equal(result1,-10)
    })
})