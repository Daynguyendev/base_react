import axiosClient from "./axiosCilent";

const addresskAPI = {
    getAddress(data) {
        const url = `/address/get`;
        return axiosClient.get(url, data);
    },
    post(data) {
        const url = `/address/post`;
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = `/address/patch`;
        return axiosClient.patch(url, data);
    },
    delete(id_dia_chi) {
        const url = `/address/delete/${id_dia_chi}`;
        return axiosClient.delete(url);
    }
};

export default addresskAPI;
