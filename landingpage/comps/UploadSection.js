import React from 'react';
import styles from '@/styles/upload.module.css';

const UploadSection = () => {
  return (
    <div className={styles.upload}>
        <div className={styles.pinksection}>
        </div>
        <div className={styles.text}>
            
            <label htmlFor="file">
                <img src="/upload.svg" alt="uploadicon" />
            <input id='file' type="file" accept='.jpg, .png, .webpg'/>
            </label>
            <h3>Upload your best moments here</h3>
            <p>To me, photography is the simultaneous recognition, in a fraction of a second, of the significance of event</p>
        </div>
    </div>
  )
}

export default UploadSection