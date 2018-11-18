import React from 'react';
import Photo from './Photo';
import NoResults from './NoResults';


const PhotoList = props => {

  const results = props.data;
  let photos;

  if (results.length) {
    photos = results.map(photo => <Photo key={photo.id} url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_n.jpg`} />);
  } else {
    photos = <NoResults />
  }
  return (
    <ul className="photo-list">
      {photos}
    </ul>
  );


}


export default PhotoList;

