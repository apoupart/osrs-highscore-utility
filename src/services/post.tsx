import axios from 'axios';
import qs from 'qs';

class PostService {
    httpPost(url: string, data: object) {
        return axios({
            method: 'post',
            url,
            data: qs.stringify(data),
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        });
    }
}

export default new PostService();
