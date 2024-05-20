"use client";
import styles from "./image-picker.module.css";
import { useRef, useState } from "react";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const imageInputRef = useRef();
  const [pickedImage, setPickedImage] = useState();

  function handlePickClick() {
    imageInputRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={styles.picker}>
      <label htmlFor="image">{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>No image picked yet</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="the image selected by the user"
              fill
            />
          )}
        </div>
        <input
          onChange={handleImageChange}
          ref={imageInputRef}
          className={styles.input}
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          name={name}
          required
        />
        <button
          onClick={handlePickClick}
          className={styles.button}
          type="button"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
