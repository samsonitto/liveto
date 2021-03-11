import axios from 'axios'

// Haetaan 100 tapahtumaa rajapinnasta
const getAll = async () => {
  const response = await axios.get('https://api.liveto.io/api/v1/events/?limit=100&amp;offset=100')
    .catch(error => {
      return error
    })
  return response.data.results
}

// Haetaan 1 tapahtuma rajapinnasta, slug parametrin perusteella
const getOne = async (slug) => {
  const response = await axios.get(`https://api.liveto.io/api/v1/events/?slug=${slug}`)
    .catch(error => {
      return error
    })

  return response.data.results
}

export default { getAll, getOne }