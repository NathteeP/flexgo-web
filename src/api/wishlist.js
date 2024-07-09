import axios from '../config/axios';

const wishListApi = {}

wishListApi.addToWishList = accomId => axios.get(`wishlist/add/${accomId}`)
wishListApi.removeFromWishList = accomId => axios.delete(`wishlist/delete/${accomId}`)

export default wishListApi