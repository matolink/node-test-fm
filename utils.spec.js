const { getNewUser, mapObjectToArray } = require('./utils')

describe('mapObjectToArray()', () =>{
    
    test('maps values to an array using callback', () => {
        const result = mapObjectToArray({age:11, height:11}, (k,v)=>{
            return v+10
        })
        expect(result).toEqual([21,21])
    })

    test('callback gets called', () =>{
        const mockCb = jest.fn()
        const result = mapObjectToArray({age:11, height:11}, mockCb)

        expect(mockCb.mock.calls.length).toBe(2)
    })

})
