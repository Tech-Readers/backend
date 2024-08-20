import bucket from '../config/firebase.js';
import path from 'path'

const uploadImageFirebase = async (file) => {
	const fileName = Date.now() + path.extname(file.originalname);
	const fileUpload = bucket.file(fileName);
  
	await fileUpload.save(file.buffer, {
	  metadata: { contentType: file.mimetype },
	});
  
	const [url] = await fileUpload.getSignedUrl({
	  action: 'read',
	  expires: '03-09-2491',
	});
  
	return url;
}

export default uploadImageFirebase;