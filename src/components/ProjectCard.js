import React, { useState } from 'react'
import './ProjectCard.css';


function ProjectCard() {
  const [isHovered, setIsHovered] = useState(false);

  const handleTouchStart = () => {
    setIsHovered(prev => !prev);
  };
 
  return (
    <div className={`col ${isHovered ? 'hover' : ''}`} onTouchStart={handleTouchStart}>
		<div class="card-container">
			<div class="front" style={{ backgroundImage: "url(https://unsplash.it/500/500/)" }}>
				<div class="inner">
					<p>Diligord</p>
                    <span>Lorem ipsum</span>
				</div>
			</div>
			<div class="back">
				<div class="inner">
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
				</div>
			</div>
		</div>
	</div>
  )
}

export default ProjectCard