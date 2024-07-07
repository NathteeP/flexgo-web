import axios from '../config/axios';

const feeApi = {}

feeApi.getFeeById = feeId => axios.get(`fee/${feeId}`)
feeApi.createFee = data => axios.post("fee/create", data)
feeApi.updateFee = (feeId, data) => axios.patch(`fee/${feeId}`, data)

export default feeApi