import React from "react"

const PhotoForm = ({ onAddPhoto }) => {
    const [file, setFile] = React.useState(null);
    const [desc, setDesc] = React.useState('');
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if(selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFile(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleDescChange = (e) => {
        setDesc(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (file && desc) {
            onAddPhoto({ file, desc });
            setFile(null);
            setDesc('');
        }
        e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit} className="image-form">
            <div className="form-group">
                <div>
                <input type="file" accept="image/*" onChange={handleFileChange}/>
            </div>
            <div className="form-group">
                <input type="text" value={desc} onChange={handleDescChange} placeholder="Description" />

            </div>
            </div>
            <button type="submit" className="submit-buton">Add Photo</button>
        </form>
    )
}
export default PhotoForm;