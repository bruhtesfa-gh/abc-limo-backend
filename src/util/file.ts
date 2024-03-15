import axios from 'axios';
import FormData from 'form-data';
import { createReadStream } from 'fs';
import path from 'path';
export const checkFileExistsByUrl = async (fileUrl: string): Promise<boolean> => {
    try {
        const response = await axios.head(fileUrl);

        if (response.status === 200) {
            return true;
        } else {
            return false;
        }
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const uploadLoacalToMyS3 = async (filename: string): Promise<String> => {
    try {
        const form = new FormData();
        form.append('img', createReadStream(path.join(__dirname, "../uploads/", filename)));
        try {
            // send post using axios and recive response
            const response = await axios.post(`${process.env.S3URL}api/upload`, form, {
                headers: {
                    ...form.getHeaders(),
                },
            });
            console.log(response.data)
            return response.data.url
        } catch (error: any) {
            console.log(error.message)
            throw new Error(error.message);
        }
    } catch (error: any) {
        console.log(error.message)
        throw new Error(error.message);
    }
}