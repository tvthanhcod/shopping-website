import DefaultLayout from "../layouts/Default"

const Home = () => {
    return (
        <DefaultLayout>
            <h1>Home Page</h1>
            <div className="box width-[50px] height-[50px] bg-red-400"></div>
        </DefaultLayout>
    )
}

export default Home