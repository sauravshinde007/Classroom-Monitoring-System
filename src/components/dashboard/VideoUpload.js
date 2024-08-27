import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const VideoUpload = () => {
  const [videoFile, setVideoFile] = useState(null);

  const handleFileChange = (event) => {
    setVideoFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (videoFile) {
      // Create a FormData object to send the video file
      const formData = new FormData();
      formData.append('video', videoFile);
      
      // For now, we'll just log the file name to the console
      console.log("Uploading:", videoFile.name);
      
      // TODO: Send the FormData to your server or handling endpoint
      // Example: 
      // fetch('YOUR_SERVER_ENDPOINT', {
      //   method: 'POST',
      //   body: formData,
      // })
      // .then(response => response.json())
      // .then(data => console.log(data))
      // .catch(error => console.error('Error:', error));
    } else {
      console.error("No video file selected.");
    }
  };

  return (
    <div className="container mt-5">
      <h1>Upload Video</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="videoUpload">Choose video file</Label>
          <Input
            type="file"
            name="video"
            id="videoUpload"
            accept="video/*"
            onChange={handleFileChange}
          />
          <FormText color="muted">
            Select a video file to upload. Supported formats: MP4, AVI, MKV.
          </FormText>
        </FormGroup>
        <Button color="primary" type="submit">
          Upload Video
        </Button>
      </Form>
    </div>
  );
};

export default VideoUpload;