import { useEffect, useState } from "react";
import { GoTriangleUp } from "react-icons/go";

const ScrollTop = () => {

    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.pageYOffset > 250) {
                setShowTopBtn(true)
            } else {
                setShowTopBtn(false)
            }
        });
    }, [])

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

  return (
        <div className="scroll-top-button-sideBar">
            {showTopBtn && (
                <GoTriangleUp 
                    className="location-style"
                    onClick={goToTop}
                />
            )}
        </div>
  )
}
export default ScrollTop
