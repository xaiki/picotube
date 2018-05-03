import PicoTube, {APIMethods} from '../src'
import expect from 'expect'

describe('object', function () {
    it('should load', function () {
        const picoTube = new PicoTube('fakeAPIKey')

        expect(picoTube).toBeTruthy()
    })

    it ('should throw if no APIKey provided', function () {
        expect(() => (new PicoTube())).toThrow()
    })
})

describe('APIMethods', function () {
    let pico
    beforeEach(() => {
        pico = new PicoTube('AIzaSyARQAHCYNuS7qi3mUxu0pgc4FjEBkOrx3U')
    })

    Object.keys(APIMethods).map(method => {
        it(`should run ${method}`, function (done) {
            pico[method]({
                id: 'QcQIaoHajoM'
            }).then(res => {
                expect(res.data).toBeTruthy()

                done()
            }).catch(e => console.error(method, e.response.data.error))
        })
    })
})
