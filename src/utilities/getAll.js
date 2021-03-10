import axios from 'axios'

const getAll = async () => {
  const response = await axios.get('https://api.liveto.io/api/v1/events/?limit=100&amp;offset=100')
    .catch(error => {
      return error
    })
  return response.data.results
}

export { getAll }