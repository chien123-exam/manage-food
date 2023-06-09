import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from "axios";
import SwalAlertHelper from '../utils/Sweat';

const useUserStore = defineStore('userStore', () => {
    const user = ref('')

    const login = (email, pass) => {
        axios.post(`http://localhost:8000/api/users`, {
            email: email,
            pass: pass
        }).then(res => {
            if (!res.data.success) {
                alert('Error')
                return 
            }

            let userInfo = {
                user: res.data.user,
                token: res.data.token
            }

            user.value = userInfo

            localStorage.setItem('user_info', JSON.stringify(userInfo))

        }).catch(() => {
            alert('Error')
        })
    }

    const me = () => {
        return JSON.parse(localStorage.getItem('user_info'));
    }

    return {
        user ,login,me
    }
})

export default useUserStore