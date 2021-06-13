/**
 * @About
 * This file handle response of all api.
 */

//Response filter
function ResponseFilter(response) {
  var serverResponseStatus = response.status;
  var serverResponseData = (typeof response.data != 'undefined')
    ? response.data
    : ((typeof response.error != 'undefined') ? response.error : null);

  if (serverResponseData.statusCode === 0 && serverResponseData.error && serverResponseData.error.errorCode === 2) {
    console.log("token expire");
    localStorage.clear()
    // alert(serverResponseData.error.responseMessage)
    window.location.href = "/"

  }
  return {
    serverResponseStatus,
    serverResponseData
  }
}
export {
  ResponseFilter
}
