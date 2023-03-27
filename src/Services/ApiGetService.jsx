
export function ApiGetService(){
  return fetch('http://localhost:8080/api/v1/poems')
    .then(response => response.json()) 
    
}

export default ApiGetService;