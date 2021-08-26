import getData from '../../utils/getData';

describe('Fetch ENDPOINT', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('should call the EP and response', () => {
    fetch.mockResponse(JSON.stringify({ data: '12345' }));

    getData('https://google.com.ar')
      .then((response) => {
        expect(response).toEqual('12345');
      });

    expect(fetch.mock.calls[0][0]).toEqual('https://google.com.ar');
  });

});
