export default function handleResponseFromAPI(promise) {
  promise.then(() => ({ status: 200, body: 'Success' })).error((error) => error).finally(() => {
    console.log('Got a response from the API');
  });
}
