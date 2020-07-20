import fetch from 'node-fetch'

describe('[GET] /_v/status/200', () => {
  it(`returns correct status code and text`, async () => {
    const { status, statusText } = await fetch('http://localhost:5050', {
      headers: {
        'x-colossus-route-id': 'status',
        'x-colossus-params': 'code=200',
        'x-vtex-account': 'vtex',
        'x-vtex-workspace': 'test',
        'x-vtex-credential': '',
      },
    })

    expect(status).toEqual(200)
    expect(statusText).toEqual('OK')
  })
})
