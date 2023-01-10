import axios from '../src/index'
const baseUrl = `http://localhost:3003`

axios({
  url: `${baseUrl}/hot/topic?limit=30&offset=30`
})