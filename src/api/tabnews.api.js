import api from '@/api'

export default {
  list: () => api.get('/api/tabnews').then((response) => response.data),
  create: (title, description) =>
    api
      .post('/api/tabnews', {
        title,
        description,
      })
      .then((response) => response),
}
