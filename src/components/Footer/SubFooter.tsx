export default function SubFooter() {
    let year: number = new Date().getFullYear()

    return (
        <>
            <div className="py-4 text-sm text-center bg-footer">
                <p className="text-[13px] text-graytext text-center">Built and developed with ❤️ by Le Ha Gia Bao in Vietnam
                </p>
                <p className="text-[13px] text-graytext text-center">Copyright © {year}. All rights reserved.
                </p>
            </div>
        </>
    )
}