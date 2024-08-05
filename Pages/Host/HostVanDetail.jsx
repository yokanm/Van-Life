import React from "react";
import { Link,Outlet,NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getVan } from "../../api"

function HostVanDetail() {
    const [currentVan, setCurrentVan] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const { id } = useParams()

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVan(id)
                setCurrentVan(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadVans()
    }, [id])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }
    const activeStyle = {
        fontWeight:"bold" ,
        textDecoration: "underline",
        color: "#161616",
    }
    return(
        <section>
            <Link
                to=".."
                relative="path"
                className= "back-button"
            >
                &larr; <span>Back to all vans</span>
            </Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl}  />
                    <div className="host-van-detail-info-text">
                        <i 
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>

                <nav className="host-van-detail-nav">

                    <NavLink 
                        to="." 
                        relative="path" 
                        style={({isActive}) => isActive ? activeStyle : null}
                        end
                    >
                        Details

                    </NavLink>

                    <NavLink 
                        to="pricing" 
                        style={({isActive}) => isActive ? activeStyle : null}
                    >
                        Pricing

                    </NavLink>

                    <NavLink 
                        to="photo"
                        style={({isActive}) => isActive ? activeStyle : null}
                    >
                        Photo

                    </NavLink>

                </nav>

                <Outlet context={{currentVan}}/>
            </div>
        </section>
    )
}
export default HostVanDetail