import Header from './components/Header'
import PhotoForm from './components/form';
import React, { useState } from "react"
import PhotoGrid from './components/PhotoGrid';
import './styles/styles.css'


function App() {
  const [photos, setPhoto] = useState([]);
  const handleAddPhoto = (photo) => {
    setPhoto([...photos, photo]);
  };
  const handleDeletePhoto = (index) => {
    const updatedPhotos = photos.filter((_, i) => i !== index);
    setPhoto(updatedPhotos);
  }
  return (
    <div>
    <Header/>
    <PhotoForm onAddPhoto={handleAddPhoto}/>
    <PhotoGrid photos={photos} onDeletePhoto={handleDeletePhoto}/>
    </div>
  );
}

export default App;
