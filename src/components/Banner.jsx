import { Link } from "react-router-dom"

export const Banner = () => {
    return (
        <div className="banner w-full md:w-2/3 px-7 mx-auto relative flex items-center-justify-between border-solid mt-8">
            <div className="banner-deescription w-full md:w-1/2 p-3">
                <h2 className="mb-6 text-4xl font-anton text-gray-500">
                    Hit your protein and calorie goals easily, anytime, and anywhere!
                </h2>
                <p className="font-semibold text-lg text-red-600 py-2">
                </p>
                <div className="btn-container">
                    <Link to="/menu" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">Menu</Link>
                </div>
            </div>
        </div>
    )
}