import '../../styles/clientoverview.css';

import review1 from '../../assets/img/carlos-recommendation.png';
import review2 from '../../assets/upwork/review1.png';
import review3 from '../../assets/upwork/review2.png';
import review4 from '../../assets/upwork/review3.png';
import review5 from '../../assets/upwork/review4.png';
import review6 from '../../assets/upwork/review5.png';

const images = [review1, review2, review3, review4, review5, review6];

import useImageSlider from '../../scripts/useImageSlider';

export default function ClientOverview() {
    const current = useImageSlider(images, 5000);

    return (
        <div className="home-overview">
            <h2 className="home-overview-title">What People Say About My Work?</h2>
            <div className="home-overview-slider">
                {
                    images.map((img, index) => (
                        <img
                            key={index}
                            className={`home-overview-img ${index === current ? 'visible' : 'hidden'}`}
                            src={img.src}
                            alt={`review-${index}`}
                        />
                    ))
                }
            </div>
        </div>
    );
}
