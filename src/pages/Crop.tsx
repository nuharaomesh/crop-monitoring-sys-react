import CropList from "../components/Crop/CropList.tsx";
import CropDetails from "../components/Crop/CropDetails.tsx";

export default function Crop() {
    return (
        <section className="main-border crop-container">
            <CropList/>
            <CropDetails/>
        </section>
    )
}