export function fetchPost(url){
    return fetch(url, {
        method: 'post',
        body: JSON.stringify(base),
        headers: {
          'Content-Type': 'application/json'
        }
      })
}