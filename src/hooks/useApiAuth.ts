import Api from "../services/api";


export const useApi = ()=>({
    

    logout: async () => {
        const response = await Api.get('./logout')
        return response.data;
    }
})