const binaryFileUpload = (entrypoint, resource, fetchHeaders, params) => {
  const payload = new FormData()
  payload.append("file", params.file.rawFile ?? params.file)
  payload.append("accountId", params.accountId)
    if("verified" in params){
        payload.append("verified", params.verified)
    }
    if("subscribed" in params){
        payload.append("subscribed", params.subscribed)
    }

  return new Promise((resolve, reject) => {
    fetch(entrypoint + '/' + resource, {
      headers: new Headers(fetchHeaders()),
      method: "POST",
      body: payload,
    })
    .then(response => response.json())
    .then(data => {
      data.id = '/v1/' + resource + '/' + data.id
      resolve({ data })
    }).catch(error => {
      reject(error)
    })
  })
}

export default binaryFileUpload;
