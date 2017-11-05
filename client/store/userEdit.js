import axios from 'axios'

export const updatingUser = (userId, updates) => () => {
  axios.put(`/api/users/update/${userId}`, updates)
    .then()
    .catch(err => console.log(err))
}
