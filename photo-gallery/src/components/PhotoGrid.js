import React from "react"


const PhotoGrid = ({ photos, onDeletePhoto }) => {
    return (
        <div className="photo-grid">
            {photos.map((photo, index) => (
                <div key={index} className="photo-item">
                    <img src={photo.file} alt={photo.desc} className="photo-img"/>
                    <span className="photo-desc">{photo.desc}</span>
                    <span><button onClick={()=> onDeletePhoto(index)}>Delete</button>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default PhotoGrid;