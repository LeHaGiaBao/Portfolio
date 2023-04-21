export default function SubFooter() {
    let year: number = new Date().getFullYear()

    return (
        <>
            <div className="py-4 text-sm text-center bg-footerwhite dark:bg-footerdark">
                <p className="text-[15px] text-footerdark dark:text-graytext text-center">Built and developed with ❤️ by Le Ha Gia Bao in Vietnam
                </p>
                <p className="text-[14px] text-footerdark dark:text-graytext text-center mt-1">Copyright © {year}. All rights reserved.
                </p>
            </div>
        </>
    )
}