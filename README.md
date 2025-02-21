# Video Scrolling Platform
This project aims to provide a user experience similar to Instagram's video scrolling feature, offering smooth video playback with essential interactions like like, follow, mute/unmute, and play/pause.

### Thought Process and Design Choices
The core idea was to create an engaging video-scrolling platform that mimics the seamless experience users enjoy on social media platforms. The design decisions were guided by simplicity and functionality:

Autoplay Functionality: Videos automatically play when at least 50% of the video is in the viewport. This ensures users engage with content effortlessly.
User Interactions:
Like Button: Allows users to interact with content. Currently, this is a dummy implementation.
Follow Button: Encourages user engagement and potential creator support.
Mute/Unmute Button: Provides control over audio settings for a better viewing experience.
Play/Pause Toggle: Clicking on the video toggles between play and pause, making the interaction intuitive.
### Instructions to Set Up the Project
#### Clone the Repository
git clone <repository-url>
cd <project-directory>
#### Install Dependencies
Ensure you have Node.js installed, then run:
npm install
#### Run the Project
Start the development server:
npm start
#### Open your browser and navigate to:
http://localhost:3000
### Known Issues
Like Button: Currently, this is a dummy implementation without any backend integration or persistent storage.
Follow Button: Similar to the like button, this functionality is not fully implemented and lacks integration with a user management system.
### Future Improvements
Enhanced Like and Follow Features:

Implement backend integration to store likes and follow actions persistently.
Add visual feedback for user actions.
Additional Features:

Enable comments, saving, and sharing options for each video.
Introduce analytics to measure user engagement.
UI/UX Enhancements:

Adjust the placement of buttons (like, follow, etc.) as new features like comments and sharing are added.
Improve the overall layout for better accessibility and aesthetics.
Performance Optimization:

Optimize video loading for smoother scrolling.
Implement lazy loading or pre-fetching strategies.