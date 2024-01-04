"use client";
import Image from "next/image";
import { useState } from "react";

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <input type="file" onChange={handleImageChange} />
      {selectedImage && (
        <div>
          <Image
            src={URL.createObjectURL(selectedImage)}
            alt="Preview"
            height={1000}
            width={1000}
            className=" h-[10rem] w-[10rem] border"
          />
        </div>
      )}
    </div>
  );
};

export default Upload;
