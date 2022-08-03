import { v2 } from 'cloudinary';
import { CLOUDINARY } from 'src/constant/constant';


export const CloudinaryProvider = {
    provide: CLOUDINARY,
    useFactory: () => {
        return v2.config({
            cloud_name: 'teocom',
            api_key: '168391988862139',
            api_secret: 'cztmNsQ-bNU0rT4EJKt8M2-grw4',
        });
    },
};