import api from '@/api'

export default {
  list: () => api.get('/api/tabnews').then((response) => response.data),
}
