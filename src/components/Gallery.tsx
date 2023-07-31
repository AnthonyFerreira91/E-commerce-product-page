import { useState } from 'react';

export default function Gallery() {
	const [idMainImg, setIdMainImg] = useState(1);

	return (
		<div className="gallery">
			<img src={`/public/images/image-product-${idMainImg}.jpg`} alt="imgProductMain"/>
			<div>
				<img src="/public/images/image-product-1-thumbnail.jpg" alt="imgProduct1" onClick={() => setIdMainImg(1)}/>
				<img src="/public/images/image-product-2-thumbnail.jpg" alt="imgProduct2" onClick={() => setIdMainImg(2)}/>
				<img src="/public/images/image-product-3-thumbnail.jpg" alt="imgProduct3" onClick={() => setIdMainImg(3)}/>
				<img src="/public/images/image-product-4-thumbnail.jpg" alt="imgProduct4" onClick={() => setIdMainImg(4)}/>
			</div>
		</div>
	)
}