import { Link } from "react-router-dom";
import BreadCumBgImage from "../../base/assets/images/inner-pages/breadcum-bg.png"

export default function Breadcrumbs({children, title}) {
    return (
        <section className="breadcrumb-area" style={{backgroundImage: `url(${BreadCumBgImage})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="breadcrumb-content pb-60 text-center wow fadeInUp animated">
                            <h2>{ title }</h2>
                            <div className="breadcrumb-menu">
                                <ul>
                                    <li>
                                        <Link to="/">
                                            <i className="flaticon-home pe-2"></i>Home
                                        </Link>
                                    </li>
                                    { children }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function BreadcrumbsLink({children,active = false, to = null, divider_berfore = true}) {
    if(to == null){
        return (
            <>
                { divider_berfore &&
                    (
                        <li> 
                            <i className="flaticon-next"></i> 
                        </li>
                    )
                }
                <li className={`${active ? 'active' : ''}`}>{children}</li>
            </>
        )
    }
    return (
        <>
            { divider_berfore &&
                (
                    <li> 
                        <i className="flaticon-next"></i> 
                    </li>
                )
            }
            <li className={`${active ? 'active' : ''}`}>
                <Link to={to}>
                    { children }
                </Link>
            </li>
        </>
    )
}