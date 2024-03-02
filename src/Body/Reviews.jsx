import React, { useState, useEffect } from 'react';
import reviewsData from './Reviews.json';
import stars from '../assets/stars.png';
import google from '../assets/google.png';
import { UserCircleIcon } from '@heroicons/react/24/solid';

function Reviews() {
    const [currentStartIndex, setCurrentStartIndex] = useState(0);
    const [reviewsPerPage, setReviewsPerPage] = useState(4);
    const [reviews, setReviews] = useState([]);
    const [expandedReviewIndex, setExpandedReviewIndex] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width > 1024) {
                setReviewsPerPage(4);
            } else if (width > 768) {
                setReviewsPerPage(3);
            } else if (width > 640) {
                setReviewsPerPage(2);
            } else {
                setReviewsPerPage(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        
        setReviews(reviewsData);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleExpand = (index) => {
        const actualIndex = index + currentStartIndex;
        setExpandedReviewIndex(expandedReviewIndex === actualIndex ? null : actualIndex);
    };

    const reviewCards = () => {
        return reviews.slice(currentStartIndex, currentStartIndex + reviewsPerPage).map((review, index) => (
            <li key={index} className="bg-blue-200 rounded-xl p-4 w-64 flex flex-col shadow-lg m-2 relative"
                style={{ minHeight: '276px', position: 'relative' }}> {/* Ensure the container is positioned relatively */}
                <UserCircleIcon className="w-12 h-12 text-gray-500" />
                <h3 className="text-lg font-bold">{review.name}</h3>
                <img src={stars} alt="Rating" className="w-24" />
                {/* Overlay container for expanded content */}
                <div className={`${expandedReviewIndex === index + currentStartIndex ? 'absolute z-10 bg-blue-200 rounded-xl w-full p-4' : 'hidden'} left-0 top-0`} style={{ minWidth: '100%', minHeight: '100%', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                <UserCircleIcon className="w-12 h-12 text-gray-500" />
                <h3 className="text-lg font-bold">{review.name}</h3>
                <img src={stars} alt="Rating" className="w-24" />
                    <p>{review.review}</p>
                    <button onClick={() => toggleExpand(index)} className="text-gray-500 py-1 rounded hover:underline mt-2">
                        Read Less
                    </button>
                    <div className="mt-auto">
                    <img src={google} alt="Google logo" className="h-8 w-auto" />
                    <div className="flex flex-col ml-2">
                        <p className="text-xs">Posted on</p>
                        <p className="text-sm text-gray-700 font-light">Google</p>
                    </div>
                </div>
                </div>
                <div className={`${expandedReviewIndex === index + currentStartIndex ? 'hidden' : 'block'}`}>
                    <p className="line-clamp-3">{review.review}</p>
                    <button onClick={() => toggleExpand(index)} className="text-gray-500 py-1 rounded hover:underline mt-2">
                        Read More
                    </button>
                </div>
                <div className="mt-auto">
                    <img src={google} alt="Google logo" className="h-8 w-auto" />
                    <div className="flex flex-col ml-2">
                        <p className="text-xs">Posted on</p>
                        <p className="text-sm text-gray-700 font-light">Google</p>
                    </div>
                </div>
            </li>
        ));
    };
    

    const moveForward = () => {
        setCurrentStartIndex(prevIndex => {
            let newIndex = prevIndex + reviewsPerPage;
            if (newIndex >= reviews.length) newIndex = 0;
            return newIndex;
        });
    };

    const moveBackward = () => {
        setCurrentStartIndex(prevIndex => {
            let newIndex = prevIndex - reviewsPerPage;
            if (newIndex < 0) newIndex = reviews.length - (reviews.length % reviewsPerPage || reviewsPerPage);
            return newIndex;
        });
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-center p-4">
                <h2 className="text-4xl font-medium">Google Reviews</h2>
                <h1 className="text-xl font-light">Hear what our customers have to say!</h1>
            </div>
            <div className="flex items-center justify-center">
                <button onClick={moveBackward} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full mr-2">
                    &lt;
                </button>
                <ul className="flex flex-wrap justify-center items-start">
                    {reviewCards()}
                </ul>
                <button onClick={moveForward} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full ml-2">
                    &gt;
                </button>
            </div>
        </div>
    );
}

export default Reviews;
