import React, { useState } from 'react';
import './SwitchButtonWithBird.module.scss'

function SwitchButtonWithBird() {
    const [isActive, setIsActive] = useState(false);

    const handleButtonClick = () => {
        setIsActive(!isActive);
    };

    //     const button = document.querySelector(".switch_btn");
    // const btnWrapper = document.querySelector(".switch_wrapper");
    // const bird = document.querySelectorAll(".bird");

    // button.addEventListener("click", () => {
    //   btnWrapper.classList.toggle("active");
    //   bird.forEach((item) => {
    //     btnWrapper.classList.contains("active")
    //       ? (item.style.animation = "bird-exit 2s ease-in-out forwards")
    //       : (item.style.animation = "bird-enter 2s ease-in-out infinite alternate");
    //   });
    // });



    return (
        <>
            <div className="switch_wrapper">
                <div className="switch_btn">
                    <div className="day">
                        <div className="sun">
                            <div className="rays">
                                <div className="ray-1"></div>
                                <div className="ray-2"></div>
                                <div className="ray-3"></div>
                                <div className="ray-4"></div>
                            </div>
                            <div className="crater crater-1"></div>
                            <div className="crater crater-2"></div>
                            <div className="crater crater-3"></div>
                        </div>
                        <div className="land"></div>
                        <div className="tree">
                            <div className="stem"></div>
                            <div className="leaves"></div>
                            <div className="shadow"></div>
                        </div>
                        <div className="tree tree2">
                            <div className="stem"></div>
                            <div className="leaves"></div>
                            <div className="shadow"></div>
                        </div>
                        <div className="tree tree3">
                            <div className="stem"></div>
                            <div className="leaves"></div>
                            <div className="shadow"></div>
                        </div>
                        <div className="bird">
                            <div className="wing-1"></div>
                            <div className="wing-2"></div>
                        </div>
                        <div className="bird bird-2">
                            <div className="wing-1"></div>
                            <div className="wing-2"></div>
                        </div>
                        <div className="star star-1"></div>
                        <div className="star star-2"></div>
                        <div className="star star-3"></div>
                        <div className="star star-4"></div>
                        <div className="star star-5"></div>
                        <div className="star star-6"></div>
                        <div className="shooting-star"></div>
                        <div className="shooting-star sh-star-2"></div>
                        <div className="shooting-star sh-star-3"></div>
                    </div>
                </div>
            </div>
            {/* <div>
                <button className={`switch_btn ${isActive ? 'active' : ''}`} onClick={handleButtonClick}>
                    Toggle Button
                </button>
                <div className={`switch_wrapper ${isActive ? 'active' : ''}`}>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="bird" style={{ animation: isActive ? 'bird-exit 2s ease-in-out forwards' : 'bird-enter 2s ease-in-out infinite alternate' }} />
                    ))}
                </div>
            </div> */}
        </>
    );
}

export default SwitchButtonWithBird;