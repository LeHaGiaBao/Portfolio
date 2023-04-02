import Image from "next/image"

export default function ServicesBlock({ image, title, content }: any) {
    return (
        <>
            <div className="item">
                <div className="icon">
                    <Image src={image} alt="illustration" className="mx-auto" />
                </div>
                <h3 className="item-heading">{title}</h3>
                <p className="item-desc">
                    {content}
                </p>
            </div>
        </>

    )
}