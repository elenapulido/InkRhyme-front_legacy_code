export function ApiService(){
  return fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => data);
    
}

export default ApiService;