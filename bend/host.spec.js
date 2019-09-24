
import * as userAPI from './tests/api.js'
import { expect } from 'chai'

// const res = userAPI.getAllPlayers()

describe("get all players", () => {
    it("get all players = length 12", async () => {
  
      const resultH = await userAPI.getAllPlayers()
    //   console.log("result create -->", resultH)
  
        expect(resultH.length).to.eql(12)
  
    })
})
describe("test players", () => {


    it("first player name = Jaon Jet", async () => {
        const result = await userAPI.getAllPlayers()

        console.log("-->", result[0].FirstName)
        expect(result[0].FirstName).to.eql('Joan')
        expect(result[0].LastName).to.eql('Jet')
    })
})