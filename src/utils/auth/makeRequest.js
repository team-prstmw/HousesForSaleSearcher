export const makeRequest = (url, options) => {
    return fetch(url, options)
        .then((response) => {
            return response.json()
                .then((data) => {
                    if (!response.ok) throw data
                    return data
                })
        })
}

export default makeRequest
