import Image from "next/image";

// import nextImg from "../../assets/nextjs-img.webp";
import nextImg from "@assets/nextjs-img.webp";

const GalleryPage = () => {
    return (
        <div>
            <h1 className="text-xl text-center">Image optimization</h1>
            <h1 className="text-xl mt-5 text-center">Regular image teg</h1>
            <img width={500} height={500} src="https://miro.medium.com/v2/resize:fit:1000/1*v3XndYeIsBtk4CkpMf7vmA.jpeg" alt="next-image" className="mx-auto"></img>
            <h1 className="text-xl mt-5 text-center">Nextjs  image teg</h1>

            <Image src="https://miro.medium.com/v2/resize:fit:1000/1*v3XndYeIsBtk4CkpMf7vmA.jpeg" alt="" width={500} height={500} className="mx-auto"/>
            <h1 className="text-xl mt-5 text-center">Local  image teg</h1>

            <Image src={nextImg} alt="" width={500} height={500} className="mx-auto"/>
        </div>
    );
};

export default GalleryPage;