import axios from 'axios';

export async function register({username, email, password}){
    try{
        const response = await axios.post('https://hireready-3f2m.onrender.com/api/auth/register',{
            username,
            email,
            password
        },{ withCredentials: true });
        return response.data;
    } catch (error) {
        throw error;
    }

}

export async function login({email, password}){
    try{
        const response = await axios.post('https://hireready-3f2m.onrender.com/api/auth/login',{
            email,
            password
        },{ withCredentials: true });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function logout(){
    try{
        const response = await axios.get('https://hireready-3f2m.onrender.com/api/auth/logout', {}, { withCredentials: true });
        return response.data;
    } catch (error) {
        throw error;
    }
}
export async function getMe(){ 
    try{
        const response = await axios .get('https://hireready-3f2m.onrender.com/api/auth/get-me', { withCredentials: true });
        return response.data;   
    }
    catch (error) { 
        throw error;
    }
}
